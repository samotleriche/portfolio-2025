"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);
import Hero from "@/components/sections/blog/hero";
import Blogs from "@/components/sections/blog/blogs";

function Blog() {
  const heroRef = useRef<HTMLDivElement>(null);
  const blogsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Hero section animation
      gsap.fromTo(
        heroRef.current?.children || [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        }
      );

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
    { scope: heroRef }
  );

  return (
    <div className="pt-[var(--h-navbar)] min-h-screen font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="w-section p-section flex flex-col gap-16">
        <div ref={heroRef}>
          <Hero
            supertitle="Personal blog"
            title="Welcome to my blog!"
            description="A collection of thoughts and ideas about software engineering, creative development, and emerging technologies."
          />
        </div>
        <div ref={blogsRef}>
          <Blogs />
        </div>
      </div>
    </div>
  );
}

export default Blog;
