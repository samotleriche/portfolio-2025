"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);
import {
  ArrowRight,
  Code,
  BookOpen,
  FlaskConical,
  Mail,
  Sparkles,
  Globe,
  Palette,
} from "lucide-react";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiThreedotjs,
  SiRive,
} from "react-icons/si";

import { GithubLogo, LinkedInLogo } from "../icons";
import { blogData } from "../sections/blog/blogData";
import { experimentData } from "../sections/experiments/experimentData";
import profilePic from "../../app/about/profilePic.jpg";
import Simple from "../sections/experiments/simplespline";
import AnimatedAvatar from "../animated-avatar";

function HomeHero() {
  const bentoRef = useRef<HTMLDivElement>(null);

  // Get the latest blog post
  const getLatestBlogPost = () => {
    const posts = Object.entries(blogData);
    // Sort by date (most recent first) - assuming dates are in YYYY-MM-DD format
    const sortedPosts = posts.sort(
      ([, a], [, b]) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    return sortedPosts[0]
      ? { slug: sortedPosts[0][0], ...sortedPosts[0][1] }
      : null;
  };

  // Get the latest experiment
  const getLatestExperiment = () => {
    const experiments = Object.entries(experimentData);
    // Sort by date (most recent first) - assuming dates are in YYYY-MM-DD format
    const sortedExperiments = experiments.sort(
      ([, a], [, b]) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    return sortedExperiments[0]
      ? { slug: sortedExperiments[0][0], ...sortedExperiments[0][1] }
      : null;
  };

  const latestPost = getLatestBlogPost();
  const latestExperiment = getLatestExperiment();

  // GSAP Animation for bento cards
  useGSAP(() => {
    if (bentoRef.current) {
      const cards = bentoRef.current.querySelectorAll(".bento-card");
      const header = bentoRef.current.previousElementSibling;

      // Animate header first
      if (header) {
        gsap.fromTo(
          header.children,
          { y: 40, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            stagger: 0.15,
            ease: "power2.out",
            delay: 0.2,
          }
        );
      }

      // Animate cards in with stagger
      if (cards.length > 0) {
        // Set initial state first (ensure cards start hidden)
        gsap.set(cards, {
          y: 80,
          opacity: 0,
          scale: 0.85,
          rotationX: 15,
        });

        // Then animate to final state
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 1.0,
          stagger: 0.08,
          delay: 0.6,
        });
      }
    }
  }, []); // Only run once on mount, not when data changes

  return (
    <div className="pt-[var(--h-navbar)] min-h-screen font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="w-full min-h-screen flex flex-col justify-center">
        <div className="w-section p-section">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/20 to-violet-500/20 border border-teal-400/30 text-teal-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Currently exploring AI tools & Rive animations
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-4">
              {/* Animated Avatar */}
              <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 flex-shrink-0 relative overflow-hidden">
                <AnimatedAvatar />
              </div>
              {/* Title and Description */}
              <div className="flex flex-col items-center md:items-start">
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-teal-400 via-violet-500 to-teal-400 bg-clip-text text-transparent mb-4">
                  Tomas Leriche
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl text-center md:text-left">
                  Senior Software Engineer crafting immersive digital
                  experiences
                </p>
              </div>
            </div>
          </div>

          {/* Bento Grid */}
          <div
            ref={bentoRef}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 w-full"
          >
            {/* Large Hero Card - About */}
            <Link
              href="/about"
              className="sm:col-span-2 md:col-span-2 lg:col-span-4 bento-card group relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-500/10 via-teal-500/5 to-violet-500/10 border border-teal-400/20 p-6 sm:p-8 hover:border-teal-400/50 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-500 cursor-pointer hover:scale-[1.02] hover:-translate-y-1 block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-violet-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-teal-500/20 border border-teal-400/30 group-hover:bg-teal-500/30 group-hover:border-teal-400/50 transition-all duration-300">
                    <Code className="w-7 h-7 text-teal-400 group-hover:text-teal-300 transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-teal-50 transition-colors duration-300">
                    About Me
                  </h3>
                </div>

                {/* Profile Picture */}
                <div className="flex items-center gap-4 sm:gap-6 mb-6">
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-teal-400/30 group-hover:border-teal-400/50 transition-all duration-300 bg-gray-800/50">
                      <Image
                        src={profilePic}
                        alt="Tomas Leriche"
                        fill
                        className="object-cover rounded-xl"
                      />
                    </div>
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-teal-400/20 to-violet-500/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300 leading-relaxed text-base sm:text-lg group-hover:text-gray-200 transition-colors duration-300">
                      My journey as a Senior Software Engineer at Gradle,
                      passion for creative front-end development, and love for
                      pushing web boundaries.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-teal-400 group-hover:text-teal-300 transition-colors duration-300">
                  <span className="font-semibold text-lg">Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
              {/* Enhanced Rive Animation Placeholder */}
              <div className="absolute top-6 right-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-400/15 to-violet-400/15 border border-teal-400/25 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400/25 to-violet-400/25 border border-teal-400/35 group-hover:border-teal-400/50 transition-all duration-300"></div>
              </div>
            </Link>

            {/* Skills Card */}
            <div className="sm:col-span-1 md:col-span-2 lg:col-span-2 bento-card group relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-500/10 to-violet-500/10 border border-teal-400/20 p-4 sm:p-6 hover:border-teal-400/50 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col items-center text-center h-full justify-between">
                <div className="p-4 rounded-xl bg-teal-500/20 border border-teal-400/30 mb-6 group-hover:bg-teal-500/30 group-hover:border-teal-400/50 group-hover:scale-110 transition-all duration-300">
                  <Palette className="w-7 h-7 text-teal-400 group-hover:text-teal-300 transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-teal-50 transition-colors duration-300">
                    Skills
                  </h3>
                  <div className="space-y-4">
                    {/* First Row */}
                    <div className="flex items-center justify-center gap-4">
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/30 group-hover:bg-gray-800/50 group-hover:border-gray-600/50 transition-all duration-300">
                        <SiReact className="w-5 h-5 text-blue-400" />
                        <span className="text-xs text-gray-300 font-medium">
                          React
                        </span>
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/30 group-hover:bg-gray-800/50 group-hover:border-gray-600/50 transition-all duration-300">
                        <SiTypescript className="w-5 h-5 text-blue-500" />
                        <span className="text-xs text-gray-300 font-medium">
                          TS
                        </span>
                      </div>
                    </div>

                    {/* Second Row */}
                    <div className="flex items-center justify-center gap-4">
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/30 group-hover:bg-gray-800/50 group-hover:border-gray-600/50 transition-all duration-300">
                        <SiNextdotjs className="w-5 h-5 text-gray-300" />
                        <span className="text-xs text-gray-300 font-medium">
                          Next.js
                        </span>
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/30 group-hover:bg-gray-800/50 group-hover:border-gray-600/50 transition-all duration-300">
                        <SiTailwindcss className="w-5 h-5 text-cyan-400" />
                        <span className="text-xs text-gray-300 font-medium">
                          Tailwind
                        </span>
                      </div>
                    </div>

                    {/* Third Row */}
                    <div className="flex items-center justify-center gap-4">
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/30 group-hover:bg-gray-800/50 group-hover:border-gray-600/50 transition-all duration-300">
                        <SiThreedotjs className="w-5 h-5 text-green-400" />
                        <span className="text-xs text-gray-300 font-medium">
                          Three.js
                        </span>
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/30 group-hover:bg-gray-800/50 group-hover:border-gray-600/50 transition-all duration-300">
                        <SiRive className="w-5 h-5 text-purple-400" />
                        <span className="text-xs text-gray-300 font-medium">
                          Rive
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Card */}
            <Link
              href="/blog"
              className="sm:col-span-1 md:col-span-2 lg:col-span-2 bento-card group relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-500/10 to-teal-500/10 border border-violet-400/20 p-4 sm:p-6 hover:border-violet-400/50 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-500 cursor-pointer hover:scale-[1.02] hover:-translate-y-1 block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col items-center text-center h-full justify-between">
                <div className="p-4 rounded-xl bg-violet-500/20 border border-violet-400/30 mb-6 group-hover:bg-violet-500/30 group-hover:border-violet-400/50 group-hover:scale-110 transition-all duration-300">
                  <BookOpen className="w-7 h-7 text-violet-400 group-hover:text-violet-300 transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-50 transition-colors duration-300">
                    Blog
                  </h3>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    Thoughts on software engineering & creative development
                  </p>
                  <div className="flex items-center gap-2 text-violet-400 group-hover:text-violet-300 transition-colors duration-300">
                    <span className="font-semibold text-sm">Read Articles</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Latest Blog Post Card */}
            {latestPost && (
              <Link
                href={latestPost.href}
                className="sm:col-span-2 md:col-span-2 lg:col-span-4 bento-card group relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-500/10 to-teal-500/10 border border-violet-400/20 p-4 sm:p-6 hover:border-violet-400/50 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-500 cursor-pointer hover:scale-[1.02] hover:-translate-y-1 block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-violet-400/5 to-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-violet-500/20 border border-violet-400/30 group-hover:bg-violet-500/30 group-hover:border-violet-400/50 transition-all duration-300">
                      <BookOpen className="w-6 h-6 text-violet-400 group-hover:text-violet-300 transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-violet-50 transition-colors duration-300">
                        Latest Post
                      </h3>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                        {latestPost.date}
                      </p>
                    </div>
                  </div>

                  {/* Blog Post Image */}
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-violet-400/30 group-hover:border-violet-400/50 transition-all duration-300 bg-gray-800/50">
                        <Image
                          src={latestPost.imgUrl}
                          alt={latestPost.title}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-violet-400/20 to-teal-400/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-bold mb-2 sm:mb-3 line-clamp-2 text-base sm:text-lg group-hover:text-violet-50 transition-colors duration-300">
                        {latestPost.title}
                      </h4>
                      <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {latestPost.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-violet-400 group-hover:text-violet-300 transition-colors duration-300">
                    <span className="font-semibold text-sm">Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
                {/* Enhanced Rive Animation Placeholder */}
                <div className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-400/15 to-teal-400/15 border border-violet-400/25 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-400/25 to-teal-400/25 border border-violet-400/35 group-hover:border-violet-400/50 transition-all duration-300"></div>
                </div>
              </Link>
            )}

            {/* Experiments Card */}
            <Link
              href="/experiments"
              className="sm:col-span-1 md:col-span-2 lg:col-span-2 bento-card group relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-500/10 to-violet-500/10 border border-teal-400/20 p-4 sm:p-6 hover:border-teal-400/50 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-500 cursor-pointer hover:scale-[1.02] hover:-translate-y-1 block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col items-center text-center h-full justify-between">
                <div className="p-4 rounded-xl bg-teal-500/20 border border-teal-400/30 mb-6 group-hover:bg-teal-500/30 group-hover:border-teal-400/50 group-hover:scale-110 transition-all duration-300">
                  <FlaskConical className="w-7 h-7 text-teal-400 group-hover:text-teal-300 transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-50 transition-colors duration-300">
                    Experiments
                  </h3>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    Interactive playground with Rive, Three.js, GSAP
                  </p>
                  <div className="flex items-center gap-2 text-teal-400 group-hover:text-teal-300 transition-colors duration-300">
                    <span className="font-semibold text-sm">Explore</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Latest Experiment Card */}
            {latestExperiment && (
              <Link
                href={latestExperiment.href}
                className="sm:col-span-2 md:col-span-2 lg:col-span-4 bento-card group relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-500/10 to-violet-500/10 border border-teal-400/20 p-4 sm:p-6 hover:border-teal-400/50 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-500 cursor-pointer hover:scale-[1.02] hover:-translate-y-1 block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-violet-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10 h-full flex flex-col sm:flex-row">
                  {/* Left Content */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div className="p-2 sm:p-3 rounded-xl bg-teal-500/20 border border-teal-400/30 group-hover:bg-teal-500/30 group-hover:border-teal-400/50 transition-all duration-300">
                          <FlaskConical className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400 group-hover:text-teal-300 transition-colors duration-300" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-teal-50 transition-colors duration-300">
                            Latest Experiment
                          </h3>
                          <p className="text-gray-400 text-xs sm:text-sm group-hover:text-gray-300 transition-colors duration-300">
                            {latestExperiment.date}
                          </p>
                        </div>
                      </div>

                      <h4 className="text-white font-bold mb-2 sm:mb-3 line-clamp-2 text-base sm:text-lg group-hover:text-teal-50 transition-colors duration-300">
                        {latestExperiment.title}
                      </h4>
                      <p className="text-gray-300 text-sm line-clamp-2 sm:line-clamp-3 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {latestExperiment.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-3 sm:mt-4">
                      <div className="flex items-center gap-2 sm:gap-3 text-teal-400 group-hover:text-teal-300 transition-colors duration-300">
                        <span className="font-semibold text-xs sm:text-sm">
                          View Experiment
                        </span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                      <div className="flex gap-1 sm:gap-2">
                        {latestExperiment.technologies
                          .slice(0, 2)
                          .map((tech, index) => (
                            <span
                              key={index}
                              className="px-2 sm:px-3 py-1 rounded-lg text-xs bg-teal-500/20 text-teal-300 border border-teal-400/30 group-hover:bg-teal-500/30 group-hover:border-teal-400/50 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Large Rive Preview */}
                  <div className="mt-4 sm:mt-0 sm:ml-6 flex-shrink-0 flex justify-center sm:justify-end">
                    <div className="relative">
                      <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-teal-400/30 group-hover:border-teal-400/50 transition-all duration-300 bg-gray-900/50">
                        <div className="w-full h-full">
                          <Simple />
                        </div>
                      </div>
                      <div className="absolute -inset-2 sm:-inset-3 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-teal-400/20 to-violet-400/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Contact Card */}
            <div
              className="sm:col-span-1 md:col-span-2 lg:col-span-2 bento-card group relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-500/10 to-teal-500/10 border border-violet-400/20 p-4 sm:p-6 hover:border-violet-400/50 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-500 cursor-pointer hover:scale-[1.02] hover:-translate-y-1"
              onClick={() =>
                (window.location.href = "mailto:samotleriche@gmail.com")
              }
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-violet-500/20 border border-violet-400/30 group-hover:bg-violet-500/30 group-hover:border-violet-400/50 transition-all duration-300">
                    <Mail className="w-6 h-6 text-violet-400 group-hover:text-violet-300 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-violet-50 transition-colors duration-300">
                    Get In Touch
                  </h3>
                </div>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  Let&apos;s collaborate on your next project or just chat about
                  web development.
                </p>
                <div className="flex items-center gap-3 text-violet-400 group-hover:text-violet-300 transition-colors duration-300">
                  <span className="font-semibold text-sm">Send Email</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
              {/* Enhanced Rive Animation Placeholder */}
              <div className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-400/15 to-teal-400/15 border border-violet-400/25 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-400/25 to-teal-400/25 border border-violet-400/35 group-hover:border-violet-400/50 transition-all duration-300"></div>
              </div>
            </div>

            {/* Rive Animation Placeholder - Small */}
            <div className="sm:col-span-1 md:col-span-2 lg:col-span-2 bento-card group relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-500/5 to-teal-500/5 border border-violet-400/10 p-4 sm:p-6 hover:border-violet-400/40 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-400/15 to-teal-400/15 border border-violet-400/25 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-400/25 to-teal-400/25 border border-violet-400/35 group-hover:border-violet-400/50 transition-all duration-300"></div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-50 transition-colors duration-300">
                  Rive Animation
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  Icon animation
                </p>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="sm:col-span-1 md:col-span-2 lg:col-span-2 bento-card group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-700/50 border border-gray-600/30 p-4 sm:p-6 hover:border-gray-500/60 hover:shadow-xl hover:shadow-gray-500/10 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700/20 to-gray-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gray-600/30 border border-gray-500/30 group-hover:bg-gray-600/40 group-hover:border-gray-500/50 transition-all duration-300">
                    <Globe className="w-6 h-6 text-gray-300 group-hover:text-gray-200 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-gray-100 transition-colors duration-300">
                    Connect
                  </h3>
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://github.com/samotleriche"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-700/50 hover:bg-gray-700/70 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <GithubLogo className="w-5 h-5 text-gray-400 group-hover/social:text-teal-400 transition-colors duration-300" />
                    <span className="text-gray-300 group-hover/social:text-white transition-colors duration-300 text-sm font-medium">
                      GitHub
                    </span>
                  </a>
                  <a
                    href="https://linkedin.com/in/tomasleriche"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-700/50 hover:bg-gray-700/70 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <LinkedInLogo className="w-5 h-5 text-gray-400 group-hover/social:text-blue-400 transition-colors duration-300" />
                    <span className="text-gray-300 group-hover/social:text-white transition-colors duration-300 text-sm font-medium">
                      LinkedIn
                    </span>
                  </a>
                  <a
                    href="mailto:samotleriche@gmail.com"
                    className="group/social flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-700/50 hover:bg-gray-700/70 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <Mail className="w-5 h-5 text-gray-400 group-hover/social:text-violet-400 transition-colors duration-300" />
                    <span className="text-gray-300 group-hover/social:text-white transition-colors duration-300 text-sm font-medium">
                      Email
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
