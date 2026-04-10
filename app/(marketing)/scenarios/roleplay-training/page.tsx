import Link from "next/link";
import { ArrowRight, GraduationCap, Speech, WandSparkles } from "lucide-react";
import { PageShell } from "@/components/marketing/page-shell";
import { SectionHeading } from "@/components/marketing/section-heading";
import { JsonLd } from "@/components/seo/json-ld";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildPageMetadata,
  buildSoftwareApplicationSchema,
} from "@/lib/seo";
import { roleplayTrainingScenario, roleplayTrainingSections } from "@/content/scenarios/roleplay-training";

export const metadata = buildPageMetadata({
  title: roleplayTrainingScenario.title,
  description: roleplayTrainingScenario.summary,
  path: "/scenarios/roleplay-training",
  keywords: ["roleplay training", "sales practice", "support training", "voice practice"],
});

const roleplayFaqs = [
  {
    question: "What are roleplay training scenes?",
    answer:
      "They are repeatable conversational scenarios used for coaching, rehearsal, and assessment across sales, support, interviews, and language practice.",
  },
  {
    question: "Who benefits most from voice training scenes?",
    answer:
      "Teams that learn through repetition benefit most, especially when they need practice with objection handling, escalation, fluency, or difficult live conversations.",
  },
] as const;

export default function RoleplayTrainingPage() {
  return (
    <PageShell className="py-10 md:py-14">
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: roleplayTrainingScenario.title, path: "/scenarios/roleplay-training" },
          ]),
          buildSoftwareApplicationSchema({
            name: `${roleplayTrainingScenario.title} | Turnweave`,
            description: roleplayTrainingScenario.summary,
            path: "/scenarios/roleplay-training",
          }),
          buildFaqSchema([...roleplayFaqs]),
        ]}
      />
      <section className="section-shell rounded-[2rem] px-6 py-10 md:px-10 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-line/70 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.34em] text-accent-warm">
              <GraduationCap className="size-3.5" />
              Scenario
            </div>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
              {roleplayTrainingScenario.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-muted">
              {roleplayTrainingScenario.description}
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-line/70 bg-black/20 p-5">
            <div className="flex items-center gap-2 text-sm text-muted">
              <Speech className="size-4 text-accent" />
              Common outcomes
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
              {roleplayTrainingScenario.outcomes.map((item) => (
                <li key={item} className="flex gap-3">
                  <WandSparkles className="mt-1 size-4 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-4 lg:grid-cols-3">
        {roleplayTrainingSections.map((section) => (
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

      <section className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="section-shell rounded-[1.5rem] p-6">
          <SectionHeading
            eyebrow="Scene flow"
            title="A repeatable practice loop for teams and solo learners."
            description="The route keeps the learning loop visible so users can understand what happens before, during, and after the scene."
          />
          <ol className="mt-8 space-y-4">
            {roleplayTrainingScenario.flow.map((item, index) => (
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
            eyebrow="Why it matters"
            title="The same shell can support coaching, rehearsal, and assessment."
            description="That flexibility keeps the scenario useful even as the platform grows into deeper training features."
          />
          <div className="mt-8 space-y-3">
            {roleplayTrainingScenario.notes.map((item) => (
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
          title="Training buyers usually want the use case translated into plain English."
          description="A direct FAQ makes the scenario easier to quote, cite, and understand."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {roleplayFaqs.map((item) => (
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
