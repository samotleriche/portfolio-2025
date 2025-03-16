import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Tomas Leriche | About",
  description:
    "Tomas Leriche is a software engineer and motion designer currently based in Santa Monica, California.",
};

function About() {
  return (
    <div className="pt-[var(--h-navbar)] h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="w-section p-section">ABOUT</div>
    </div>
  );
}

export default About;
