import React from "react";
import { BookText } from "lucide-react";
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
    <div className="flex justify-center items-center px-section pt-30 md:pt-40">
      <div className="flex flex-col justify-center max-w-section items-center gap-10">
        <div className="flex max-w-[40rem] flex-col gap-3 items-center">
          <h3 className="text-sm flex justify-center items-center gap-2 text-violet-400 uppercase">
            <BookText className="size-4" />
            {supertitle}
          </h3>
          <h1 className="text-5xl pb-4 font-bold text-center">{title}</h1>
          <p className="text-2xl pb-4 font-semibold text-gray-500 text-center">
            {description}
          </p>
          {date && <p className="text-sm text-gray-400">{formattedDate}</p>}
        </div>
        {heroImage && (
          <div>
            <Image
              src={heroImage}
              alt="hero"
              width={700}
              height={200}
              className="rounded-lg h-80 object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
