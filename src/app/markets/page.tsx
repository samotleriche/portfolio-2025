import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Tomas Leriche | Markets",
  description:
    "Exploring the markets and the world of finance through the lens of a software engineer.",
};

function Markets() {
  return (
    <div className="pt-[var(--h-navbar)] h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="w-section p-section">Markets</div>
    </div>
  );
}

export default Markets;
