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
    console.error("Blog post error:", error);
  }, [error]);

  return (
    <div className="w-section flex min-h-[60vh] flex-col justify-center py-20">
      <h1 className="font-serif text-4xl tracking-tight">
        This note didn’t load.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        It may be missing, or something went wrong reading it.
      </p>
      <div className="mt-8 flex gap-4 text-sm">
        <button
          type="button"
          onClick={reset}
          className="rounded-full bg-accent px-4 py-2 text-accent-ink"
        >
          Try again
        </button>
        <Link href="/blog" className="px-2 py-2 text-muted hover:text-ink">
          All writing
        </Link>
      </div>
    </div>
  );
}
