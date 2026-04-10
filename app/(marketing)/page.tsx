import Link from "next/link";
import { ArrowRight, MessageSquareText, MicVocal, PanelsTopLeft, Sparkles } from "lucide-react";
import { PageShell } from "@/components/marketing/page-shell";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionHeading } from "@/components/marketing/section-heading";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildPageMetadata,
  buildSoftwareApplicationSchema,
} from "@/lib/seo";
import { scenarioIndex } from "@/content/scenarios";

export const metadata = buildPageMetadata({
  title: "AI Website Agents and Voice Training",
  description:
    "Turnweave is a premium, server-rendered website for AI website agents, voice training scenes, and platform-ready conversational workflows.",
  path: "/",
  keywords: ["ai website agents", "voice training", "conversational ai", "full duplex voice ai"],
});

const pillars = [
  {
    icon: PanelsTopLeft,
    title: "Website Agents",
    body: "A clear front door for product discovery, FAQ handling, and visitor routing.",
  },
  {
    icon: MessageSquareText,
    title: "Roleplay & Training",
    body: "Practice scenes for sales, support, interviews, and language rehearsal.",
  },
  {
    icon: Sparkles,
    title: "Future Platform",
    body: "Reserved space for API, usage, and platform controls as the product expands.",
  },
];

const signals = [
  "Server-rendered public pages",
  "Entity language for SEO and GEO",
  "A product shell that can grow without rewriting the story",
];

const homepageFaqs = [
  {
    question: "What is Turnweave?",
    answer:
      "Turnweave is a voice-native product shell for website agents, training scenes, and platform-ready workflow surfaces.",
  },
  {
    question: "Who is Turnweave for?",
    answer:
      "It is designed for teams that want a polished public site, clear scenario pages, and a structure that can support website guidance or rehearsal workflows.",
  },
  {
    question: "What do website agents help with?",
    answer:
      "Website agents help answer visitor questions, guide discovery, route intent, and create a calmer front door for high-intent traffic.",
  },
  {
    question: "What are training scenes?",
    answer:
      "Training scenes are repeatable roleplay flows for sales, support, interviews, or language practice that benefit from realistic conversation structure.",
  },
] as const;

