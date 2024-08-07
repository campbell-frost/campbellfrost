import { Highlight } from "./ui/hero-background";

/* eslint-disable react/no-unescaped-entities */
const Hero = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex justify-start">
        {" "}
        <div>
          <p className="text-xl font-bold">Hi, I'm Campbell</p>
          <p className=" text-6xl mt-6 font-bold mb-10 leading-tight">
            I am a full stack <Highlight>software engineer</Highlight> with a
            passion for crafting digital solutions
          </p>
        </div>
      </div>
      <div className="flex justify-end">bye</div>
    </div>
  );
};
export default Hero;
