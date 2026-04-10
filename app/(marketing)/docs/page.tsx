import Link from "next/link";
import { ArrowRight, BookOpenText, FileText, FolderOpen, Route } from "lucide-react";
import { PageShell } from "@/components/marketing/page-shell";
import { SectionHeading } from "@/components/marketing/section-heading";
import { JsonLd } from "@/components/seo/json-ld";
import { buildBreadcrumbSchema, buildFaqSchema, buildPageMetadata } from "@/lib/seo";
import { docsIndex } from "@/content/docs";

export const metadata = buildPageMetadata({
  title: "AI Voice Agent Docs",
  description:
    "Read Turnweave docs for AI website agents, training scenes, and model-specific explainers such as Seeduplex.",
  path: "/docs",
  keywords: ["ai voice agent docs", "seeduplex explainer", "voice product docs"],
});

const docsFaqs = [
  {
    question: "What do the Turnweave docs cover?",
    answer:
      "The docs explain the product model, scenario routes, pricing context, and model-specific explainers that help visitors understand the category.",
  },
  {
    question: "Why include model explainers like Seeduplex?",
    answer:
      "They capture high-intent search traffic, clarify terminology, and connect model awareness to concrete product workflows.",
  },
] as const;

export default function DocsPage() {
  return (
    <PageShell className="py-10 md:py-14">
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Docs", path: "/docs" },
          ]),
          buildFaqSchema([...docsFaqs]),
        ]}
      />
      <section className="section-shell rounded-[2rem] px-6 py-10 md:px-10 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.84fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-line/70 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.34em] text-accent-warm">
              <BookOpenText className="size-3.5" />
              Docs
            </div>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
              A docs shell that explains the product without overfitting the future.
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-muted">{docsIndex.summary}</p>
          </div>
          <div className="rounded-[1.5rem] border border-line/70 bg-black/20 p-5">
            <div className="flex items-center gap-2 text-sm text-muted">
              <FolderOpen className="size-4 text-accent" />
              Route map
            </div>
            <div className="mt-4 grid gap-3">
              {docsIndex.routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="flex items-center justify-between rounded-2xl border border-line/70 bg-white/5 px-4 py-3 text-sm text-foreground transition hover:border-accent/50 hover:bg-white/[0.08]"
                >
                  {route.label}
                  <ArrowRight className="size-4 text-accent" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-4 md:grid-cols-2">
        {docsIndex.sections.map((section) => (
          <article key={section.title} className="section-shell rounded-[1.5rem] p-6">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full border border-line/70 bg-white/5 text-accent">
                <FileText className="size-5" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
            </div>
            <p className="mt-4 text-sm leading-7 text-muted">{section.body}</p>
          </article>
        ))}
      </section>

      <section className="mt-16">
        <SectionHeading
          eyebrow="Why it exists"
          title="The docs page gives the shell a credible home."
          description="It makes the product easier to understand and easier to extend without hidden assumptions."
        />
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="section-shell rounded-[1.5rem] p-6">
          <div className="flex items-center gap-3">
            <Route className="size-5 text-accent" />
            <h2 className="text-xl font-semibold text-foreground">Searchable product routes</h2>
          </div>
          <p className="mt-4 text-sm leading-7 text-muted">
            Website agents and roleplay training each have their own scenario page so the product can be
            discovered through the job it performs, not just the homepage.
          </p>
        </article>
        <article className="section-shell rounded-[1.5rem] p-6">
          <div className="flex items-center gap-3">
            <BookOpenText className="size-5 text-accent" />
            <h2 className="text-xl font-semibold text-foreground">Platform-ready framing</h2>
          </div>
          <p className="mt-4 text-sm leading-7 text-muted">
            The shell leaves room for future platform pages without claiming a full API surface before it
            exists.
          </p>
        </article>
      </section>

      <section className="mt-16 grid gap-4 md:grid-cols-2">
        {docsFaqs.map((item) => (
          <article key={item.question} className="section-shell rounded-[1.5rem] p-6">
            <h2 className="text-lg font-semibold text-foreground">{item.question}</h2>
            <p className="mt-3 text-sm leading-7 text-muted">{item.answer}</p>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
