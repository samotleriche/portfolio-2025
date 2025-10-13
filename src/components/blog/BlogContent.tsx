import React from "react";

interface BlogContentProps {
  slug: string;
}

// Dynamic content loading with code splitting
const BlogContent: React.FC<BlogContentProps> = ({ slug }) => {
  // Content for each blog post
  let content = null;

  if (slug === "first-blog") {
    content = (
      <div className="space-y-6">
        <p>
          I&apos;ve wanted to make a portfolio website for a{" "}
          <em>
            <strong>very</strong>
          </em>{" "}
          long time. But as life would have it, something always came up that
          took my mind off the task. I managed a first attempt at a portfolio
          website about 6 or 7 months ago but I went the route of making it
          overly complex with animations and styles. Eventually, it was ready to
          go live, but it felt too much like an artistic statement and I was no
          longer sure I liked it. I wanted to start all over.
        </p>
        <p>
          So here I am working on what will hopefully be my public portfolio. My
          goal is to keep it simple and clean and to practice my craft in order
          to not only improve my skills and explore new technology but also to
          showcase my work and have a long living software project I can work on
          long-term.
        </p>
        <h3 className="text-gray-100 text-xl">What Tech?</h3>
        <p>
          I&apos;ve decided to use the tech that I both like using the most and
          that I have the most experience with. Namely, Next.js -- which is a
          Meta framework for React. For styling, I&apos;m going with Tailwind,
          which recently just released version 4. As of right now, that&apos;s
          really the only tech that&apos;s being used on the website.
        </p>
        <p>
          In the near future, I&apos;d like to incorporate a number of other
          tools and features to this website including Storybook, Rive, Spline,
          Ads, possibly a profile system and newsletter signup as well.
        </p>
        <h3 className="text-gray-100 text-xl">Why a blog?</h3>
        <p>
          I wanted to include a blog feature to the website because I&apos;m
          already in the habit of journaling on a regular basis and I rather
          enjoy the writing process. After journaling for this past year, it was
          insightful to be able to look back on my thoughts and see how I&apos;d
          changed and what I had accomplished. Writing down your thoughts and
          goals can help hold you accountable.
        </p>
        <p>
          A blog is also a great opportunity to make use of a lot of different
          features in Next.js like dynamic SEO and static page generation. It
          gives me a good opportunity to make a number of pages and possibly
          even incorporate a CMS. If I learn a new tool, I can also write about
          it in addition to implementing it on the website.
        </p>
      </div>
    );
  } else {
    content = <p className="text-gray-400">Content coming soon...</p>;
  }

  return (
    <div className="max-w-[60ch] text-gray-400 text-lg px-section prose prose-invert prose-violet max-w-none">
      {content}
    </div>
  );
};

export default BlogContent;
