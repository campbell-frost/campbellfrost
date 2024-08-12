import Image from "next/image";
import { Highlight } from "./ui/hero-background";

const Hero = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex justify-start">
        <div>
          <p className="text-xl font-bold">Hi, I'm Campbell</p>
          <p className="text-6xl mt-6 font-bold mb-10 leading-tight">
            I am a full stack <Highlight>software engineer</Highlight> with a
            passion for crafting digital solutions
          </p>
          <p className="text-xl">
            Contact me -{" "}
            <a href="mailto:campbellsfrost@gmail.com" className="email-link">
              campbellsfrost@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="relative w-full aspect-square">
          <Image
            src="/images/me_rock.png"
            fill
            className="object-cover rounded-xl"
            alt="thumbnail"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;