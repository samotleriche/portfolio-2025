import React from "react";

async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <div className="pt-[var(--h-navbar)] h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex w-section justify-center items-center flex-col gap-8 row-start-2">
        <div>Post: {slug}</div>
      </main>
    </div>
  );
}

export default BlogPage;
