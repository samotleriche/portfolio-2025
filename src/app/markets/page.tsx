import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/site/page-header";

export const metadata: Metadata = {
  title: "Markets",
  description:
    "A notebook on markets, still blank, by Tomas Leriche.",
};

export default function MarketsPage() {
  return (
    <div className="w-section py-16 md:py-24">
      <PageHeader eyebrow="Parked" title="Markets">
        I want a place to think about markets in public. There isn’t a post
        here yet, and I don’t want a placeholder pretending otherwise.
      </PageHeader>
      <p className="mt-10 text-muted">
        When something is ready, it will show up in{" "}
        <Link href="/blog" className="text-accent">
          Writing
        </Link>
        .
      </p>
    </div>
  );
}
