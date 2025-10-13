"use client";

import { useEffect } from "react";
import { AlertTriangle, Home, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Blog post error:", error);
  }, [error]);

  return (
    <div className="pt-[var(--h-navbar)] font-[family-name:var(--font-geist-sans)]">
      <main className="flex w-section p-section justify-center items-center flex-col gap-8 row-start-2">
        <div className="flex flex-col items-center gap-14 pb-20 w-full">
          <div className="text-center max-w-md">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-8">
              <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-6" />
              <h1 className="text-2xl font-bold text-white mb-4">
                Blog Post Not Found
              </h1>
              <p className="text-gray-400 mb-6">
                The blog post you&apos;re looking for doesn&apos;t exist or
                there was an error loading it.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Try again
                </button>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                >
                  <Home className="w-4 h-4" />
                  Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
