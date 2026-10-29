import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Writing" },
  { href: "/experiments", label: "Lab" },
  { href: "/now", label: "Now" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="w-section flex flex-col gap-10 py-12 md:flex-row md:items-end md:justify-between">
        <div className="max-w-sm">
          <p className="font-serif text-2xl tracking-tight">{site.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {site.role} at {site.company}. {site.location}.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted transition-colors hover:text-ink"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-muted transition-colors hover:text-ink"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${site.email}`}
            className="text-muted transition-colors hover:text-ink"
          >
            Email
          </a>
          <a
            href="/feed.xml"
            className="text-muted transition-colors hover:text-ink"
          >
            RSS
          </a>
        </div>
      </div>
      <div className="w-section border-t border-line py-5 text-xs text-faint">
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );
}
