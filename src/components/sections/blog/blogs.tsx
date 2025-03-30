import React from "react";
import BlogCard from "@/components/ui/BlogCard";
import { blogData } from "@/components/sections/blog/blogData";

const filters = ["all", "finance", "software", "misc"];

function Blogs() {
  return (
    <div className="flex items-center p-section">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              className="text-gray-400 cursor-pointer hover:text-violet-400"
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(blogData).map(([key, blog]) => (
            <BlogCard {...blog} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
