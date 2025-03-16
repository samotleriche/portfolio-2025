import React from "react";

function Footer() {
  return (
    <footer className="bg-[rgb(var(--background-dark)/0.75)] text-gray-400 h-16 border-t border-teal-950 flex items-center justify-center">
      <p>&copy; Tomas Leriche - {new Date().getFullYear()} </p>
    </footer>
  );
}

export default Footer;
