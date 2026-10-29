"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import TLLogo from "./icons/TLLogo";
import ThemeToggle from "./theme-toggle";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Writing" },
  { href: "/experiments", label: "Lab" },
];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar({
  initialTheme,
}: {
  initialTheme: "dark" | "light";
}) {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  return (
    <header className="fixed inset-x-0 top-0 z-40 h-[var(--h-navbar)] border-b border-line bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          aria-label="Home"
          className="text-ink"
          onClick={() => setOpenPath(null)}
        >
          <TLLogo className="size-7" />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "relative text-sm transition-colors",
                  active ? "text-ink" : "text-muted hover:text-ink"
                )}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
                {active ? (
                  <span className="absolute -bottom-2 left-0 h-px w-full bg-accent" />
                ) : null}
              </Link>
            );
          })}
          <ThemeToggle initialTheme={initialTheme} />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle initialTheme={initialTheme} />
          <button
            type="button"
            className="grid size-9 place-items-center rounded-full border border-line text-ink"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-b border-line bg-bg md:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpenPath(null)}
                className={clsx(
                  "rounded-xl px-3 py-3 font-serif text-3xl tracking-tight",
                  isActive(pathname, link.href) ? "text-ink" : "text-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
