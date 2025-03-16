"use client";

import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import LinkedInLogo from "./icons/LinkedInLogo";
import GithubLogo from "./icons/GithubLogo";
import TLLogo from "./icons/TLLogo";

const navItems = ["About", "Blog", "Markets"];

function Navbar() {
  const path = usePathname();

  return (
    <header className="bg-[rgb(var(--background-dark)/0.75)] backdrop-blur-sm fixed h-[var(--h-navbar)] top-0 w-full border-b border-teal-950">
      <div className="w-section px-2 md:px-4 h-full flex justify-between">
        <div className="flex justify-center items-center">
          <Link href="/">
            <TLLogo className="size-12 text-gray-300" />
          </Link>
        </div>
        <ul className="flex gap-3 h-full">
          {navItems.map((item, idx) => (
            <Link
              key={`${item}-${idx}`}
              className="relative group"
              href={`/${item.toLowerCase()}`}
            >
              <li
                key={item}
                className="text-gray-400 relative h-full text-sm font-semibold px-3 py-2 flex justify-center items-center"
              >
                {item}
              </li>
              <div
                className={clsx(
                  "absolute group-hover:border-b-2 bottom-0 w-full h-2",
                  path.includes(item.toLowerCase())
                    ? "border-teal-400 border-b-2"
                    : "border-teal-900"
                )}
              ></div>
            </Link>
          ))}
          <Link
            href="https://www.linkedin.com/in/tomasleriche/"
            target="_blank"
            className="self-center p-3 group"
          >
            <LinkedInLogo className="text-gray-500 group-hover:text-gray-300  size-4" />
          </Link>
          <Link
            href="https://github.com/samotleriche"
            target="_blank"
            className="self-center p-3 group"
          >
            <GithubLogo className="text-gray-500 group-hover:text-gray-300  size-4" />
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
