import { Metadata } from "next";
import React from "react";
import Simple from "@/components/sections/experiments/simplespline";

export const metadata: Metadata = {
  title: "Tomas Leriche | Experiments",
  description:
    "Exploring various experiments with tech for the web and beyond.",
};

function Experiments() {
  return (
    <div className="pt-[var(--h-navbar)] h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="w-section p-section">
        <div className="flex pb-4 flex-col gap-2">
          <h1 className="text-5xl">Experiments</h1>
          <p className="text-lg max-w-xl">
            This page is for playing around with various technology. I&apos;m
            using this page to test out ideas. Some of them will stick around
            and others will only exist here for a short time.
          </p>
        </div>
        <hr />
        <div className="flex py-4 flex-col gap-2">
          <h2 className="text-4xl">Rive</h2>
          <p className="text-lg max-w-xl">
            Using rive in a Next.js application:
          </p>
        </div>
        <div className="bg-violet-900 flex gap-10 p-8 rounded-3xl">
          <div className="flex justify-start items-start h-[31rem] w-[31rem]">
            <Simple />
          </div>
          <div className="flex flex-col gap-10">
            <h4 className="text-2xl">Example 1: Text follow path</h4>
            <p className="text-lg">Pretty fast to create</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiments;
