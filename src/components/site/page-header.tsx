import { ReactNode } from "react";

export default function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="max-w-2xl">
      <p className="text-[0.72rem] font-medium tracking-[0.22em] text-accent uppercase">
        {eyebrow}
      </p>
      <h1 className="mt-4 font-serif text-[clamp(2.8rem,6vw,4.6rem)] leading-[0.95] font-medium tracking-[-0.03em]">
        {title}
      </h1>
      {children ? (
        <div className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {children}
        </div>
      ) : null}
    </header>
  );
}
