export default function Loading() {
  return (
    <div className="w-section py-16 md:py-24">
      <div className="mx-auto max-w-[42rem] space-y-4">
        <div className="h-3 w-40 animate-pulse rounded-full bg-surface" />
        <div className="h-16 w-full animate-pulse rounded-2xl bg-surface" />
        <div className="h-5 w-4/5 animate-pulse rounded-full bg-surface" />
        <div className="mt-8 h-64 animate-pulse rounded-2xl bg-surface" />
        <div className="h-4 animate-pulse rounded-full bg-surface" />
        <div className="h-4 w-11/12 animate-pulse rounded-full bg-surface" />
        <div className="h-4 w-3/4 animate-pulse rounded-full bg-surface" />
      </div>
    </div>
  );
}
