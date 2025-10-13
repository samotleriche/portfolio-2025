"use client";

import Link from "next/link";
import { Home, ArrowLeft, Search, FileText } from "lucide-react";

export default function NotFound() {
  return (
    <div className="pt-[var(--h-navbar)] font-[family-name:var(--font-geist-sans)] min-h-screen">
      <main className="flex w-section p-section justify-center items-center flex-col gap-8 row-start-2">
        <div className="flex flex-col items-center gap-14 pb-20 w-full max-w-2xl">
          {/* Animated 404 Number */}
          <div className="relative">
            <div className="text-[12rem] font-bold text-transparent bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500 bg-clip-text leading-none">
              404
            </div>
            <div className="absolute inset-0 text-[12rem] font-bold text-violet-500/20 leading-none animate-pulse">
              404
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold text-white mb-4">
              Oops! Page Not Found
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-lg mx-auto">
              The page you&apos;re looking for seems to have wandered off into
              the digital void. Don&apos;t worry, even the best explorers get
              lost sometimes!
            </p>
          </div>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Back to Home */}
            <Link
              href="/"
              className="group relative overflow-hidden bg-gradient-to-br from-violet-600/20 to-purple-600/20 border border-violet-500/30 rounded-xl p-6 hover:border-violet-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex items-center gap-4">
                <div className="p-3 bg-violet-500/20 rounded-lg group-hover:bg-violet-500/30 transition-colors">
                  <Home className="w-6 h-6 text-violet-400" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Go Home
                  </h3>
                  <p className="text-sm text-gray-400">
                    Return to the main page
                  </p>
                </div>
              </div>
            </Link>

            {/* Browse Blog */}
            <Link
              href="/blog"
              className="group relative overflow-hidden bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex items-center gap-4">
                <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                  <FileText className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Browse Blog
                  </h3>
                  <p className="text-sm text-gray-400">
                    Check out my latest posts
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Additional Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700/50 hover:bg-gray-600/50 text-white rounded-lg transition-colors border border-gray-600/50 hover:border-gray-500/50"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
            <Link
              href="/experiments"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700/50 hover:bg-gray-600/50 text-white rounded-lg transition-colors border border-gray-600/50 hover:border-gray-500/50"
            >
              <Search className="w-4 h-4" />
              Explore Projects
            </Link>
          </div>

          {/* Fun Message */}
          <div className="text-center mt-8 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
            <p className="text-sm text-gray-500">
              💡 <strong>Pro tip:</strong> If you&apos;re looking for a specific
              blog post, try checking the{" "}
              <Link
                href="/blog"
                className="text-violet-400 hover:text-violet-300 underline"
              >
                blog page
              </Link>{" "}
              for the complete list!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
