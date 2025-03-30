import { JSX } from "react";

export const blogData: Record<
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
      "The importance of having a portfolio website in order to showcase your work and practice your craft.",
    category: "finance",
    date: "2025-03-29 PST",
    href: "/blog/first-blog",
    content: (
      <>
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
        <br />
        <p>
          So here I am working on what will hopefully be my public portfolio. My
          goal is to keep it simple and clean and to practice my craft in order
          to not only improve my skills and explore new technology but also to
          showcase my work and have a long living software project I can work on
          long-term.
        </p>
        <br />
        <h3 className="text-gray-100 text-xl">What Tech?</h3>
        <br />
        <p>
          I&apos;ve decided to use the tech that I both like using the most and
          that I have the most experience with. Namely, Next.js -- which is a
          Meta framework for React. For styling, I&apos;m going with Tailwind,
          which recently just released version 4. As of right now, that&apos;s
          really the only tech that&apos;s being used on the website.
        </p>
        <br />
        <p>
          In the near future, I&apos;d like to incorporate a number of other
          tools and features to this website including Storybook, Rive, Spline,
          Ads, possibly a profile system and newsletter signup as well.
        </p>
        <br />
        <h3 className="text-gray-100 text-xl">Why a blog?</h3>
        <br />
        <p>
          I wanted to include a blog feature to the website because I&apos;m
          already in the habit of journaling on a regular basis and I rather
          enjoy the writing process. After journaling for this past year, it was
          insightful to be able to look back on my thoughts and see how I&apos;d
          changed and what I had accomplished. Writing down your thoughts and
          goals can help hold you accountable.
        </p>
        <br />
        <p>
          A blog is also a great opportunity to make use of a lot of different
          features in Next.js like dynamic SEO and static page generation. It
          gives me a good opportunity to make a number of pages and possibly
          even incorporate a CMS. If I learn a new tool, I can also write about
          it in addition to implementing it on the website.
        </p>
      </>
    ),
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
    content: <></>,
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
    content: <></>,
  },
};
