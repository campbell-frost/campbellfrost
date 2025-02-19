import Link from "next/link";
import ToggleTheme from "./ToggleTheme";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 mx-auto">
      <div className="w-full max-w-7xl flex justify-between items-center p-3 text-sm px-6 ">
        <div className="flex items-center">
          <h1 className="text-3xl font-semibold mr-4">
            <Link href="/">Campbell Frost</Link>
          </h1>
        </div>
        <div className="text-end flex">
          <ToggleTheme />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