export default function HomePage() {
  return (
    <div className="pb-20">
      <JsonLd
        data={[
          buildBreadcrumbSchema([{ name: "Home", path: "/" }]),
          buildSoftwareApplicationSchema({
            name: "Turnweave",
            description:
              "Voice-native website agents and training scenes for public-facing product experiences.",
            path: "/",
          }),
          buildFaqSchema([...homepageFaqs]),
        ]}
      />
      <PageShell className="pt-10 md:pt-14">
        <section className="section-shell relative overflow-hidden rounded-[2rem] px-6 py-10 md:px-10 md:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(208,185,150,0.12),transparent_22%),radial-gradient(circle_at_82%_22%,rgba(127,185,173,0.16),transparent_24%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-line/70 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.34em] text-accent-warm">
                <MicVocal className="size-3.5" />
                Turnweave
              </div>
              <h1 className="mt-6 max-w-3xl text-balance text-5xl font-semibold tracking-tight text-foreground md:text-7xl">
                Voice-native website agents and training scenes, shaped like a premium product.
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted md:text-xl">
                Turnweave gives the public surface a calm, editorial-tech voice: website guidance,
                roleplay training, and a platform-ready path that can expand without changing the story.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-black transition hover:translate-y-[-1px] hover:bg-accent/90"
                >
                  View pricing
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/docs"
                  className="inline-flex items-center gap-2 rounded-full border border-line/80 bg-white/5 px-5 py-3 text-sm font-medium text-foreground transition hover:border-accent/60 hover:bg-white/10"
                >
                  Read docs
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {signals.map((signal) => (
                  <span
                    key={signal}
                    className="rounded-full border border-line/70 bg-black/20 px-4 py-2 text-sm text-muted"
                  >
                    {signal}
                  </span>
                ))}
              </div>
            </div>

            <div className="mesh-card relative overflow-hidden rounded-[1.75rem] p-5 md:p-6">
              <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.08),transparent_36%),radial-gradient(circle_at_top,rgba(127,185,173,0.16),transparent_34%)]" />
              <div className="relative grid gap-4">
                {[
                  {
                    title: "Website Agent",
                    copy: "Guide, answer, and route without losing the page.",
                  },
                  {
                    title: "Roleplay Scene",
                    copy: "Practice difficult conversations in a repeatable environment.",
                  },
                  {
                    title: "Platform Layer",
                    copy: "Reserved space for usage, API, and operator controls.",
                  },
                ].map((item, index) => (
                  <article
                    key={item.title}
                    className={`section-shell rounded-[1.4rem] p-4 transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.05] ${
                      index % 2 === 0 ? "md:translate-x-0" : "md:translate-x-2"
                    }`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-warm">
                      Scene {index + 1}
                    </p>
                    <h2 className="mt-3 text-xl font-semibold text-foreground">{item.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-muted">{item.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </PageShell>

      <PageShell className="mt-16">
        <SectionHeading
          eyebrow="Three pillars"
          title="The public slice is built around three clear jobs."
          description="Each page explains one part of the product without pretending the shell is something else."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article key={pillar.title} className="section-shell rounded-[1.5rem] p-6">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full border border-line/70 bg-white/5 text-accent">
                    <Icon className="size-5" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-warm">
                    Pillar
                  </p>
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-foreground">{pillar.title}</h2>
                <p className="mt-3 text-base leading-7 text-muted">{pillar.body}</p>
              </article>
            );
          })}
        </div>
      </PageShell>

      <PageShell className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="section-shell rounded-[1.75rem] p-6 md:p-8">
          <SectionHeading
            eyebrow="Routes"
            title="Scenario pages make the product searchable and specific."
            description="They give each use case a clear entity name, a focused summary, and a route that can stand on its own."
          />
          <div className="mt-8 grid gap-3">
            {scenarioIndex.map((scenario) => (
              <Link
                key={scenario.slug}
                href={`/scenarios/${scenario.slug}`}
                className="group flex items-center justify-between rounded-2xl border border-line/70 bg-black/15 px-4 py-4 transition hover:border-accent/50 hover:bg-white/[0.05]"
              >
                <div>
                  <p className="text-lg font-semibold text-foreground">{scenario.title}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">{scenario.summary}</p>
                </div>
                <ArrowRight className="size-4 text-accent transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </article>

        <article className="section-shell rounded-[1.75rem] p-6 md:p-8">
          <SectionHeading
            eyebrow="Product feel"
            title="Dark, premium, and editorial, but still practical."
            description="The shell keeps the tone warm and focused while staying readable on mobile and in search previews."
          />
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {[
              "Strong entity language for SEO and GEO",
              "Public copy that stays product-forward",
              "Server-rendered pages with stable metadata",
              "A future platform surface that can grow later",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-line/70 bg-white/5 p-4 text-sm leading-6 text-muted"
              >
                {item}
              </div>
            ))}
          </div>
        </article>
      </PageShell>

      <PageShell className="mt-16">
        <section className="section-shell rounded-[1.75rem] px-6 py-8 md:px-8 md:py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-accent-warm">Next step</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Explore the product, then choose the route that fits.
              </h2>
              <p className="mt-4 text-base leading-7 text-muted">
                The public slice stays honest: product, pricing, docs, scenarios, and legal all have their
                own page so search, navigation, and expansion stay clean.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/product"
                className="inline-flex items-center gap-2 rounded-full border border-line/80 bg-white/5 px-5 py-3 text-sm font-medium text-foreground transition hover:border-accent/60 hover:bg-white/10"
              >
                Product
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-black transition hover:translate-y-[-1px] hover:bg-accent/90"
              >
                Docs
              </Link>
            </div>
          </div>
        </section>
      </PageShell>

      <PageShell className="mt-16">
        <section className="section-shell rounded-[1.75rem] px-6 py-8 md:px-8 md:py-10">
          <SectionHeading
            eyebrow="FAQ"
            title="The public story should answer the first four questions quickly."
            description="These answers exist for visitors, search engines, and AI systems that need a direct summary of what the product is and where it fits."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {homepageFaqs.map((item) => (
              <article
                key={item.question}
                className="rounded-[1.35rem] border border-line/70 bg-white/5 p-5"
              >
                <h2 className="text-lg font-semibold text-foreground">{item.question}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </PageShell>
    </div>
  );
}
