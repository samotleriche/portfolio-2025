import React from "react";
import { BookText } from "lucide-react";

function Hero() {
  return (
    <div className="flex justify-center h-[23rem] items-center p-section">
      <div className="flex flex-col justify-center max-w-[40rem] items-center gap-3">
        <h3 className="text-sm flex justify-center items-center gap-2 text-violet-400 uppercase">
          <BookText className="size-4" />
          Personal Blog
        </h3>
        <h1 className="text-6xl font-bold text-center">Welcome to my blog!</h1>
        <p className="text-lg font-semibold text-gray-500 text-center">
          This is a collection of thoughts and ideas from Tomas Leriche about
          software engineering, finance, motion design, and more.
        </p>
      </div>
    </div>
  );
}

export default Hero;
