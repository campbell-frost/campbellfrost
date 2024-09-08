import Image from "next/image";
import { HeroHighlight, Highlight } from "./ui/hero-background";

const Hero = () => {
  return (
    <HeroHighlight>
      <div className="relative max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 mr-22">
            <p className="text-xl font-bold">Hi, I&apos;m Campbell</p>
            <p className="text-6xl mt-6 font-bold mb-10 leading-tight">
              I am a full stack <Highlight>software engineer</Highlight>{" "}
              passionate about web development
            </p>

            <h5 className="inline">
              Contact me -{" "}
              <a
                href="mailto:campbellsfrost@gmail.com"
                className="px-2 rounded-md text-lg font-semibold hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white transition-colors duration-300 "
              >
                campbellsfrost@gmail.com
              </a>
            </h5>
          </div>
          <div className="w-full md:w-1/3 mt-4 ml-22">
            <Image
              src="/images/Profile.png"
              height="1600"
              width="1600"
              className="w-full object-cover rounded-xl"
              alt="thumbnail"
            />
          </div>
        </div>
      </div>
    </HeroHighlight>
  );
};

export default Hero;
