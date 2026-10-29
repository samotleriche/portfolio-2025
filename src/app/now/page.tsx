import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/site/page-header";
import { now } from "@/lib/site";

export const metadata: Metadata = {
  title: "Now",
  description: "What Tomas Leriche is working on right now.",
};

export default function NowPage() {
  return (
    <div className="w-section py-16 md:py-24">
      <PageHeader eyebrow={`Updated ${now.updated}`} title="Now">
        A short log, in the spirit of a now page. I change it when something
        actually changes.
      </PageHeader>

      <ul className="mt-14 max-w-2xl">
        {now.items.map((item) => (
          <li key={item.label} className="border-t border-line py-7">
            <p className="text-sm text-accent">{item.label}</p>
            <p className="mt-2 text-lg leading-relaxed text-ink">{item.text}</p>
          </li>
        ))}
      </ul>

      <p className="mt-10 max-w-xl text-muted">
        There’s also a{" "}
        <Link href="/markets" className="text-accent">
          markets
        </Link>{" "}
        page. It’s still a blank notebook. Writing that belongs somewhere lives
        under{" "}
        <Link href="/blog" className="text-accent">
          Writing
        </Link>
        .
      </p>
    </div>
  );
}
