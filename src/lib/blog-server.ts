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
}

const blogDirectory = path.join(process.cwd(), "src/content/blog");

export function getAllBlogPosts(): BlogPost[] {
  try {
    // Get all MDX files in the blog directory
    const fileNames = fs
      .readdirSync(blogDirectory)
      .filter((name) => name.endsWith(".mdx"));

    const allPostsData = fileNames.map((fileName) => {
      // Remove .mdx from file name to get slug
      const slug = fileName.replace(/\.mdx$/, "");

      // Read markdown file as string
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Calculate reading time
      const stats = readingTime(matterResult.content);

      // Combine the data with the slug
      return {
        slug,
        title: matterResult.data.title,
        description: matterResult.data.description,
        category: matterResult.data.category,
        date: matterResult.data.date,
        imgUrl: matterResult.data.imgUrl,
        href: `/blog/${slug}`,
        readingTime: stats.text,
        content: matterResult.content,
      };
    });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return [];
  }
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Calculate reading time
    const stats = readingTime(matterResult.content);

    // Combine the data with the slug
    return {
      slug,
      title: matterResult.data.title,
      description: matterResult.data.description,
      category: matterResult.data.category,
      date: matterResult.data.date,
      imgUrl: matterResult.data.imgUrl,
      href: `/blog/${slug}`,
      readingTime: stats.text,
      content: matterResult.content,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

export function getBlogPostMetadata(
  slug: string
): Omit<BlogPost, "content"> | null {
  const post = getBlogPost(slug);
  if (!post) return null;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { content, ...metadata } = post;
  return metadata;
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllBlogPosts();
  return allPosts.filter((post) => post.category === category);
}

export function getAllCategories(): string[] {
  const allPosts = getAllBlogPosts();
  const categories = allPosts.map((post) => post.category);
  return [...new Set(categories)];
}
