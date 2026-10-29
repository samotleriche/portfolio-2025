import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/site/page-header";
import WritingList, { type WritingPost } from "@/components/blog/writing-list";
import { getPublishedPosts } from "@/lib/blog-server";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes by Tomas Leriche on software, motion, and whatever is worth keeping.",
};

export default function BlogPage() {
  const posts: WritingPost[] = getPublishedPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    description: post.description,
    category: post.category,
    date: post.date,
    href: post.href,
    readingTime: post.readingTime,
    tags: post.tags,
    featured: post.featured,
  }));

  return (
    <div className="w-section py-16 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <PageHeader eyebrow="Notebook" title="Writing">
          Notes on software, motion, and whatever is worth keeping. I publish a
          piece when it’s finished.
        </PageHeader>
        <Link href="/feed.xml" className="text-sm text-muted hover:text-ink">
          RSS
        </Link>
      </div>
      <WritingList posts={posts} />
    </div>
  );
}
