import Link from "next/link";
import React from "react";

const navItems = ["About", "Blog", "Contact"];

function Navbar() {
  return (
    <header className="bg-[rgb(var(--background-dark)/0.75)] backdrop-blur-sm fixed h-[var(--h-navbar)] top-0 w-full border-b border-b-gray-800">
      <div className="w-section h-full flex justify-between">
        <div className="flex justify-center items-center">
          <Link href="/">
            <p className="text-white text-4xl">TL</p>
          </Link>
        </div>
        <ul className="flex gap-3 h-full">
          {navItems.map((item) => (
            <li
              key={item}
              className="text-gray-300 font-semibold px-3 py-2 flex justify-center items-center"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
