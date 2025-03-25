import React from "react";
import { BookText } from "lucide-react";

type HeroProps = {
  supertitle: string;
  title: string;
  description: string;
  date?: string;
};

function Hero({ supertitle, title, description, date }: HeroProps) {
  return (
    <div className="flex justify-center h-[23rem] items-center p-section">
      <div className="flex flex-col justify-center max-w-[40rem] items-center gap-3">
        <h3 className="text-sm flex justify-center items-center gap-2 text-violet-400 uppercase">
          <BookText className="size-4" />
          {supertitle}
        </h3>
        <h1 className="text-6xl font-bold text-center">{title}</h1>
        <p className="text-lg font-semibold text-gray-500 text-center">
          {description}
        </p>
        {date && <p className="text-sm text-gray-400">{date}</p>}
      </div>
    </div>
  );
}

export default Hero;
