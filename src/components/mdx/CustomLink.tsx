import Link from "next/link";

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function CustomLink({
  href,
  children,
  className = "",
}: CustomLinkProps) {
  // Check if it's an internal link
  const isInternalLink = href.startsWith("/") || href.startsWith("#");

  if (isInternalLink) {
    return (
      <Link
        href={href}
        className={`text-violet-400 hover:text-violet-300 transition-colors ${className}`}
      >
        {children}
      </Link>
    );
  }

  // External link
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-violet-400 hover:text-violet-300 transition-colors ${className}`}
    >
      {children}
    </a>
  );
}
