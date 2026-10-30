import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/site/page-header";
import RevealHeading from "@/components/site/heading-reveal";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work by Tomas Leriche, including Gradle.com, Paragons, and a Three.js portfolio.",
};

export default function WorkPage() {
  return (
    <div className="w-section py-16 md:py-24">
      <PageHeader eyebrow="Work" title="Things with a URL.">
        The public ones. The jobs without a single page to point at — Long Lost
        Friends, Non-Fungible Labs, Atlassian — are on the about page.
      </PageHeader>

      <div className="mt-16 flex flex-col">
        {projects.map((project, index) => (
          <article
            key={project.name}
            className="grid gap-6 border-t border-line py-12 md:grid-cols-12 md:gap-8 md:py-16"
          >
            <p className="text-sm text-faint md:col-span-2">0{index + 1}</p>
            <div className="md:col-span-10">
              <RevealHeading
                as="h2"
                inView
                text={project.name}
                className="font-serif text-4xl tracking-tight md:text-6xl"
              />
              <p className="mt-3 text-sm text-accent">{project.role}</p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                {project.summary}
              </p>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm text-ink hover:text-accent"
              >
                {project.href.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
