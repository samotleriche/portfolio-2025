import React from "react";

function HomeHero() {
  return (
    <section className="h-section z-20 w-full p-section">
      <div className="flex flex-col gap-4 max-w-[500px]">
        <h1 className="bg-gradient-to-br w-fit from-teal-400 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent">
          Greetings <span className="text-5xl">👋</span>
        </h1>
        <p className="text-2xl">
          I'm Tomas Leriche, software engineer. Welcome my small corner of the
          internet.
        </p>
      </div>
    </section>
  );
}

export default HomeHero;
