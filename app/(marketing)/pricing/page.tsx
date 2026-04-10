import Link from "next/link";
import { ArrowRight, BadgeCheck, Layers3, Sparkles } from "lucide-react";
import { PageShell } from "@/components/marketing/page-shell";
import { SectionHeading } from "@/components/marketing/section-heading";
import { JsonLd } from "@/components/seo/json-ld";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildPageMetadata,
  buildSoftwareApplicationSchema,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "AI Voice Agent Pricing",
  description:
    "See Turnweave pricing structure for AI website agents, voice training workflows, and future platform expansion.",
  path: "/pricing",
  keywords: ["ai voice agent pricing", "voice training pricing", "website agent pricing"],
});

type PricingPlan = {
  name: string;
  price: string;
  copy: string;
  items: string[];
  featured?: boolean;
};

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: "Included",
    copy: "For a single public website experience and a lean launch posture.",
    items: ["Homepage-ready shell", "One scenario route", "Docs and legal pages"],
  },
  {
    name: "Studio",
    price: "Private preview",
    copy: "For teams that want more scenes, richer pages, and operator-friendly structure.",
    items: ["Multiple scenario pages", "Expanded product framing", "Priority support path"],
    featured: true,
  },
  {
    name: "Platform",
    price: "Custom",
    copy: "For future expansion into APIs, usage, and deeper workflow controls.",
    items: ["Reserved platform surface", "Custom rollout planning", "Enterprise alignment"],
  },
];

const pricingFaqs = [
  {
    question: "Are these live self-serve plans?",
    answer:
      "This page presents the pricing structure and product tiers, while the live billing surface stays intentionally conservative.",
  },
  {
    question: "Which plan fits a team evaluating website agents first?",
    answer:
      "Starter is shaped for a narrow launch, while Studio is the better fit for teams that want multiple scenarios and a broader operator surface.",
  },
  {
    question: "Is there room for a larger platform rollout later?",
    answer:
      "Yes. The Platform tier is reserved for future API, usage, and workflow expansion without changing the public framing.",
  },
] as const;

export default function PricingPage() {
  return (
    <PageShell className="py-10 md:py-14">
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ]),
          buildSoftwareApplicationSchema({
            name: "Turnweave Pricing",
            description:
              "Illustrative pricing tiers for website agents, training scenes, and a future platform surface.",
            path: "/pricing",
          }),
          buildFaqSchema([...pricingFaqs]),
        ]}
      />
      <section className="section-shell rounded-[2rem] px-6 py-10 md:px-10 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-line/70 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.34em] text-accent-warm">
              <Layers3 className="size-3.5" />
              Pricing
            </div>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
              Pricing that stays honest while the platform is still taking shape.
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-muted">
              These are public-facing plan shells, not a hard promise about billing mechanics. They show how
              Turnweave can separate a lightweight launch, a team-ready middle tier, and a future platform layer.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-line/70 bg-black/20 p-5">
            <div className="flex items-center gap-2 text-sm text-muted">
              <Sparkles className="size-4 text-accent" />
              Public-facing structure
            </div>
            <p className="mt-3 text-sm leading-6 text-muted">
              If you want to talk through fit or rollout shape, write to{" "}
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className="font-medium text-foreground underline decoration-white/30 underline-offset-4 transition hover:decoration-accent"
              >
                {siteConfig.supportEmail}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-4 xl:grid-cols-3">
        {plans.map((plan) => {
          const isFeatured = plan.featured === true;

          return (
            <article
              key={plan.name}
              className={`rounded-[1.6rem] border p-6 transition duration-300 hover:-translate-y-1 ${
                isFeatured
                  ? "section-shell border-accent/45 bg-[linear-gradient(180deg,rgba(127,185,173,0.08),rgba(255,255,255,0.03))]"
                  : "section-shell border-line/70 bg-white/[0.03]"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  {plan.name}
                </h2>
                {isFeatured ? (
                  <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                    Recommended
                  </span>
                ) : null}
              </div>
              <p className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
                {plan.price}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">{plan.copy}</p>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-muted">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 size-4 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/docs"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-line/80 bg-white/5 px-4 py-2.5 text-sm font-medium text-foreground transition hover:border-accent/60 hover:bg-white/10"
              >
                Learn more
                <ArrowRight className="size-4" />
              </Link>
            </article>
          );
        })}
      </section>

      <section className="mt-16">
        <SectionHeading
          eyebrow="Pricing note"
          title="The page is intentionally cautious."
          description="It supports product discovery without pretending the billing surface is fully activated."
        />
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {pricingFaqs.map((item) => (
          <article key={item.question} className="section-shell rounded-[1.5rem] p-6">
            <h2 className="text-lg font-semibold text-foreground">{item.question}</h2>
            <p className="mt-3 text-sm leading-7 text-muted">{item.answer}</p>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
