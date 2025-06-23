import Link from "next/link";
import React from "react";

type ButtonProps = {
  text: string;
  href?: string;
};

function Button({ text, href }: ButtonProps) {
  if (href) {
    return (
      <Link href={href}>
        <button className="bg-gradient-to-bl cursor-pointer from-teal-400/20 to-violet-500/20 text-gray-300 text-lg font-semibold border-transparent py-2 px-6 w-fit rounded-lg border-1 hover:border-teal-600 hover:text-gray-200 transition-colors duration-300">
          {text}
        </button>
      </Link>
    );
  }

  return (
    <button className="bg-gradient-to-bl cursor-pointer from-teal-400/20 to-violet-500/20 text-gray-300 text-lg font-semibold border-transparent py-2 px-6 w-fit rounded-lg border-1 hover:border-teal-600 hover:text-gray-200 transition-colors duration-300">
      {text}
    </button>
  );
}

export default Button;
