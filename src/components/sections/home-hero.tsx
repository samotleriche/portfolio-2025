"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AnimatedAvatar from "@/components/animated-avatar";
import { site } from "@/lib/site";

export default function HomeHero() {
  const [engaged, setEngaged] = useState(false);

  function onMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    event.currentTarget.style.setProperty("--mx", `${x}%`);
    event.currentTarget.style.setProperty("--my", `${y}%`);
  }

  return (
    <section className="w-section flex min-h-[calc(100svh-var(--h-navbar))] flex-col justify-center py-16 md:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-7">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-accent uppercase">
            {site.location}
          </p>
          <h1 className="mt-5 font-serif text-[clamp(4.2rem,10vw,7.4rem)] leading-[0.86] font-medium tracking-[-0.04em]">
            Tomas
            <br />
            Leriche
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            {site.role} at {site.company}. I build for the web, and I like when
            it moves.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/work"
              className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
            >
              See the work
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center rounded-full border border-line px-5 py-2.5 text-sm text-ink transition-colors hover:bg-surface"
            >
              Read the writing
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-faint">
            <a className="hover:text-ink" href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="hover:text-ink" href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="hover:text-ink" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
        </div>

        <div
          className="lg:col-span-5"
          onMouseMove={onMove}
          onMouseEnter={() => setEngaged(true)}
          onMouseLeave={() => setEngaged(false)}
          onFocus={() => setEngaged(true)}
          onBlur={() => setEngaged(false)}
        >
          <div className="relative mx-auto aspect-square w-full max-w-[28rem]">
            <div aria-hidden className="avatar-glow pointer-events-none absolute inset-[6%] rounded-full" />
            <div className="avatar-float relative h-full w-full">
              <AnimatedAvatar engaged={engaged} />
            </div>
          </div>
          <p className="mt-2 text-center text-sm text-faint">
            Drawn in Rive.
            <Link
              href="/experiments"
              className="ml-2 inline-flex items-center gap-1 text-muted hover:text-ink"
            >
              More in the lab
              <ArrowUpRight className="size-3.5" />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
