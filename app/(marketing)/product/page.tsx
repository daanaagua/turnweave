import Link from "next/link";
import { ArrowRight, MicVocal, MoveRight, Waypoints } from "lucide-react";
import { PageShell } from "@/components/marketing/page-shell";
import { SectionHeading } from "@/components/marketing/section-heading";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Product",
  description:
    "Turnweave product overview for website agents, roleplay training, and the future platform shell.",
  path: "/product",
});

const layers = [
  {
    title: "Website agents",
    body: "Guided experiences for visitors who want answers, not a maze of forms.",
  },
  {
    title: "Training scenes",
    body: "Roleplay flows for practice, coaching, and repeatable rehearsal.",
  },
  {
    title: "Platform direction",
    body: "Reserved scaffolding for APIs, usage, and operational controls later.",
  },
];

const flow = [
  "A visitor lands on the site and sees a clear voice product.",
  "The page routes them into the right scenario or product page.",
  "The future platform layer can extend the same story without rebranding the shell.",
];

export default function ProductPage() {
  return (
    <PageShell className="py-10 md:py-14">
      <section className="section-shell rounded-[2rem] px-6 py-10 md:px-10 md:py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-line/70 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.34em] text-accent-warm">
              <Waypoints className="size-3.5" />
              Product
            </div>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
              A server-rendered product shell for voice-native website experiences.
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-muted">
              Turnweave presents the product as a calm, credible shell: website agents, roleplay and
              training, plus room for a broader platform as the offering matures.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-black transition hover:translate-y-[-1px] hover:bg-accent/90"
              >
                Pricing
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 rounded-full border border-line/80 bg-white/5 px-5 py-3 text-sm font-medium text-foreground transition hover:border-accent/60 hover:bg-white/10"
              >
                Docs
              </Link>
            </div>
          </div>

          <div className="mesh-card rounded-[1.75rem] p-5 md:p-6">
            <div className="rounded-[1.35rem] border border-line/70 bg-black/25 p-5">
              <div className="flex items-center gap-2 text-sm text-muted">
                <MicVocal className="size-4 text-accent" />
                Product layers
              </div>
              <div className="mt-5 grid gap-3">
                {layers.map((layer) => (
                  <article
                    key={layer.title}
                    className="rounded-2xl border border-line/70 bg-white/5 p-4 transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08]"
                  >
                    <h2 className="text-lg font-semibold text-foreground">{layer.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-muted">{layer.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="section-shell rounded-[1.75rem] p-6 md:p-8">
          <SectionHeading
            eyebrow="How it works"
            title="The shell stays useful even before the full platform arrives."
            description="That means the public site can already explain the product, establish trust, and leave room for expansion."
          />
          <div className="mt-8 space-y-4">
            {flow.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-2xl border border-line/70 bg-black/15 p-4">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line/70 bg-white/5 text-sm font-semibold text-accent">
                  {index + 1}
                </div>
                <p className="pt-1 text-sm leading-6 text-muted">{item}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="section-shell rounded-[1.75rem] p-6 md:p-8">
          <SectionHeading
            eyebrow="Why the tone matters"
            title="Premium, careful, and search-friendly."
            description="The copy speaks plainly about what Turnweave does without locking the brand to one temporary implementation."
          />
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {[
              "Entity language for product discovery",
              "Metadata that supports SEO and GEO",
              "Scenario routes that can be indexed directly",
              "A front-end that feels polished from day one",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-line/70 bg-white/5 p-4 text-sm leading-6 text-muted"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-between rounded-2xl border border-line/70 bg-black/20 px-4 py-4">
            <div>
              <p className="text-sm font-medium text-foreground">Next layer</p>
              <p className="mt-1 text-sm leading-6 text-muted">Pricing and docs are separate routes, not hidden sections.</p>
            </div>
            <MoveRight className="size-5 text-accent" />
          </div>
        </article>
      </section>
    </PageShell>
  );
}
