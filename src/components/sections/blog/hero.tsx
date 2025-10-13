import React from "react";
import { BookOpen, PenTool } from "lucide-react";
import Image from "next/image";

type HeroProps = {
  supertitle: string;
  title: string;
  description: string;
  date?: string;
  heroImage?: string;
};

function Hero({ supertitle, title, description, date, heroImage }: HeroProps) {
  const formattedDate = new Date(date ?? "1990-08-19 PST").toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="relative flex flex-col items-center text-center space-y-8">
      {/* Icon with glow effect */}
      <div className="relative group">
        <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-violet-400/20 via-teal-500/20 to-violet-400/20 blur-xl group-hover:blur-2xl transition-all duration-700 animate-pulse"></div>
        <div className="relative rounded-full size-20 lg:size-24 overflow-hidden border-4 border-gray-700/50 group-hover:border-violet-400/60 transition-all duration-500 bg-gradient-to-br from-violet-900/30 to-teal-900/30 backdrop-blur-sm flex items-center justify-center">
          <BookOpen className="w-10 h-10 lg:w-12 lg:h-12 text-violet-400 group-hover:text-violet-300 transition-colors duration-500" />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6 max-w-4xl">
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2 text-violet-400 uppercase text-sm font-semibold tracking-wider">
            <PenTool className="w-4 h-4" />
            {supertitle}
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold">
            <span className="bg-gradient-to-r from-violet-400 via-teal-500 to-violet-400 bg-clip-text text-transparent animate-gradient">
              {title}
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>

          {date && (
            <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-violet-400 rounded-full"></span>
              {formattedDate}
            </p>
          )}
        </div>
      </div>

      {heroImage && (
        <div className="relative group">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-violet-500/20 to-teal-500/20 blur-lg group-hover:blur-xl transition-all duration-500"></div>
          <div className="relative rounded-2xl overflow-hidden border border-gray-700/50 group-hover:border-violet-400/60 transition-all duration-500">
            <Image
              src={heroImage}
              alt="hero"
              width={700}
              height={200}
              className="h-80 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/20"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
