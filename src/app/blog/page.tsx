import React from "react";
import { getAllBlogPosts } from "@/lib/blog-server";
import Hero from "@/components/sections/blog/hero";
import BlogsWithAnimations from "@/components/sections/blog/BlogsWithAnimations";

async function Blog() {
  // Fetch blog posts from MDX files server-side
  const posts = getAllBlogPosts();

  return (
    <div className="pt-[var(--h-navbar)] min-h-screen font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="w-section p-section flex flex-col gap-16">
        <div>
          <Hero
            supertitle="Personal blog"
            title="Welcome to my blog!"
            description="A collection of thoughts and ideas about software engineering, creative development, and emerging technologies."
          />
        </div>
        <BlogsWithAnimations posts={posts} />
      </div>
    </div>
  );
}

export default Blog;
