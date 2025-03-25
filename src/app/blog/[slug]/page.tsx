import React, { JSX } from "react";
import Hero from "@/components/sections/blog/hero";

const blogData: Record<
  string,
  {
    title: string;
    imgUrl: string;
    description: string;
    category: string;
    date: string;
    href: string;
    content: JSX.Element;
  }
> = {
  "first-blog": {
    title: "My first blog post",
    imgUrl:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3JpdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    description:
      "first blog nsequuntur asperiores ex omn uuntur asperiores ex omnis asdf asd i",
    category: "finance",
    date: "2021-10-01",
    href: "/blog/first-blog",
    content: <></>,
  },
  "second-blog": {
    title: "Another great blog post",
    imgUrl:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3JpdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    description:
      "another great nsequuntur asperiores ex omn uuntur asperiores ex omnis asdf asd i",
    category: "finance",
    date: "2021-10-01",
    href: "/blog/first-blog",
    content: <></>,
  },
  "third-blog": {
    title: "Third blog post is a really long title that says too many things",
    imgUrl:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3JpdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    description:
      "too much nsequuntur asperiores ex omn uuntur asperiores ex omnis asdf asd i",
    category: "finance",
    date: "2021-10-01",
    href: "/blog/first-blog",
    content: <></>,
  },
};

async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const blog = blogData[slug];

  return (
    <div className="pt-[var(--h-navbar)] h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex w-section justify-center items-center flex-col gap-8 row-start-2">
        <div>
          <Hero
            supertitle="Personal blog"
            title={blog.title}
            description={blog.description}
            date={blog.date}
          />
          {blog.content
            ? blog.content
            : "This is a collection of thoughts and ideas from Tomas Leriche about software engineering, finance, motion design, and more."}
        </div>
      </main>
    </div>
  );
}

export default BlogPage;
