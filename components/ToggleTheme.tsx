"use client";

import * as React from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const dark = resolvedTheme === "dark";

  const handleThemeChange = () => {
    setTheme(dark ? "light" : "dark");
  };

  return (
    <Button variant={"ghost"} size="icon" onClick={handleThemeChange} className="border">
      <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 " />
    </Button>
  );
}
