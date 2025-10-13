import React from "react";
import { Metadata, ResolvingMetadata } from "next";
import Hero from "@/components/sections/blog/hero";
import { blogData } from "@/components/sections/blog/blogData";

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

  const blog = blogData[slug];

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

  const blog = blogData[slug];

  return (
    <div className="pt-[var(--h-navbar)] font-[family-name:var(--font-geist-sans)]">
      <main className="flex w-section p-section justify-center items-center flex-col gap-8 row-start-2">
        <div className="flex flex-col items-center gap-14 pb-20 w-full">
          <Hero
            supertitle="Personal blog"
            title={blog.title}
            description={blog.description}
            date={blog.date}
            heroImage={blog.imgUrl}
          />
          <div className="max-w-[60ch] text-gray-400 text-lg px-section">
            {blog.content
              ? blog.content
              : "No content available for this blog post."}
          </div>
        </div>
      </main>
    </div>
  );
}

export default BlogPage;
