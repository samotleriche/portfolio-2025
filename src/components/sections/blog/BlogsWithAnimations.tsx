import Blogs from "./blogs";

interface BlogsWithAnimationsProps {
  posts: Array<{
    slug: string;
    title: string;
    description: string;
    category: string;
    date: string;
    imgUrl: string;
    href: string;
    readingTime: string;
  }>;
}

function BlogsWithAnimations({ posts }: BlogsWithAnimationsProps) {
  return <Blogs posts={posts} />;
}

export default BlogsWithAnimations;
