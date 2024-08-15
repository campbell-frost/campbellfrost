"use client";
import { cn } from "@/lib/utils";
import React from "react";

const technologiesList = [
  {
    name: "C#",
    link: "./images/CSharpLogo.png",
  },
  {
    name: "Go",
    link: "./images/GoLogo.png",
  },
  {
    name: "Typescript",
    link: "./images/TypescriptLogo.png",
  },
];

const Technologies = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const pauseOnHover = false;

  return (
    <div className="bg-secondary">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div
          ref={containerRef}
          className={cn(
            "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
          )}
        >
          <ul
            ref={scrollerRef}
            className={cn(
              " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
              true && "animate-scroll ",
              pauseOnHover && "hover:[animation-play-state:paused]"
            )}
          >
            {technologiesList.map((item, _) => (
              <li
                className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
                style={{
                  background:
                    "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
                }}
                key={item.name}
              >
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <img src={item.link} width={100} height={100}></img>
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.name}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
