"use client";
import { useState } from "react";

import DarkModeToggle from "@/components/generic/DarkModeToggle";
import Logo from "@/components/icons/Logo";
import HamburgerMenu from "@/components/generic/HamburgerMenu";
import Underline from "@/components/icons/Underline";
import useNavigation from "@/hooks/useNavigation";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Work Ex", href: "/#work-ex" },
  { label: "Projects", href: "/#projects" },
  // { label: "Blog", href: "/#blog" },
  { label: "Socials", href: "/#socials" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { activeSection, handleNavClick } = useNavigation(navItems);

  return (
    <div className="fixed top-0 left-0 right-0 bg-neutral-50 dark:bg-theme-dark z-50 w-full pb-2">
      <div className="gradient-animation text-sm font-medium text-neutral-50 text-center py-1">
        Hire me, I&apos;m as strategic as a cat stalking a laser pointer 😼
      </div>
      <div className="flex items-center justify-between py-3 px-4 border-b border-primary/30 max-w-7xl mx-auto">
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
                onClick={(e) => handleNavClick(e, item.href)}
                className={`font-medium transition-colors ${
                  activeSection === item.href
                    ? "text-primary"
                    : "text-neutral-900 dark:text-neutral-50 hover:text-neutral-700 dark:hover:text-neutral-300"
                }`}
                role="button"
                tabIndex={0}
              >
                {item.label}
                {activeSection === item.href && <Underline width={40} />}
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
                className={`font-medium transition-colors ${
                  activeSection === item.href
                    ? "text-primary"
                    : "text-neutral-900 dark:text-neutral-50 hover:text-neutral-700 dark:hover:text-neutral-300"
                }`}
                onClick={(e) => {
                  handleNavClick(e, item.href);
                  setIsMobileMenuOpen(false);
                }}
                role="button"
                tabIndex={0}
              >
                {item.label}{" "}
                {activeSection === item.href && <Underline width={40} />}
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
