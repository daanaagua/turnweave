import Link from "next/link";
import { PlaceholderCard } from "@/components/app/placeholder-card";
import { SectionShell } from "@/components/app/section-shell";

const docs = [
  "Getting started",
  "Agents and scenes",
  "Conversations",
  "Billing",
  "Platform notes",
] as const;

export default function DocsPreviewPage() {
  return (
    <div className="space-y-8">
      <section className="max-w-3xl space-y-3">
        <p className="text-xs uppercase tracking-[0.28em] text-accent-warm">
          Docs preview
        </p>
        <h1 className="text-4xl font-medium tracking-tight text-ink">
          A future docs surface with a clear first draft.
        </h1>
        <p className="text-base leading-7 text-muted">
          The preview route is a marker for where product docs and platform
          notes will continue growing.
        </p>
      </section>

      <SectionShell
        title="Doc sections"
        description="This mirrors the structure the marketing site can point toward."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {docs.map((doc) => (
            <article
              key={doc}
              className="rounded-[24px] border border-line/70 bg-white/5 p-5"
            >
              <p className="text-sm font-medium text-ink">{doc}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <PlaceholderCard
        title="Docs landing page"
        description="The marketing docs route can point here once the knowledge base is fleshed out."
        ctaHref="/docs"
        ctaLabel="Back to docs"
      />
      <p className="text-sm leading-6 text-muted">
        Want the product story instead?{" "}
        <Link href="/product" className="text-ink transition hover:text-accent">
          See the public product page
        </Link>
        .
      </p>
    </div>
  );
}
