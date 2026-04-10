import type { ReactNode } from "react";

type SectionShellProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function SectionShell({
  eyebrow,
  title,
  description,
  children,
}: SectionShellProps) {
  return (
    <section className="rounded-[32px] border border-line/70 bg-panel/70 p-6 shadow-[0_18px_70px_rgba(0,0,0,0.22)]">
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.28em] text-accent-warm">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-3 text-2xl font-medium text-ink">{title}</h2>
        {description ? (
          <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
        ) : null}
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}
