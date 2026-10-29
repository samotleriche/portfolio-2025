"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealHeadingProps = {
  text: string;
  as?: "h1" | "h2";
  className?: string;
  /** Words rise one at a time. Lines rise as whole rows, for the homepage name. */
  by?: "word" | "line";
  /** Play when the heading enters the viewport instead of on load. */
  inView?: boolean;
  /** A short accent rule that draws in after the type. */
  rule?: boolean;
};

export default function RevealHeading({
  text,
  as: Tag = "h1",
  className,
  by = "word",
  inView = false,
  rule = false,
}: RevealHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const lines = text.split("\n");
  const words = text.split(" ");

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const context = gsap.context(() => {
      const pieces = root.querySelectorAll<HTMLElement>("[data-reveal]");
      const ruleEl = root.querySelector<HTMLElement>("[data-rule]");
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduce) {
        gsap.set(pieces, { yPercent: 0 });
        if (ruleEl) gsap.set(ruleEl, { scaleX: 1 });
        return;
      }

      const play = () => {
        gsap.fromTo(
          pieces,
          { yPercent: 110 },
          {
            yPercent: 0,
            duration: 1.05,
            ease: "power3.out",
            stagger: by === "line" ? 0.14 : 0.055,
          }
        );
        if (ruleEl) {
          gsap.fromTo(
            ruleEl,
            { scaleX: 0 },
            {
              scaleX: 1,
              duration: 0.7,
              ease: "power2.out",
              delay: by === "line" ? 0.28 : 0.18,
            }
          );
        }
      };

      if (!inView) {
        play();
        return;
      }

      ScrollTrigger.create({
        trigger: root,
        start: "top 92%",
        once: true,
        onEnter: play,
      });
    }, root);

    return () => context.revert();
  }, [by, inView]);

  const mask =
    "inline-block overflow-hidden align-bottom pb-[0.14em] -mb-[0.12em]";

  return (
    <Tag
      ref={ref}
      className={className}
      aria-label={text.replace(/\n/g, " ")}
    >
      {by === "line"
        ? lines.map((line, index) => (
            <span key={`${line}-${index}`} className="block overflow-hidden pb-[0.06em]">
              <span data-reveal className="block">
                {line}
              </span>
            </span>
          ))
        : words.map((word, index) => (
            <span key={`${word}-${index}`}>
              <span className={mask}>
                <span data-reveal className="inline-block">
                  {word}
                </span>
              </span>
              {index < words.length - 1 ? " " : null}
            </span>
          ))}
      {rule ? (
        <span
          aria-hidden
          data-rule
          className="mt-5 block h-px w-10 origin-left bg-accent"
        />
      ) : null}
    </Tag>
  );
}
