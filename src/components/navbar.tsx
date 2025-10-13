"use client";

import Link from "next/link";
import React, { useState } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import LinkedInLogo from "./icons/LinkedInLogo";
import GithubLogo from "./icons/GithubLogo";
import TLLogo from "./icons/TLLogo";
import { Menu, X } from "lucide-react";

const navItems = ["About", "Blog", "Experiments"];

function Navbar() {
  const path = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed h-[var(--h-navbar)] z-40 top-0 w-full">
      {/* Gradient Background with Blur */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 [backdrop-filter:blur(20px)] border-b border-teal-400/20"></div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-violet-500/5 to-teal-500/10 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>

      <div className="relative w-section px-section h-full flex justify-between items-center">
        {/* Logo */}
        <div className="flex justify-center items-center">
          <Link href="/" className="group" onClick={closeMobileMenu}>
            <div className="p-2 rounded-xl bg-teal-500/10 border border-teal-400/20 group-hover:bg-teal-500/20 group-hover:border-teal-400/40 group-hover:scale-110 transition-all duration-300">
              <TLLogo className="size-8 text-teal-300 group-hover:text-teal-200 transition-colors duration-300" />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-2 h-full items-center">
          {navItems.map((item, idx) => (
            <Link
              key={`${item}-${idx}`}
              className="relative group"
              href={`/${item.toLowerCase()}`}
            >
              <li
                key={item}
                className="text-gray-300 group-hover:text-white relative h-full text-sm font-semibold px-4 py-3 flex justify-center items-center rounded-xl bg-gray-800/30 border border-gray-700/30 group-hover:bg-teal-500/20 group-hover:border-teal-400/40 group-hover:scale-105 transition-all duration-300"
              >
                {item}
              </li>
              {/* Active State Indicator */}
              {path.includes(item.toLowerCase()) && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-teal-400 rounded-full animate-pulse"></div>
              )}
            </Link>
          ))}

          {/* Social Links */}
          <div className="flex items-center gap-2 ml-4">
            <Link
              href="https://www.linkedin.com/in/tomasleriche/"
              target="_blank"
              className="p-3 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:bg-blue-500/20 hover:border-blue-400/40 hover:scale-110 transition-all duration-300 group"
            >
              <LinkedInLogo className="text-gray-300 group-hover:text-blue-300 size-4 transition-colors duration-300" />
            </Link>
            <Link
              href="https://github.com/samotleriche"
              target="_blank"
              className="p-3 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:bg-teal-500/20 hover:border-teal-400/40 hover:scale-110 transition-all duration-300 group"
            >
              <GithubLogo className="text-gray-300 group-hover:text-teal-300 size-4 transition-colors duration-300" />
            </Link>
          </div>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden cursor-pointer p-2 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:bg-teal-500/20 hover:border-teal-400/40 transition-all duration-300"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-300" />
          ) : (
            <Menu className="w-6 h-6 text-gray-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={clsx(
          "fixed top-[var(--h-navbar)] left-0 right-0 bottom-0 z-30 md:hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        {/* Backdrop - covers only the area below navbar */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={closeMobileMenu}
        ></div>

        {/* Menu Panel */}
        <div
          className={clsx(
            "absolute top-0 left-0 right-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-b border-teal-400/20 transition-transform duration-300 ease-in-out",
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          )}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-violet-500/5 to-teal-500/10"></div>

          <div className="relative w-section px-section py-8">
            {/* Navigation Links */}
            <div className="space-y-4 mb-8">
              {navItems.map((item, idx) => (
                <Link
                  key={`${item}-${idx}`}
                  href={`/${item.toLowerCase()}`}
                  onClick={closeMobileMenu}
                  className={clsx(
                    "block px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-300",
                    path.includes(item.toLowerCase())
                      ? "bg-teal-500/20 border border-teal-400/40 text-teal-300"
                      : "bg-gray-800/30 border border-gray-700/30 text-gray-300 hover:bg-teal-500/20 hover:border-teal-400/40 hover:text-white"
                  )}
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              <Link
                href="https://www.linkedin.com/in/tomasleriche/"
                target="_blank"
                onClick={closeMobileMenu}
                className="p-4 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:bg-blue-500/20 hover:border-blue-400/40 hover:scale-110 transition-all duration-300 group"
              >
                <LinkedInLogo className="text-gray-300 group-hover:text-blue-300 size-6 transition-colors duration-300" />
              </Link>
              <Link
                href="https://github.com/samotleriche"
                target="_blank"
                onClick={closeMobileMenu}
                className="p-4 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:bg-teal-500/20 hover:border-teal-400/40 hover:scale-110 transition-all duration-300 group"
              >
                <GithubLogo className="text-gray-300 group-hover:text-teal-300 size-6 transition-colors duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
