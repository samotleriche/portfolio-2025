"use client";

import { useEffect } from "react";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Blog listing error:", error);
  }, [error]);

  return (
    <div className="pt-[var(--h-navbar)] min-h-screen font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="w-section p-section flex flex-col gap-16">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-8 max-w-md">
            <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-white mb-4">
              Failed to Load Blog
            </h1>
            <p className="text-gray-400 mb-6">
              There was an error loading the blog posts. Please try again or
              check back later.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Try again
              </button>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
              >
                <Home className="w-4 h-4" />
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
