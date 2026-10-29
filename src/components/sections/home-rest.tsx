import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { now, projects, site } from "@/lib/site";
import { formatCategory, formatDate } from "@/lib/format";
import type { BlogListItem } from "@/lib/blog-server";

export default function HomeRest({ latest }: { latest: BlogListItem | null }) {
  return (
    <>
      <section className="w-section border-t border-line py-16 md:py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[0.72rem] font-medium tracking-[0.22em] text-accent uppercase">
              Selected work
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight md:text-5xl">
              A few public things.
            </h2>
          </div>
          <Link href="/work" className="hidden text-sm text-muted hover:text-ink sm:inline">
            All of it
          </Link>
        </div>

        <ol className="mt-10 divide-y divide-line border-y border-line">
          {projects.map((project, index) => (
            <li key={project.name}>
              <a
                href={project.href}
                className="group grid gap-3 py-7 transition-colors md:grid-cols-12 md:items-baseline md:gap-6"
              >
                <span className="text-sm text-faint md:col-span-1">
                  0{index + 1}
                </span>
                <span className="font-serif text-3xl tracking-tight text-ink md:col-span-4">
                  {project.name}
                </span>
                <span className="text-muted md:col-span-5">{project.blurb}</span>
                <span className="inline-flex items-center gap-1 text-sm text-faint transition-colors group-hover:text-accent md:col-span-2 md:justify-end">
                  Visit
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section className="w-section grid gap-12 border-t border-line py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-4">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-accent uppercase">
            Now
          </p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight">
            What I’m doing.
          </h2>
          <p className="mt-4 text-sm text-faint">Updated {now.updated}</p>
        </div>
        <ul className="md:col-span-8">
          {now.items.map((item) => (
            <li
              key={item.label}
              className="grid gap-2 border-t border-line py-5 sm:grid-cols-[7rem_1fr] sm:gap-6"
            >
              <span className="text-sm text-accent">{item.label}</span>
              <span className="leading-relaxed text-muted">{item.text}</span>
            </li>
          ))}
          <li className="border-t border-line pt-5">
            <Link href="/now" className="text-sm text-ink hover:text-accent">
              The full note
            </Link>
          </li>
        </ul>
      </section>

      <section className="w-section border-t border-line py-16 md:py-24">
        <p className="text-[0.72rem] font-medium tracking-[0.22em] text-accent uppercase">
          Writing
        </p>
        {latest ? (
          <Link href={latest.href} className="group mt-6 block max-w-3xl">
            <p className="text-sm text-faint">
              {formatCategory(latest.category)} · {formatDate(latest.date)} ·{" "}
              {latest.readingTime}
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight transition-colors group-hover:text-accent md:text-5xl">
              {latest.title}
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
              {latest.description}
            </p>
          </Link>
        ) : (
          <h2 className="mt-4 max-w-xl font-serif text-4xl tracking-tight">
            The notebook is open. The first published note will land here.
          </h2>
        )}
        <Link
          href="/blog"
          className="mt-8 inline-flex text-sm text-ink hover:text-accent"
        >
          All writing
        </Link>
      </section>

      <section className="w-section border-t border-line py-16 md:py-20">
        <p className="max-w-xl font-serif text-3xl leading-snug tracking-tight md:text-4xl">
          If you want to talk about a project, or just the work,{" "}
          <a className="text-accent underline decoration-accent/40 underline-offset-4" href={`mailto:${site.email}`}>
            write me
          </a>
          .
        </p>
      </section>
    </>
  );
}
