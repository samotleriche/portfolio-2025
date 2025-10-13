"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);
import { FlaskConical, Code, Zap, ExternalLink } from "lucide-react";
import Simple from "@/components/sections/experiments/simplespline";

function Experiments() {
  const heroRef = useRef<HTMLDivElement>(null);
  const experimentsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero section animation - immediate on load
    if (heroRef.current) {
      const heroElements = [
        heroRef.current.querySelector(".hero-icon"),
        heroRef.current.querySelector(".hero-subtitle"),
        heroRef.current.querySelector(".hero-title"),
        heroRef.current.querySelector(".hero-description"),
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

    // Experiments section scroll animation
    if (experimentsRef.current) {
      gsap.fromTo(
        experimentsRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: experimentsRef.current,
            start: "top 85%",
            end: "bottom 20%",
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
          {/* Icon with glow effect */}
          <div className="relative group hero-icon">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-teal-400/20 via-violet-500/20 to-teal-400/20 blur-xl group-hover:blur-2xl transition-all duration-700 animate-pulse"></div>
            <div className="relative rounded-full size-20 lg:size-24 overflow-hidden border-4 border-gray-700/50 group-hover:border-teal-400/60 transition-all duration-500 bg-gradient-to-br from-teal-900/30 to-violet-900/30 backdrop-blur-sm flex items-center justify-center">
              <FlaskConical className="w-10 h-10 lg:w-12 lg:h-12 text-teal-400 group-hover:text-teal-300 transition-colors duration-500" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 max-w-4xl">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-teal-400 uppercase text-sm font-semibold tracking-wider hero-subtitle">
                <Code className="w-4 h-4" />
                Creative Experiments
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold hero-title">
                <span className="bg-gradient-to-r from-teal-400 via-violet-500 to-teal-400 bg-clip-text text-transparent animate-gradient">
                  Experiments
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto hero-description">
                A playground for exploring cutting-edge technologies, creative
                animations, and innovative web experiences. Some experiments
                stick around, others are just for fun.
              </p>
            </div>
          </div>
        </div>

        {/* Experiments Section */}
        <div ref={experimentsRef} className="space-y-12">
          {/* Rive Experiment */}
          <div className="rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 overflow-hidden">
            <div className="p-8 border-b border-gray-700/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-violet-500/20 border border-violet-400/30">
                  <Zap className="w-5 h-5 text-violet-400" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-teal-500 bg-clip-text text-transparent">
                  Rive Animations
                </h2>
              </div>
              <p className="text-gray-400 text-lg">
                Interactive animations using Rive&apos;s powerful animation
                engine. Creating smooth, performant animations that bring
                interfaces to life.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 p-8">
              {/* Animation Container */}
              <div className="relative group">
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-violet-500/20 to-teal-500/20 blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden border border-gray-700/50 group-hover:border-violet-400/60 transition-all duration-500 bg-gray-900/50">
                  <div className="h-[31rem] w-full">
                    <Simple />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Text Follow Path
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    A smooth text animation that follows a curved path,
                    demonstrating Rive&apos;s powerful path animation
                    capabilities. Perfect for creating engaging hero sections
                    and interactive elements.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-2 h-2 bg-violet-400 rounded-full"></span>
                    Real-time animation rendering
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                    Smooth 60fps performance
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-2 h-2 bg-violet-400 rounded-full"></span>
                    Interactive state machines
                  </div>
                </div>

                <div className="flex items-center gap-2 text-violet-400 group">
                  <span className="text-sm font-medium">
                    View Rive Documentation
                  </span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon Section */}
          <div className="rounded-2xl bg-gradient-to-br from-violet-900/30 to-teal-900/30 backdrop-blur-sm border border-violet-700/30 p-8 text-center">
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="p-3 rounded-full bg-violet-500/20 border border-violet-400/30">
                  <Code className="w-6 h-6 text-violet-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-violet-300">
                More Experiments Coming Soon
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                I&apos;m constantly experimenting with new technologies and
                creative ideas. Check back soon for more interactive
                experiences, 3D animations, and innovative web experiments.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-sm border border-teal-400/30">
                  Three.js
                </span>
                <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-sm border border-violet-400/30">
                  GSAP
                </span>
                <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-sm border border-teal-400/30">
                  WebGL
                </span>
                <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-sm border border-violet-400/30">
                  Canvas API
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiments;
