import React from "react";
import Link from "next/link";
import { GithubLogo } from "./icons";
import { LinkedInLogo } from "./icons";
import { Mail, Heart, Sparkles } from "lucide-react";

function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-t border-teal-400/20">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-violet-500/5 to-teal-500/5"></div>

      <div className="relative w-section px-section py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left - Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="p-2 rounded-xl bg-teal-500/10 border border-teal-400/20">
                <Sparkles className="w-5 h-5 text-teal-300" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-transparent">
                Tomas Leriche
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Senior Software Engineer crafting immersive digital experiences
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="text-gray-400 hover:text-teal-300 transition-colors duration-300 text-sm font-medium"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-gray-400 hover:text-violet-300 transition-colors duration-300 text-sm font-medium"
              >
                Blog
              </Link>
              <Link
                href="/experiments"
                className="text-gray-400 hover:text-teal-300 transition-colors duration-300 text-sm font-medium"
              >
                Experiments
              </Link>
            </div>
          </div>

          {/* Right - Social & Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end gap-3">
              <Link
                href="https://github.com/samotleriche"
                target="_blank"
                className="p-3 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:bg-teal-500/20 hover:border-teal-400/40 hover:scale-110 transition-all duration-300 group"
              >
                <GithubLogo className="text-gray-300 group-hover:text-teal-300 size-5 transition-colors duration-300" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/tomasleriche/"
                target="_blank"
                className="p-3 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:bg-blue-500/20 hover:border-blue-400/40 hover:scale-110 transition-all duration-300 group"
              >
                <LinkedInLogo className="text-gray-300 group-hover:text-blue-300 size-5 transition-colors duration-300" />
              </Link>
              <Link
                href="mailto:samotleriche@gmail.com"
                className="p-3 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:bg-violet-500/20 hover:border-violet-400/40 hover:scale-110 transition-all duration-300 group"
              >
                <Mail className="text-gray-300 group-hover:text-violet-300 size-5 transition-colors duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-700/30">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>&copy; {new Date().getFullYear()} Tomas Leriche</span>
              <span className="text-gray-600">•</span>
              <span>All rights reserved</span>
            </div>

            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-red-400" />
              <span>in Santa Monica, CA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
