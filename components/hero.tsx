import Image from "next/image";
import { Highlight } from "./ui/hero-background";

const Hero = () => {
  return (
    <div className="flex flex-wrap items-center justify-between">
      <div className="w-full md:w-1/2 mb-10 md:mb-0 mr-22">
        <p className="text-xl font-bold">Hi, I&apos;m Campbell</p>
        <p className="text-6xl mt-6 font-bold mb-10 leading-tight">
          I am a full stack <Highlight>software engineer</Highlight> with a
          passion for crafting digital solutions
        </p>
        <h5 className="text-lg font-semibold hover:bg-white hover:text-black transition-colors duration-300">
          Contact me -{" "}
          <a href="mailto:campbellsfrost@gmail.com" className="email-link">
            campbellsfrost@gmail.com
          </a>
        </h5>
      </div>
      <div className="w-full md:w-1/2 mt-4 ml-22">
        <Image
          src="/images/me_rock.png"
          height="1600"
          width="1600"
          className="w-full object-cover rounded-xl"
          alt="thumbnail"
        />
      </div>
    </div>
  );
};

export default Hero;
