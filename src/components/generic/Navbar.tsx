"use client";
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import Logo from "@/components/icons/Logo";
import HamburgerMenu from "./HamburgerMenu";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work Ex", href: "/#work-ex" },
  { label: "Projects", href: "/#projects" },
  // { label: "Blog", href: "/#blog" },
  { label: "Socials", href: "/#socials" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    // If it's the home link with no hash, just scroll to top
    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Extract the id from href
    const id = href.split("#")[1];
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Update URL without triggering scroll
      window.history.pushState({}, "", href);
    }
  };

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
                onClick={(e) => handleNavClick(e, item.href)}
                className="font-medium text-neutral-900 dark:text-neutral-50 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
                role="button"
                tabIndex={0}
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
                onClick={(e) => {
                  handleNavClick(e, item.href);
                  setIsMobileMenuOpen(false);
                }}
                role="button"
                tabIndex={0}
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
