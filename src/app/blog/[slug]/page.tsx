import React, { Suspense } from "react";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { marked } from "marked";
import Hero from "@/components/sections/blog/hero";
import { getBlogPost, getBlogPostMetadata } from "@/lib/blog-server";
import ErrorBoundary from "@/components/ui/ErrorBoundary";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  const blog = getBlogPostMetadata(slug);

  if (!blog) {
    return {
      title: "Blog Post Not Found | Tomas Leriche",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: blog.title + " | Tomas Leriche",
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: [
        ...previousImages,
        {
          url: blog.imgUrl,
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const blog = getBlogPost(slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="pt-[var(--h-navbar)] font-[family-name:var(--font-geist-sans)] min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <main className="flex w-section p-section justify-center items-start flex-col gap-12 row-start-2">
        {/* Hero Section */}
        <div className="w-full">
          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner size="lg" className="py-8" />}>
              <Hero
                supertitle="Personal blog"
                title={blog.title}
                description={blog.description}
                heroImage={blog.imgUrl}
              />
            </Suspense>
          </ErrorBoundary>
        </div>

        {/* Blog Metadata */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-6 py-6 px-8 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-sm">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
              <span>
                {new Date(blog.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
              <span>
                {Math.ceil(blog.content.split(" ").length / 200)} min read
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="capitalize">{blog.category || "General"}</span>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="w-full max-w-4xl mx-auto">
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className="space-y-6">
                  <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-700 rounded w-3/4 animate-pulse"></div>
                  <div className="h-8 bg-gray-700 rounded w-1/2 animate-pulse mt-8"></div>
                  <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                </div>
              }
            >
              <article
                className="prose prose-lg prose-invert prose-violet max-w-none 
                 prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
                 prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-12 prose-h1:first:mt-0
                 prose-h2:text-3xl prose-h2:mb-8 prose-h2:mt-12 prose-h2:first:mt-0
                 prose-h3:text-2xl prose-h3:mb-6 prose-h3:mt-10 prose-h3:first:mt-0
                 prose-h4:text-xl prose-h4:mb-4 prose-h4:mt-8 prose-h4:first:mt-0
                 prose-p:text-gray-200 prose-p:leading-relaxed prose-p:mb-6 prose-p:mt-0
                 prose-strong:text-white prose-strong:font-semibold
                 prose-em:text-violet-300 prose-em:italic
                 prose-a:text-violet-400 prose-a:no-underline hover:prose-a:text-violet-300 hover:prose-a:underline
                 prose-blockquote:border-l-violet-500 prose-blockquote:bg-gray-800/30 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:my-8
                 prose-code:text-violet-300 prose-code:bg-gray-800/50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                 prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700 prose-pre:rounded-lg prose-pre:my-8
                 prose-ul:space-y-2 prose-ol:space-y-2 prose-ul:my-6 prose-ol:my-6
                 prose-li:text-gray-200 prose-li:leading-relaxed
                 prose-img:rounded-lg prose-img:shadow-lg prose-img:my-8
                 prose-hr:border-gray-700 prose-hr:my-12"
              >
                <div
                  dangerouslySetInnerHTML={{ __html: marked(blog.content) }}
                />
              </article>
            </Suspense>
          </ErrorBoundary>
        </div>

        {/* Bottom Spacing */}
        <div className="pb-20"></div>
      </main>
    </div>
  );
}

export default BlogPage;
