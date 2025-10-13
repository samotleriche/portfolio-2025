// Legacy interface for backward compatibility during transition
export interface LegacyBlogPost {
  title: string;
  imgUrl: string;
  description: string;
  category: string;
  date: string;
  href: string;
  content?: React.ReactElement;
}

// Static blog data for backward compatibility during transition
// This will be replaced by the new MDX system
export const blogData: Record<string, LegacyBlogPost> = {
  "first-blog": {
    title: "My first blog post",
    imgUrl:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3JpdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    description:
      "The importance of having a portfolio website in order to showcase your work and practice your craft.",
    category: "finance",
    date: "2025-03-29 PST",
    href: "/blog/first-blog",
  },
  "second-blog": {
    title: "Another great blog post",
    imgUrl:
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d3JpdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    description:
      "another great nsequuntur asperiores ex omn uuntur asperiores ex omnis asdf asd i",
    category: "software",
    date: "2021-10-01",
    href: "/blog/second-blog",
  },
  "third-blog": {
    title: "Third blog post is a really long title that says too many things",
    imgUrl:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d3JpdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    description:
      "too much nsequuntur asperiores ex omn uuntur asperiores ex omnis asdf asd i",
    category: "misc",
    date: "2021-10-01",
    href: "/blog/third-blog",
  },
};
