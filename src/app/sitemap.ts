import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blog-server";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const paths = [
    "",
    "/work",
    "/about",
    "/blog",
    "/experiments",
    "/now",
    ...getAllBlogPosts().map((post) => post.href),
  ];

  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
