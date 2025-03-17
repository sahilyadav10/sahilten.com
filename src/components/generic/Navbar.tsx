"use client";
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import Logo from "@/components/icons/Logo";
import HamburgerMenu from "./HamburgerMenu";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work Ex", href: "/#work-ex" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex items-center justify-between py-3 px-4 border-b">
        <div className="flex items-center gap-4 md:gap-20">
          <div className="flex items-center">
            <Logo height={60} width={200} />
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-medium text-neutral-900 dark:text-neutral-50 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <DarkModeToggle />
          <HamburgerMenu
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-neutral-900 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-40`}
      >
        <div className="p-4 pt-16">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-medium text-neutral-900 dark:text-neutral-50 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-theme-dark/90 md:hidden z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
