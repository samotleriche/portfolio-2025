import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  imgUrl: string;
  href: string;
  readingTime: string;
  content: string;
  tags: string[];
  draft: boolean;
  featured: boolean;
  author: string;
}

export type BlogListItem = Omit<BlogPost, "content">;

const blogDirectory = path.join(process.cwd(), "src/content/blog");

function toPost(slug: string, fileContents: string): BlogPost {
  const matterResult = matter(fileContents);
  const data = matterResult.data;
  const stats = readingTime(matterResult.content);

  return {
    slug,
    title: String(data.title ?? "Untitled"),
    description: String(data.description ?? ""),
    category: String(data.category ?? "misc"),
    date: String(data.date ?? ""),
    imgUrl: String(data.imgUrl ?? ""),
    href: `/blog/${slug}`,
    readingTime: stats.text,
    content: matterResult.content,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    draft: Boolean(data.draft),
    featured: Boolean(data.featured),
    author:
      typeof data.author === "string" && data.author
        ? data.author
        : "Tomas Leriche",
  };
}

function readPosts(): BlogPost[] {
  try {
    const fileNames = fs
      .readdirSync(blogDirectory)
      .filter((name) => name.endsWith(".mdx"));

    const posts = fileNames.flatMap((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      try {
        const fullPath = path.join(blogDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        return [toPost(slug, fileContents)];
      } catch (error) {
        console.error(`Error reading blog post ${slug}:`, error);
        return [];
      }
    });

    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return [];
  }
}

export function getBlogSlugs(): string[] {
  try {
    return fs
      .readdirSync(blogDirectory)
      .filter((name) => name.endsWith(".mdx"))
      .map((name) => name.replace(/\.mdx$/, ""));
  } catch {
    return [];
  }
}

/** Published posts, newest first. Drafts stay off the index, home, and RSS. */
export function getAllBlogPosts(): BlogPost[] {
  return readPosts().filter((post) => !post.draft);
}

export function getPublishedPosts(): BlogListItem[] {
  return getAllBlogPosts().map(({ content, ...post }) => {
    void content;
    return post;
  });
}

/** Includes drafts, so a direct URL can preview unpublished writing. */
export function getBlogPost(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    return toPost(slug, fileContents);
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

export function getBlogPostMetadata(
  slug: string
): BlogListItem | null {
  const post = getBlogPost(slug);
  if (!post) return null;
  const { content, ...metadata } = post;
  void content;
  return metadata;
}

export function getRelatedPosts(slug: string, limit = 2): BlogListItem[] {
  const current = getBlogPost(slug);
  if (!current || current.draft) return [];

  const posts = getPublishedPosts().filter((post) => post.slug !== slug);
  const sameCategory = posts.filter(
    (post) => post.category === current.category
  );
  const others = posts.filter((post) => post.category !== current.category);
  return [...sameCategory, ...others].slice(0, limit);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return getAllBlogPosts().filter((post) => post.category === category);
}

export function getAllCategories(): string[] {
  return [...new Set(getAllBlogPosts().map((post) => post.category))];
}
