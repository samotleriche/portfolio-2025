import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default function Loading() {
  return (
    <div className="pt-[var(--h-navbar)] min-h-screen font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="w-section p-section flex flex-col gap-16">
        {/* Hero skeleton */}
        <div className="flex flex-col items-center gap-8 w-full">
          <div className="h-4 bg-gray-700 rounded w-32 animate-pulse"></div>
          <div className="h-12 bg-gray-700 rounded w-96 max-w-full animate-pulse"></div>
          <div className="h-6 bg-gray-700 rounded w-80 max-w-full animate-pulse"></div>
        </div>

        {/* Filters skeleton */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2 p-2 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
            <div className="w-4 h-4 bg-gray-700 rounded animate-pulse"></div>
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-8 bg-gray-700 rounded-xl w-16 animate-pulse"
              ></div>
            ))}
          </div>
        </div>

        {/* Blog cards skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-gray-800/50 rounded-lg p-6 space-y-4 animate-pulse"
            >
              <div className="h-48 bg-gray-700 rounded-lg"></div>
              <div className="h-4 bg-gray-700 rounded w-20"></div>
              <div className="h-6 bg-gray-700 rounded w-3/4"></div>
              <div className="h-4 bg-gray-700 rounded w-full"></div>
              <div className="h-4 bg-gray-700 rounded w-2/3"></div>
              <div className="h-4 bg-gray-700 rounded w-16"></div>
            </div>
          ))}
        </div>

        {/* Loading indicator */}
        <div className="flex items-center justify-center gap-3 text-violet-400">
          <LoadingSpinner size="md" />
          <span>Loading blog posts...</span>
        </div>
      </div>
    </div>
  );
}
