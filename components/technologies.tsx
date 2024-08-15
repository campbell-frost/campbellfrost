"use client";
import React from "react";
import { MovingCards } from "./ui/moving-cards";

const techList1 = [
  {
    image: "/images/BlazorLogo.png",
    text: "Blazor",
  },
  {
    image: "/images/ReactLogo.png",
    text: "React.js",
  },
  {
    image: "/images/CSharpLogo.png",
    text: "C#",
  },
  {
    image: "/images/VueLogo.png",
    text: "Vue.js",
  },
  {
    image: "/images/GoLogo.png",
    text: "Go",
  },
  {
    image: "/images/SvelteLogo.png",
    text: "Svelte",
  },
];

const techList2 = [
  {
    image: "/images/NETLogo.png",
    text: ".NET",
  },
  {
    image: "/images/NextJsLogo.png",
    text: "Next.js",
  },
  {
    image: "/images/TypescriptLogo.png",
    text: "TypeScript",
  },
  {
    image: "/images/FirebaseLogo.png",
    text: "Firebase",
  },
  {
    image: "/images/SupabaseLogo.png",
    text: "Supabase",
  },
  {
    image: "/images/AzureLogo.png",
    text: "Azure",
  },
];

const Technologies = () => {
  return (
    <div className="bg-secondary">
      <div className="max-w-7xl mx-auto py-8">
        <h1 className="font-bold px-4 text-3xl">Technologies I use</h1>
        <div className="mx-4 mt-2">
          <MovingCards
            items={techList1}
            direction="left"
            pauseOnHover={false}
            speed="slow"
          />
          <MovingCards
            items={techList2}
            direction="right"
            pauseOnHover={false}
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
