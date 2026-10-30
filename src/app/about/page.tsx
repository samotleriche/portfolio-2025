import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/site/page-header";
import RevealHeading from "@/components/site/heading-reveal";
import { education, roles, site, skills } from "@/lib/site";
import profile from "./profilePic.jpg";

export const metadata: Metadata = {
  title: "About",
  description: site.description,
};

export default function AboutPage() {
  return (
    <div className="w-section py-16 md:py-24">
      <PageHeader eyebrow="About" title="Seven years in, still building.">
        Senior software engineer at Gradle. I care about interfaces with a
        little craft in them, and about systems other people can change.
      </PageHeader>

      <div className="mt-14 grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface lg:col-span-5">
          <Image
            src={profile}
            alt="Tomas Leriche"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 380px, 90vw"
          />
        </div>
        <div className="max-w-xl space-y-5 text-lg leading-relaxed text-muted lg:col-span-7">
          <p>
            I’m a senior software engineer at Gradle, where I work on
            Gradle.com. Before that I led engineering at Long Lost Friends,
            built product at Non-Fungible Labs — later acquired by Futureverse —
            and worked on the buyer experience team at Atlassian.
          </p>
          <p>
            The front of the stack is where I like to spend time: React,
            motion, and the occasional 3D scene. Rive, Lottie, Spline, and
            Three.js are the tools I reach for when a page should feel like
            more than a document.
          </p>
          <p>
            I studied information systems at UNM Anderson, and molecular and
            cellular biology at the University of Puget Sound. I live in Santa
            Monica.
          </p>
          <p>
            <a
              className="text-accent underline decoration-accent/40 underline-offset-4"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </p>
        </div>
      </div>

      <section className="mt-20 border-t border-line pt-12">
        <RevealHeading
          as="h2"
          inView
          text="Experience"
          className="font-serif text-3xl tracking-tight"
        />
        <ol className="mt-8">
          {roles.map((role) => (
            <li
              key={role.org}
              className="grid gap-2 border-t border-line py-6 md:grid-cols-12 md:gap-6"
            >
              <div className="md:col-span-4">
                <p className="text-ink">{role.org}</p>
                {"when" in role && role.when ? (
                  <p className="mt-1 text-sm text-accent">{role.when}</p>
                ) : null}
              </div>
              <div className="md:col-span-8">
                <p className="text-ink">{role.title}</p>
                <p className="mt-1 text-muted">{role.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-8 grid gap-12 border-t border-line pt-12 md:grid-cols-2">
        <div>
          <RevealHeading
            as="h2"
            inView
            text="Education"
            className="font-serif text-3xl tracking-tight"
          />
          <ul className="mt-6 space-y-5">
            {education.map((item) => (
              <li key={item.school}>
                <p className="text-ink">{item.credential}</p>
                <p className="mt-1 text-sm text-muted">{item.school}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <RevealHeading
            as="h2"
            inView
            text="Tools"
            className="font-serif text-3xl tracking-tight"
          />
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
            {skills.map((skill) => (
              <li key={skill} className="text-ink">
                {skill}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted">
            The motion experiments live in the{" "}
            <Link href="/experiments" className="text-accent">
              lab
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
