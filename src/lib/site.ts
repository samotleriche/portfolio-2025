/**
 * Site copy and facts. Edit this file when a role, project, or "now" note changes.
 * Only things already true about Tomas live here.
 */

export const site = {
  name: "Tomas Leriche",
  role: "Senior software engineer",
  company: "Gradle",
  companyUrl: "https://gradle.com",
  location: "Santa Monica, California",
  email: "samotleriche@gmail.com",
  github: "https://github.com/samotleriche",
  linkedin: "https://www.linkedin.com/in/tomasleriche/",
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
      "I work on Gradle.com, the site for Gradle’s build tool. It’s the job I have now: product engineering on a page a lot of developers actually pass through.",
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
    detail: "Building Gradle.com.",
    when: "Present",
  },
  {
    org: "Long Lost Friends Inc.",
    title: "Head of software development",
    detail: "Led engineering, with the work centered on Web3.",
  },
  {
    org: "Non-Fungible Labs",
    title: "Product and architecture",
    detail:
      "Entrepreneurship, product development, and architecture. Acquired by Futureverse.",
  },
  {
    org: "Atlassian",
    title: "Software engineer, buyer experience",
    detail: "Full-stack work and A/B testing on the buyer experience team.",
  },
] as const;

export const education = [
  {
    school: "UNM Anderson School",
    credential: "Master of Science in Information Systems",
  },
  {
    school: "University of Puget Sound",
    credential: "Bachelor of Science in Molecular and Cellular Biology",
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
      text: "Senior software engineer at Gradle, building Gradle.com.",
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
