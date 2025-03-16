"use client";
import DarkModeToggle from "./DarkModeToggle";
import Logo from "../icons/Logo";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between py-3 px-4 border-b">
      <div className="flex items-center gap-20">
        <div className="flex items-center ">
          <Logo height={60} width={200} />
        </div>
        <div className=" flex items-center gap-4">
          <p className="font-medium text-neutral-900 dark:text-neutral-50">
            Home
          </p>
          <p className="font-medium text-neutral-900 dark:text-neutral-50">
            About
          </p>
          <p className="font-medium text-neutral-900 dark:text-neutral-50">
            Work Ex
          </p>
          <p className="font-medium text-neutral-900 dark:text-neutral-50">
            Projects
          </p>
          <p className="font-medium text-neutral-900 dark:text-neutral-50">
            Contact
          </p>
        </div>
      </div>
      <DarkModeToggle />
    </div>
  );
}
