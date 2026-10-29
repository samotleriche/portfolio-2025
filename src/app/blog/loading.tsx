export default function Loading() {
  return (
    <div className="w-section py-16 md:py-24">
      <div className="h-3 w-24 animate-pulse rounded-full bg-surface" />
      <div className="mt-6 h-14 w-2/3 max-w-md animate-pulse rounded-2xl bg-surface" />
      <div className="mt-6 h-5 w-full max-w-lg animate-pulse rounded-full bg-surface" />
      <div className="mt-14 space-y-4">
        <div className="h-16 animate-pulse rounded-2xl bg-surface" />
        <div className="h-16 animate-pulse rounded-2xl bg-surface" />
        <div className="h-16 animate-pulse rounded-2xl bg-surface" />
      </div>
    </div>
  );
}
