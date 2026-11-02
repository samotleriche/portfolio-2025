/**
 * Site copy and facts. Edit this file when a role, project, or "now" note changes.
 * Only things already true about Tomas live here.
 */

export const site = {
  name: "Tomas Leriche",
  role: "Senior software engineer",
  location: "Santa Monica, California",
  email: "samotleriche@gmail.com",
  github: "https://github.com/samotleriche",
  linkedin: "https://www.linkedin.com/in/tomasleriche/",
  resume: "/resume.pdf",
  description:
    "Tomas Leriche is a software engineer and motion designer based in Santa Monica, California.",
};

export const projects = [
  {
    name: "Gradle.com",
    href: "https://gradle.com",
    role: "Senior software engineer",
    blurb: "The public site for Gradle’s build automation platform.",
    summary:
      "I worked on Gradle.com, the site for Gradle’s build tool. Product engineering on a page a lot of developers actually pass through.",
  },
  {
    name: "Paragons",
    href: "https://paragonsnft.com",
    role: "Product and architecture",
    blurb: "A Web3 product from Non-Fungible Labs.",
    summary:
      "Paragons came out of Non-Fungible Labs, later acquired by Futureverse. I worked on the product and the architecture underneath it.",
  },
  {
    name: "3D portfolio",
    href: "https://three-js-1.vercel.app",
    role: "Personal",
    blurb: "An earlier site, built to learn Three.js in public.",
    summary:
      "Before this site I made a portfolio as a 3D scene. It was a place to try Three.js where someone else could actually see it.",
  },
] as const;

export const roles = [
  {
    org: "Gradle Inc.",
    title: "Senior software engineer",
    when: "Sep 2023 – Dec 2025",
    detail:
      "Built the new Gradle.com in Next.js with design and marketing. Interfaces, GSAP motion, and a component library in Storybook.",
  },
  {
    org: "Long Lost Friends",
    title: "Head of software development",
    when: "Feb 2022 – Sep 2023",
    detail:
      "Led a nine-person engineering team. Staffed engineering and design, chose architectures, and set the workflows between them.",
  },
  {
    org: "Futureverse",
    title: "Senior full-stack software engineer",
    when: "Sep 2021 – Jan 2022",
    detail:
      "Non-Fungible Labs, later Futureverse. Minting pages, an NFT marketplace, and interactive 3D on the web.",
  },
  {
    org: "Atlassian",
    title: "Full-stack software engineer",
    when: "Mar 2021 – Sep 2021",
    detail:
      "Reusable React components in Storybook, and Magnolia CMS content wired into the buyer experience.",
  },
  {
    org: "Improving",
    title: "Full-stack software engineer",
    when: "Aug 2020 – Feb 2021",
    detail:
      "Formerly Object Partners. Reusable React interfaces, server-rendered Next.js, and a GraphQL API.",
  },
  {
    org: "Cognizant",
    title: "Full-stack software engineer",
    when: "Apr 2019 – Aug 2020",
    detail:
      "Spring Boot services and Angular interfaces, plus the CI pipelines that shipped them.",
  },
  {
    org: "University of New Mexico",
    title: "Graduate technical research assistant",
    when: "Aug 2016 – Jan 2019",
    detail:
      "Part-time. A Node.js API and MySQL database for a research team, with a data-entry interface in front of it.",
  },
] as const;

export const education = [
  {
    school: "UNM Anderson School",
    credential: "Master of Science in Information Systems and Assurance",
    years: "2018",
  },
  {
    school: "University of Puget Sound",
    credential: "Bachelor of Science in Molecular and Cellular Biology",
    years: "2014",
  },
] as const;

export const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind",
  "Three.js",
  "R3F",
  "Rive",
  "Lottie",
  "Spline",
] as const;

export const now = {
  updated: "October 2026",
  items: [
    {
      label: "Work",
      text: "I left Gradle after a little over two years on Gradle.com. Right now I’m traveling and working on personal projects, some of them software.",
    },
    {
      label: "Motion",
      text: "The portrait on the homepage is a Rive character with an idle look and a hover state. There’s a second animation in the lab. I want the motion to feel like it belongs to the page.",
    },
    {
      label: "Writing",
      text: "This site is where finished notes will live. I’ve been journaling privately; the public pieces start small and grow from here.",
    },
    {
      label: "Place",
      text: "Santa Monica, California.",
    },
  ],
} as const;

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (production) return `https://${production}`;
  const vercel = process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}
