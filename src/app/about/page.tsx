"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);
import { ExternalLink, Mail } from "lucide-react";
import profile2 from "./profilePic.jpg";
import { GradleLogo } from "@/components/icons";
import { GithubLogo } from "@/components/logos";
import Button from "@/components/ui/Button";

function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero section animation - immediate on load
    if (heroRef.current) {
      const heroElements = [
        heroRef.current.querySelector(".profile-container"),
        heroRef.current.querySelector(".intro-text"),
        heroRef.current.querySelector(".stats-section"),
        heroRef.current.querySelector(".cta-section"),
      ].filter(Boolean);

      gsap.fromTo(
        heroElements,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }

    // About section scroll animation
    if (aboutRef.current) {
      gsap.fromTo(
        aboutRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 100%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          ease: "power3.out",
        }
      );
    }

    // Skills animation
    if (skillsRef.current) {
      gsap.fromTo(
        skillsRef.current.children,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 100%",
            toggleActions: "play none none reverse",
          },
          ease: "back.out(1.7)",
        }
      );
    }

    // Projects animation
    if (projectsRef.current) {
      gsap.fromTo(
        projectsRef.current.children,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          ease: "power3.out",
        }
      );
    }
  });

  return (
    <div className="pt-[var(--h-navbar)] min-h-screen font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="w-section p-section flex flex-col gap-16">
        {/* Hero Section */}
        <div
          ref={heroRef}
          className="relative flex flex-col items-center text-center space-y-8"
        >
          {/* Profile Picture with Enhanced Design */}
          <div className="relative group profile-container">
            {/* Outer glow ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-teal-400/20 via-violet-500/20 to-teal-400/20 blur-xl group-hover:blur-2xl transition-all duration-700 animate-pulse"></div>

            {/* Profile image container */}
            <div className="relative rounded-full size-48 lg:size-56 overflow-hidden border-4 border-gray-700/50 group-hover:border-teal-400/60 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 via-transparent to-violet-500/10 z-10 group-hover:from-teal-400/20 group-hover:to-violet-500/20 transition-all duration-500"></div>
              <Image
                src={profile2}
                fill
                alt="Tomas Leriche - Senior Software Engineer at Gradle"
                className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-teal-500 to-violet-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              Hi there! 👋
            </div>
          </div>

          {/* Introduction Text */}
          <div className="space-y-6 max-w-4xl intro-text">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="text-gray-300">I&apos;m </span>
                <span className="bg-gradient-to-r from-teal-400 via-violet-500 to-teal-400 bg-clip-text text-transparent animate-gradient">
                  Tomas Leriche
                </span>
              </h1>

              <div className="text-xl lg:text-2xl text-gray-400 space-y-2">
                <p>
                  <span className="text-gray-300">
                    Senior Software Engineer
                  </span>{" "}
                  at{" "}
                  <span className="inline-flex items-center gap-2 text-teal-400 font-semibold">
                    Gradle
                    <GradleLogo className="size-6" />
                  </span>
                </p>
                <p className="text-lg text-gray-500">
                  Full-stack developer with a passion for creative front-end
                  experiences and interactive animations
                </p>
              </div>
            </div>

            {/* Experience Stat & GitHub Link */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-6 stats-section">
              {/* Experience Stat */}
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400">7+</div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>

              {/* GitHub Link */}
              <a
                href="https://github.com/samotleriche"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full text-gray-300 hover:text-white hover:border-teal-400/60 hover:bg-gray-800/70 transition-all duration-300"
              >
                <GithubLogo className="w-5 h-5 group-hover:text-teal-400 transition-colors duration-300" />
                <span className="font-medium">View my code on GitHub</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 cta-section">
              <Button
                text="View My Work"
                variant="primary"
                size="lg"
                href="/experiments"
              />
              <Button
                text="Get In Touch"
                variant="outline"
                size="lg"
                onClick={() => {
                  // Scroll to contact section or open email
                  window.location.href = "mailto:samotleriche@gmail.com";
                }}
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Get In Touch
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div ref={aboutRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8 text-gray-200">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-violet-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg mb-8 text-gray-300 leading-relaxed">
              I&apos;m a Senior Software Engineer at Gradle Inc., where I
              contribute to building Gradle.com. With extensive experience in
              both leadership and technical roles, I&apos;ve developed a strong
              foundation in software development and architecture.
            </p>

            <h3 className="text-xl font-semibold mb-4 text-teal-400">
              Professional Experience
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-white">Gradle Inc.</strong> - Senior
                  Software Engineer, focusing on enhancing the Gradle.com
                  platform
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-white">Long Lost Friends Inc.</strong>{" "}
                  - Head of Software Development, specializing in Web3
                  technologies
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-white">
                    Non-Fungible Labs (acquired by Futureverse)
                  </strong>{" "}
                  - Entrepreneurship, Product development and architecture
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-white">Atlassian</strong> - Individual
                  contributor on the buyer experience team, implementing A/B
                  testing and full-stack development
                </div>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-4 text-teal-400">
              Education
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-white">
                    Master of Science in Information Systems
                  </strong>{" "}
                  - UNM Anderson School
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-white">
                    Bachelor of Science in Molecular and Cellular Biology
                  </strong>{" "}
                  - University of Puget Sound
                </div>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-4 text-teal-400">
              Top Technical Skills
            </h3>
            <div ref={skillsRef} className="flex flex-wrap gap-3 mb-4">
              {[
                "JavaScript",
                "TypeScript",
                "Next.js",
                "React",
                "Three.js",
                "R3F",
                "Tailwind",
                "Rive",
                "Lottie",
                "Spline",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-gradient-to-r from-teal-500/20 to-violet-500/20 text-teal-300 px-4 py-2 rounded-full text-sm border border-teal-400/30 hover:border-teal-400/60 hover:from-teal-500/30 hover:to-violet-500/30 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div
            ref={projectsRef}
            className="rounded-2xl bg-gradient-to-br from-violet-900/30 to-teal-900/30 backdrop-blur-sm border border-violet-700/30 p-8 text-gray-200"
          >
            <h3 className="text-xl font-semibold mb-6 text-violet-400">
              Work Highlights
            </h3>
            <div className="space-y-6">
              <div className="group">
                <a
                  href="https://gradle.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:border-violet-500/50 hover:bg-gray-800/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-violet-300 group-hover:text-violet-200 transition-colors duration-300">
                        Gradle.com
                      </h4>
                      <p className="text-sm text-gray-400 mt-1">
                        Build automation platform - Senior Software Engineer
                      </p>
                    </div>
                    <div className="ml-4 flex items-center gap-2 text-violet-400 group-hover:text-violet-300 transition-colors duration-300">
                      <span className="text-xs font-medium">Visit</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="group">
                <a
                  href="https://three-js-1.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:border-violet-500/50 hover:bg-gray-800/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-violet-300 group-hover:text-violet-200 transition-colors duration-300">
                        3D Portfolio Website
                      </h4>
                      <p className="text-sm text-gray-400 mt-1">
                        Interactive website showcasing Three.js applications
                      </p>
                    </div>
                    <div className="ml-4 flex items-center gap-2 text-violet-400 group-hover:text-violet-300 transition-colors duration-300">
                      <span className="text-xs font-medium">Visit</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="group">
                <a
                  href="https://paragonsnft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:border-violet-500/50 hover:bg-gray-800/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-violet-300 group-hover:text-violet-200 transition-colors duration-300">
                        Paragons NFT
                      </h4>
                      <p className="text-sm text-gray-400 mt-1">
                        Creative Web3 project - Product development and
                        architecture
                      </p>
                    </div>
                    <div className="ml-4 flex items-center gap-2 text-violet-400 group-hover:text-violet-300 transition-colors duration-300">
                      <span className="text-xs font-medium">Visit</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-violet-700/50">
              <h4 className="font-semibold mb-3 text-violet-400">Interests</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Exploring emerging technologies, Web3, and innovative software
                solutions. Passionate about continuous learning and
                collaborative development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
