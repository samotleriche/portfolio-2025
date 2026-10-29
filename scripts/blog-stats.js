#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const readingTime = require("reading-time");

const blogDirectory = path.join(process.cwd(), "src/content/blog");
const statsPath = path.join(process.cwd(), "blog-stats.json");

function main() {
  if (!fs.existsSync(blogDirectory)) {
    console.error(`Blog directory not found: ${blogDirectory}`);
    process.exit(1);
  }

  const files = fs
    .readdirSync(blogDirectory)
    .filter((name) => name.endsWith(".mdx"));

  const posts = files.map((fileName) => {
    const fileContents = fs.readFileSync(
      path.join(blogDirectory, fileName),
      "utf8"
    );
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      title: data.title || fileName,
      category: data.category || "uncategorized",
      date: data.date || null,
      draft: Boolean(data.draft),
      featured: Boolean(data.featured),
      tags: Array.isArray(data.tags) ? data.tags : [],
      readingTime: Number(stats.minutes.toFixed(2)),
      wordCount: stats.words,
    };
  });

  const categories = {};
  const tags = {};
  let totalReadingTime = 0;

  for (const post of posts) {
    categories[post.category] = (categories[post.category] || 0) + 1;
    for (const tag of post.tags) {
      tags[tag] = (tags[tag] || 0) + 1;
    }
    totalReadingTime += post.readingTime;
  }

  const publishedPosts = posts.filter((post) => !post.draft).length;
  const draftPosts = posts.filter((post) => post.draft).length;
  const featuredPosts = posts.filter((post) => post.featured).length;

  const summary = {
    totalPosts: posts.length,
    publishedPosts,
    draftPosts,
    featuredPosts,
    categories,
    tags,
    totalReadingTime,
    averageReadingTime:
      posts.length === 0
        ? 0
        : Number((totalReadingTime / posts.length).toFixed(2)),
    posts,
  };

  fs.writeFileSync(statsPath, JSON.stringify(summary, null, 2) + "\n");
  console.log(`Wrote stats for ${posts.length} posts to blog-stats.json`);
  console.log(
    `Published: ${publishedPosts} • Drafts: ${draftPosts} • Featured: ${featuredPosts}`
  );
}

main();
