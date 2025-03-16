"use client";
import DarkModeToggle from "./DarkModeToggle";
import Logo from "../icons/Logo";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between py-3 px-4 border-b">
      <div className="flex items-center gap-20">
        <div className="flex items-center ">
          <Logo isDarkMode height={60} width={200} />
        </div>
        <div className=" flex items-center gap-4">
          <p>Home</p>
          <p>About</p>
          <p>Work Ex</p>
          <p>Projects</p>
          <p>Contact</p>
        </div>
      </div>
      <DarkModeToggle />
    </div>
  );
}
