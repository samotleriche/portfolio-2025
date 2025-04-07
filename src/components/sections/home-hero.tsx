import React from "react";
import Spline from "@splinetool/react-spline/next";
import Button from "../ui/Button";

function HomeHero() {
  return (
    <section className="h-section flex flex-col gap-5 z-20 w-full p-section">
      <div className="flex flex-col justify-center gap-4 max-w-[500px]">
        <h1 className="bg-gradient-to-bl w-fit from-teal-400 to-violet-500 bg-clip-text text-5xl  md:text-8xl font-extrabold tracking-tight text-transparent">
          Welcome,
        </h1>
        <p className="text-2xl ml-2 text-gray-400 tracking-wide">
          {
            "I'm Tomas Leriche, software engineer. Welcome to my small corner of the internet."
          }
        </p>
        <div className="flex gap-4">
          <Button text="About me" href="/about" />
          <Button text="Latest blog post" href="/blog" />
        </div>
      </div>
      <div className="lg:absolute w-full lg:w-[50%] right-0 bottom-0 lg:bottom-auto">
        <Spline scene="https://prod.spline.design/bh4SaWJT-4e2JTXB/scene.splinecode" />
      </div>
    </section>
  );
}

export default HomeHero;
