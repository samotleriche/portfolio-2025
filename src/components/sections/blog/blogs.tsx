import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);
import { Filter, BookOpen } from "lucide-react";
import BlogCard from "@/components/ui/BlogCard";
import { blogData } from "@/components/sections/blog/blogData";

const filters = ["all", "finance", "software", "misc"];

function Blogs() {
  const filtersRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 text-violet-400 uppercase text-sm font-semibold tracking-wider">
          <BookOpen className="w-4 h-4" />
          Latest Posts
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-violet-400 to-teal-500 bg-clip-text text-transparent">
          Explore My Thoughts
        </h2>
      </div>

      {/* Filters */}
      <div className="flex justify-center">
        <div
          ref={filtersRef}
          className="flex items-center gap-2 p-2 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
        >
          <Filter className="w-4 h-4 text-violet-400" />
          {filters.map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 rounded-xl text-gray-400 hover:text-white hover:bg-violet-500/20 transition-all duration-300 text-sm font-medium capitalize"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {Object.entries(blogData).map(([key, blog]) => (
          <BlogCard {...blog} key={key} />
        ))}
      </div>
    </div>
  );
}

export default Blogs;
