import Link from "next/link";
import { ArrowRight, LaptopMinimal, MessageCircleMore, Target } from "lucide-react";
import { PageShell } from "@/components/marketing/page-shell";
import { SectionHeading } from "@/components/marketing/section-heading";
import { JsonLd } from "@/components/seo/json-ld";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildPageMetadata,
  buildSoftwareApplicationSchema,
} from "@/lib/seo";
import { websiteAgentSections, websiteAgentsScenario } from "@/content/scenarios/website-agents";

export const metadata = buildPageMetadata({
  title: websiteAgentsScenario.title,
  description: websiteAgentsScenario.summary,
  path: "/scenarios/website-agents",
  keywords: ["website agents", "lead capture", "voice website", "product discovery"],
});

const websiteAgentFaqs = [
  {
    question: "What is a website agent?",
    answer:
      "A website agent is a conversational layer on a public site that helps answer questions, route intent, and guide visitors toward the next useful action.",
  },
  {
    question: "When do website agents fit best?",
    answer:
      "They fit best on product pages, help centers, campaign landing pages, and booking flows where visitors want guidance before they commit to a form or call.",
  },
] as const;

export default function WebsiteAgentsPage() {
  return (
    <PageShell className="py-10 md:py-14">
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: websiteAgentsScenario.title, path: "/scenarios/website-agents" },
          ]),
          buildSoftwareApplicationSchema({
            name: `${websiteAgentsScenario.title} | Turnweave`,
            description: websiteAgentsScenario.summary,
            path: "/scenarios/website-agents",
          }),
          buildFaqSchema([...websiteAgentFaqs]),
        ]}
      />
      <section className="section-shell rounded-[2rem] px-6 py-10 md:px-10 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-line/70 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.34em] text-accent-warm">
              <LaptopMinimal className="size-3.5" />
              Scenario
            </div>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
              {websiteAgentsScenario.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-muted">
              {websiteAgentsScenario.description}
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-line/70 bg-black/20 p-5">
            <div className="flex items-center gap-2 text-sm text-muted">
              <MessageCircleMore className="size-4 text-accent" />
              Core outcomes
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
              {websiteAgentsScenario.outcomes.map((item) => (
                <li key={item} className="flex gap-3">
                  <Target className="mt-1 size-4 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-4 lg:grid-cols-3">
        {websiteAgentSections.map((section) => (
          <article key={section.title} className="section-shell rounded-[1.5rem] p-6">
            <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
              {section.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="section-shell rounded-[1.5rem] p-6">
          <SectionHeading
            eyebrow="Flow"
            title="The route stays readable from landing page to handoff."
            description="Each step preserves context so the voice experience feels like part of the page, not a separate detour."
          />
          <ol className="mt-8 space-y-4">
            {websiteAgentsScenario.flow.map((item, index) => (
              <li key={item} className="flex gap-4 rounded-2xl border border-line/70 bg-black/15 p-4">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line/70 bg-white/5 text-sm font-semibold text-accent">
                  {index + 1}
                </div>
                <p className="pt-1 text-sm leading-6 text-muted">{item}</p>
              </li>
            ))}
          </ol>
        </article>

        <article className="section-shell rounded-[1.5rem] p-6">
          <SectionHeading
            eyebrow="Notes"
            title="Useful for public sites that need better guidance."
            description="The shell stays specific enough to be useful, while leaving implementation details open."
          />
          <div className="mt-8 space-y-3">
            {websiteAgentsScenario.notes.map((item) => (
              <div key={item} className="rounded-2xl border border-line/70 bg-white/5 p-4 text-sm leading-7 text-muted">
                {item}
              </div>
            ))}
          </div>
          <Link
            href="/product"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-line/80 bg-white/5 px-4 py-2.5 text-sm font-medium text-foreground transition hover:border-accent/60 hover:bg-white/10"
          >
            Back to product
            <ArrowRight className="size-4" />
          </Link>
        </article>
      </section>

      <section className="mt-16">
        <SectionHeading
          eyebrow="FAQ"
          title="The strongest search intent here is practical."
          description="These are the two questions buyers usually ask before they care about implementation detail."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {websiteAgentFaqs.map((item) => (
            <article key={item.question} className="section-shell rounded-[1.5rem] p-6">
              <h2 className="text-lg font-semibold text-foreground">{item.question}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
