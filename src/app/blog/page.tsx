import { Metadata } from "next";
import React from "react";
import Hero from "@/components/sections/blog/hero";
import Blogs from "@/components/sections/blog/blogs";

export const metadata: Metadata = {
  title: "Tomas Leriche | Blog",
  description: "A collection of thoughts and ideas from Tomas Leriche.",
};

function Blog() {
  return (
    <div className="pt-[var(--h-navbar)] font-[family-name:var(--font-geist-sans)]">
      <main className="flex w-section justify-center items-center flex-col gap-8 row-start-2">
        <Hero
          supertitle="Personal blog"
          title="Welcome to my blog!"
          description="This is a collection of thoughts and ideas from Tomas Leriche about software engineering, finance, motion design, and more."
        />
        <Blogs />
      </main>
    </div>
  );
}

export default Blog;
