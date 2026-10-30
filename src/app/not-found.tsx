import Link from "next/link";
import RevealHeading from "@/components/site/heading-reveal";

export default function NotFound() {
  return (
    <div className="w-section flex min-h-[70vh] flex-col justify-center py-20">
      <p className="text-[0.72rem] font-medium tracking-[0.22em] text-accent uppercase">
        404
      </p>
      <RevealHeading
        rule
        text="That page isn’t here."
        className="mt-4 max-w-xl font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl"
      />
      <p className="mt-6 max-w-md text-lg text-muted">
        The link may be old, or the note may still be a draft.
      </p>
      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
        <Link href="/" className="text-ink hover:text-accent">
          Home
        </Link>
        <Link href="/work" className="text-ink hover:text-accent">
          Work
        </Link>
        <Link href="/blog" className="text-ink hover:text-accent">
          Writing
        </Link>
      </div>
    </div>
  );
}
