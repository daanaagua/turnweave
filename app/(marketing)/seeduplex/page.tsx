import Link from "next/link";
import { ArrowRight, AudioLines, ExternalLink, Waves } from "lucide-react";
import { PageShell } from "@/components/marketing/page-shell";
import { SectionHeading } from "@/components/marketing/section-heading";
import { JsonLd } from "@/components/seo/json-ld";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildPageMetadata,
} from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "What Is Seeduplex?",
  description:
    "An independent guide to ByteDance Seeduplex, full-duplex voice AI, and where website agents or voice training products fit around that model category.",
  path: "/seeduplex",
  keywords: [
    "seeduplex",
    "what is seeduplex",
    "full duplex voice ai",
    "bytedance seeduplex",
  ],
});

const seeduplexFaqs = [
  {
    question: "What is Seeduplex?",
    answer:
      "Seeduplex is ByteDance Seed's full-duplex voice AI model category, designed for more natural speech interactions where listening and response handling feel closer to a phone call than a turn-by-turn assistant.",
  },
  {
    question: "Why are people searching for Seeduplex?",
    answer:
      "They usually want to understand full-duplex voice AI, compare it with other real-time voice systems, or find product surfaces that could use that kind of model well.",
  },
  {
    question: "How does Turnweave relate to Seeduplex?",
    answer:
      "Turnweave is an independent product shell and workflow surface. It helps teams think about website agents, training scenes, and public-facing voice workflows around this model category, but it is not affiliated with ByteDance.",
  },
] as const;

const officialSignals = [
  "ByteDance Seed introduced Seeduplex publicly on April 9, 2026.",
  "The model is framed around full-duplex interaction rather than rigid turn-taking.",
  "The core buyer questions are latency, interruption handling, and product fit.",
] as const;

const routeLinks = [
  {
    href: "/scenarios/website-agents",
    title: "Website agents",
    body: "Best when the search intent is product guidance, lead routing, and conversational discovery on a public site.",
  },
  {
    href: "/scenarios/roleplay-training",
    title: "Roleplay and training",
    body: "Best when the search intent is practice, rehearsal, interview prep, or sales and support coaching.",
  },
] as const;

export default function SeeduplexPage() {
  return (
    <PageShell className="py-10 md:py-14">
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Seeduplex", path: "/seeduplex" },
          ]),
          buildArticleSchema({
            headline: "What Is Seeduplex? Full-Duplex Voice AI Explained",
            description:
              "An independent explainer for Seeduplex, full-duplex voice AI, and the product workflows that benefit from it.",
            path: "/seeduplex",
            datePublished: "2026-04-10",
            dateModified: "2026-04-10",
          }),
          buildFaqSchema([...seeduplexFaqs]),
        ]}
      />

      <section className="section-shell rounded-[2rem] px-6 py-10 md:px-10 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-line/70 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.34em] text-accent-warm">
              <Waves className="size-3.5" />
              Model explainer
            </div>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
              What is Seeduplex, and why does full-duplex voice AI matter?
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-muted">
              Seeduplex is the name many buyers now search when they want to understand natural,
              phone-call-like voice interaction. This page gives an independent summary of the term,
              the model category behind it, and the product surfaces that benefit most from that kind
              of voice behavior.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/scenarios/website-agents"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-black transition hover:translate-y-[-1px] hover:bg-accent/90"
              >
                Explore website agents
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/scenarios/roleplay-training"
                className="inline-flex items-center gap-2 rounded-full border border-line/80 bg-white/5 px-5 py-3 text-sm font-medium text-foreground transition hover:border-accent/60 hover:bg-white/10"
              >
                Explore training scenes
              </Link>
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-line/70 bg-black/20 p-5">
            <div className="flex items-center gap-2 text-sm text-muted">
              <AudioLines className="size-4 text-accent" />
              Official signals
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
              {officialSignals.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-4 lg:grid-cols-3">
        <article className="section-shell rounded-[1.5rem] p-6 lg:col-span-2">
          <SectionHeading
            eyebrow="Answer first"
            title="Seeduplex is shorthand for a more natural voice interaction model."
            description="The key idea is not only lower latency. It is better interruption handling, more believable turn control, and a product experience that feels less mechanical."
          />
          <div className="mt-8 space-y-4 text-sm leading-7 text-muted">
            <p>
              Buyers searching for <strong className="text-foreground">Seeduplex</strong> are often
              not looking for research trivia. They are trying to answer a practical question:
              which product surfaces benefit when voice feels less like push-to-talk and more like
              a live conversation.
            </p>
            <p>
              That usually leads to two commercial routes. One is a{" "}
              <strong className="text-foreground">website agent</strong> that can guide intent on a
              public page. The other is a <strong className="text-foreground">training scene</strong>{" "}
              where people rehearse sales, support, interviews, or language practice.
            </p>
          </div>
        </article>

        <article className="section-shell rounded-[1.5rem] p-6">
          <SectionHeading
            eyebrow="Source"
            title="Independent page"
            description="This page is not affiliated with ByteDance. It exists to explain the term and connect it to real product workflows."
          />
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="https://seed.bytedance.com/en/blog/introducing-seed-full-duplex-speech-llm-attentive-listening-robust-interference-suppression-enabling-more-natural-interaction"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground transition hover:text-accent"
            >
              Official ByteDance Seed announcement
              <ExternalLink className="size-4" />
            </a>
            <a
              href="https://seeduplex.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground transition hover:text-accent"
            >
              Market-facing Seeduplex resource
              <ExternalLink className="size-4" />
            </a>
          </div>
        </article>
      </section>

      <section className="mt-16">
        <SectionHeading
          eyebrow="Best fit"
          title="Where Seeduplex-style interest maps into product demand."
          description="These are the two routes most likely to convert model awareness into a real workflow."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {routeLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="section-shell rounded-[1.5rem] p-6 transition duration-300 hover:-translate-y-0.5 hover:border-accent/40"
            >
              <h2 className="text-xl font-semibold text-foreground">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
                Open route
                <ArrowRight className="size-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading
          eyebrow="FAQ"
          title="The search intent around Seeduplex is still mostly educational."
          description="A clear, visible FAQ helps both humans and AI systems understand the page without guessing."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {seeduplexFaqs.map((item) => (
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
