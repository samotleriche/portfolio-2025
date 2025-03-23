import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Tomas Leriche | Blog",
  description: "A collection of thoughts and ideas from Tomas Leriche.",
};

function Blog() {
  return (
    <div className="pt-[var(--h-navbar)] h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="w-section p-section">BLOG coming soon!</div>
    </div>
  );
}

export default Blog;
