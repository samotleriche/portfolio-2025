import React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getBlogPost,
  getBlogSlugs,
  getRelatedPosts,
} from "@/lib/blog-server";
import { extractHeadings, renderMarkdown } from "@/lib/markdown";
import { formatCategory, formatDate } from "@/lib/format";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogPost(slug);
  const previousImages = (await parent).openGraph?.images || [];

  if (!blog) {
    return { title: "Not found" };
  }

  return {
    title: blog.title,
    description: blog.description,
    robots: blog.draft ? { index: false, follow: false } : undefined,
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      publishedTime: blog.date,
      images: blog.imgUrl
        ? [
            ...previousImages,
            { url: blog.imgUrl, width: 800, height: 600, alt: blog.title },
          ]
        : previousImages,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const headings = extractHeadings(post.content, post.title);
  const html = renderMarkdown(post.content, post.title);
  const related = post.draft ? [] : getRelatedPosts(slug);
  const showToc = headings.length >= 2;

  return (
    <div className="w-section py-12 md:py-20">
      <div className="mx-auto grid w-full max-w-[42rem] lg:max-w-5xl lg:grid-cols-[minmax(0,42rem)_13rem] lg:gap-x-14">
        <div>
          <Link href="/blog" className="text-sm text-muted hover:text-ink">
            ← Writing
          </Link>

          {post.draft ? (
            <p className="mt-8 rounded-2xl border border-line bg-accent-soft px-4 py-3 text-sm leading-relaxed text-ink">
              Draft. This page isn’t on the writing index or in the feed. Set{" "}
              <code className="font-mono">draft: false</code> in the frontmatter
              when it’s ready.
            </p>
          ) : null}

          <header className="mt-10">
            <p className="text-sm text-accent">
              {formatCategory(post.category)}
              <span className="text-faint">
                {" "}
                · {formatDate(post.date)} · {post.readingTime}
              </span>
            </p>
            <h1 className="mt-4 font-serif text-[clamp(2.6rem,5vw,4.4rem)] leading-[1.02] font-medium tracking-[-0.03em]">
              {post.title}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted">
              {post.description}
            </p>
          </header>

          {post.imgUrl ? (
            <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl bg-surface">
              <Image
                src={post.imgUrl}
                alt=""
                fill
                priority
                className="object-cover"
                sizes="(min-width: 768px) 672px, 100vw"
              />
            </div>
          ) : null}

          <article
            className="essay mt-12"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <footer className="mt-16 border-t border-line pt-8">
            {post.tags.length > 0 ? (
              <ul className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            ) : null}
            <p className="mt-6 text-sm text-faint">Written by {post.author}.</p>

            {related.length > 0 ? (
              <div className="mt-10">
                <p className="text-[0.72rem] font-medium tracking-[0.18em] text-faint uppercase">
                  More writing
                </p>
                <ul className="mt-4">
                  {related.map((item) => (
                    <li key={item.slug} className="border-t border-line py-4">
                      <Link
                        href={item.href}
                        className="font-serif text-2xl tracking-tight hover:text-accent"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </footer>
        </div>

        {showToc ? (
          <aside className="hidden self-start lg:sticky lg:top-28 lg:mt-16 lg:block">
            <nav className="sticky top-28" aria-label="On this page">
              <p className="text-[0.72rem] font-medium tracking-[0.18em] text-faint uppercase">
                On this page
              </p>
              <ul className="mt-4 space-y-2">
                {headings.map((heading) => (
                  <li
                    key={heading.id}
                    className={heading.depth === 3 ? "pl-3" : undefined}
                  >
                    <a
                      href={`#${heading.id}`}
                      className="text-sm leading-snug text-muted hover:text-ink"
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        ) : null}
      </div>
    </div>
  );
}
