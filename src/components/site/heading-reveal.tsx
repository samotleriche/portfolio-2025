"use client";

import { useLayoutEffect, useRef, useState, type CSSProperties } from "react";

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

type Phase = "load" | "inview" | "await" | "play";

export default function RevealHeading({
  text,
  as: Tag = "h1",
  className,
  by = "word",
  inView = false,
  rule = false,
}: RevealHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [phase, setPhase] = useState<Phase>(inView ? "inview" : "load");
  const lines = text.split("\n");
  const words = text.split(" ");

  useLayoutEffect(() => {
    if (!inView) {
      setPhase("load");
      return;
    }

    const root = ref.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let observer: IntersectionObserver | undefined;

    const play = () => setPhase("play");
    const top = root.getBoundingClientRect().top;

    if (top <= window.innerHeight * 0.92) {
      play();
      return;
    }

    setPhase("await");
    observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        play();
        observer?.disconnect();
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(root);

    return () => observer?.disconnect();
  }, [inView, text]);

  return (
    <Tag
      ref={ref}
      className={className}
      aria-label={text.replace(/\n/g, " ")}
      data-reveal={phase}
      data-by={by}
    >
      {by === "line"
        ? lines.map((line, index) => (
            <span key={`${line}-${index}`} className="block">
              <span
                data-piece
                className="inline-block"
                style={{ "--i": index } as CSSProperties}
              >
                {line}
              </span>
            </span>
          ))
        : words.map((word, index) => (
            <span key={`${word}-${index}`}>
              <span
                data-piece
                className="inline-block"
                style={{ "--i": index } as CSSProperties}
              >
                {word}
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
