import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default function Loading() {
  return (
    <div className="pt-[var(--h-navbar)] font-[family-name:var(--font-geist-sans)]">
      <main className="flex w-section p-section justify-center items-center flex-col gap-8 row-start-2">
        <div className="flex flex-col items-center gap-14 pb-20 w-full">
          {/* Hero skeleton */}
          <div className="flex flex-col items-center gap-8 w-full">
            <div className="h-4 bg-gray-700 rounded w-32 animate-pulse"></div>
            <div className="h-12 bg-gray-700 rounded w-96 max-w-full animate-pulse"></div>
            <div className="h-6 bg-gray-700 rounded w-80 max-w-full animate-pulse"></div>
            <div className="h-4 bg-gray-700 rounded w-24 animate-pulse"></div>
            <div className="h-64 bg-gray-700 rounded-lg w-full max-w-2xl animate-pulse"></div>
          </div>

          {/* Content skeleton */}
          <div className="max-w-[60ch] w-full space-y-4">
            <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-700 rounded w-3/4 animate-pulse"></div>
            <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-700 rounded w-5/6 animate-pulse"></div>
            <div className="h-6 bg-gray-700 rounded w-32 animate-pulse mt-8"></div>
            <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-700 rounded w-4/5 animate-pulse"></div>
          </div>

          {/* Loading indicator */}
          <div className="flex items-center gap-3 text-violet-400">
            <LoadingSpinner size="sm" />
            <span className="text-sm">Loading blog post...</span>
          </div>
        </div>
      </main>
    </div>
  );
}
