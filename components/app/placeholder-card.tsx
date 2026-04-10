import Link from "next/link";

type PlaceholderCardProps = {
  title: string;
  description: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export function PlaceholderCard({
  title,
  description,
  ctaHref,
  ctaLabel,
}: PlaceholderCardProps) {
  return (
    <article className="rounded-[28px] border border-dashed border-line/80 bg-panel/60 p-6">
      <p className="text-xs uppercase tracking-[0.24em] text-muted">Placeholder</p>
      <h3 className="mt-3 text-xl font-medium text-ink">{title}</h3>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">{description}</p>
      {ctaHref && ctaLabel ? (
        <Link
          href={ctaHref}
          className="mt-5 inline-flex rounded-full border border-line px-4 py-2 text-sm text-ink transition hover:bg-white/5"
        >
          {ctaLabel}
        </Link>
      ) : null}
    </article>
  );
}
