"use client";

import { useEffect } from "react";
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
    <div className="w-section flex min-h-[60vh] flex-col justify-center py-20">
      <h1 className="font-serif text-4xl tracking-tight">
        The writing didn’t load.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        Something went wrong reading the posts. Try again in a moment.
      </p>
      <div className="mt-8 flex gap-4 text-sm">
        <button
          type="button"
          onClick={reset}
          className="rounded-full bg-accent px-4 py-2 text-accent-ink"
        >
          Try again
        </button>
        <Link href="/" className="px-2 py-2 text-muted hover:text-ink">
          Home
        </Link>
      </div>
    </div>
  );
}
