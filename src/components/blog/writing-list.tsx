"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { formatCategory, formatDate } from "@/lib/format";
import RevealHeading from "@/components/site/heading-reveal";

export type WritingPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  href: string;
  readingTime: string;
  tags: string[];
  featured: boolean;
};

export default function WritingList({ posts }: { posts: WritingPost[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const categories = useMemo(
    () => [...new Set(posts.map((post) => post.category))],
    [posts]
  );

  const filtering = query.trim().length > 0 || category !== "all";

  const matches = posts.filter((post) => {
    const inCategory = category === "all" || post.category === category;
    const haystack = `${post.title} ${post.description} ${post.tags.join(" ")}`.toLowerCase();
    return inCategory && haystack.includes(query.trim().toLowerCase());
  });

  const featured = posts.find((post) => post.featured) ?? posts[0];
  const rest = filtering
    ? matches
    : posts.filter((post) => post.slug !== featured?.slug);

  if (posts.length === 0) {
    return (
      <p className="mt-16 max-w-xl border-t border-line pt-10 font-serif text-3xl tracking-tight text-ink">
        Nothing published yet. Drafts stay off this page until the frontmatter
        says otherwise.
      </p>
    );
  }

  return (
    <div className="mt-14">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Categories">
          {["all", ...categories].map((item) => {
            const selected = category === item;
            return (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setCategory(item)}
                className={`rounded-full px-3 py-1.5 text-sm capitalize transition-colors ${
                  selected
                    ? "bg-accent text-accent-ink"
                    : "text-muted hover:text-ink"
                }`}
              >
                {item === "all" ? "All" : formatCategory(item)}
              </button>
            );
          })}
        </div>
        <label className="sr-only" htmlFor="writing-search">
          Search writing
        </label>
        <input
          id="writing-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search notes"
          className="w-full rounded-full border border-line bg-transparent px-4 py-2 text-sm text-ink outline-none placeholder:text-faint sm:w-56"
        />
      </div>

      {!filtering && featured ? (
        <Link href={featured.href} className="group mt-10 block max-w-3xl">
          <p className="text-sm text-faint">
            {formatCategory(featured.category)} · {formatDate(featured.date)} ·{" "}
            {featured.readingTime}
          </p>
          <RevealHeading
            as="h2"
            text={featured.title}
            className="mt-3 font-serif text-4xl tracking-tight transition-colors group-hover:text-accent md:text-5xl"
          />
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
            {featured.description}
          </p>
        </Link>
      ) : null}

      {rest.length > 0 ? (
        <ul className="mt-10 border-t border-line">
          {rest.map((post) => (
            <li key={post.slug} className="border-b border-line">
              <Link
                href={post.href}
                className="group grid gap-2 py-6 md:grid-cols-12 md:items-baseline md:gap-6"
              >
                <span className="text-sm text-faint md:col-span-3">
                  {formatDate(post.date)}
                </span>
                <span className="md:col-span-6">
                  <span className="font-serif text-2xl tracking-tight text-ink transition-colors group-hover:text-accent">
                    {post.title}
                  </span>
                  <span className="mt-1 block text-sm text-muted">
                    {post.description}
                  </span>
                </span>
                <span className="text-sm text-faint md:col-span-3 md:text-right">
                  {formatCategory(post.category)} · {post.readingTime}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : filtering ? (
        <p className="mt-10 text-muted">Nothing matches that.</p>
      ) : (
        <p className="mt-10 border-t border-line pt-8 text-muted">
          More notes will land under this one.
        </p>
      )}
    </div>
  );
}
