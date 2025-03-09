import React from "react";

const navItems = ["Item 1", "Item 2", "Item 3"];

function Navbar() {
  return (
    <header className="bg-cyan-900 fixed h-[var(--h-navbar)] top-0 w-full">
      <div className="w-section h-full">
        <ul className="flex gap-3 h-full">
          {navItems.map((item) => (
            <li
              key={item}
              className="text-white px-3 py-2 flex justify-center items-center"
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
