"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Blogs from "./blogs";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface BlogsWithAnimationsProps {
  posts: Array<{
    slug: string;
    title: string;
    description: string;
    category: string;
    date: string;
    imgUrl: string;
    href: string;
    readingTime: string;
  }>;
}

function BlogsWithAnimations({ posts }: BlogsWithAnimationsProps) {
  const blogsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Blogs section scroll animation
      gsap.fromTo(
        blogsRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: blogsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          ease: "power3.out",
        }
      );
    },
    { scope: blogsRef }
  );

  return (
    <div ref={blogsRef}>
      <Blogs posts={posts} />
    </div>
  );
}

export default BlogsWithAnimations;
