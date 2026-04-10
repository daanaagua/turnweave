import Link from "next/link";
import { ArrowRight, AudioLines, ExternalLink, LibraryBig, Waves } from "lucide-react";
import { PageShell } from "@/components/marketing/page-shell";
import { SectionHeading } from "@/components/marketing/section-heading";
import { JsonLd } from "@/components/seo/json-ld";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
} from "@/lib/seo";
import type { TopicPageContent } from "@/content/topics";

type TopicPageProps = {
  page: TopicPageContent;
};

export function TopicPage({ page }: TopicPageProps) {
  const path = `/${page.slug}`;

  return (
    <PageShell className="py-10 md:py-14">
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: page.title, path },
          ]),
          buildArticleSchema({
            headline: page.title,
            description: page.description,
            path,
            datePublished: page.publishedAt,
            dateModified: page.updatedAt,
          }),
          buildFaqSchema(page.faqs),
        ]}
      />

      <section className="section-shell rounded-[2rem] px-6 py-10 md:px-10 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-line/70 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.34em] text-accent-warm">
              <Waves className="size-3.5" />
              {page.eyebrow}
            </div>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
              {page.heroTitle}
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-muted">
              {page.heroDescription}
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-line/70 bg-black/20 p-5">
            <div className="flex items-center gap-2 text-sm text-muted">
              <AudioLines className="size-4 text-accent" />
              {page.panelTitle}
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
              {page.panelItems.map((item) => (
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
            title={page.answerTitle}
            description={page.answerDescription}
          />
          <div className="mt-8 space-y-4 text-sm leading-7 text-muted">
            {page.answerBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>

        <article className="section-shell rounded-[1.5rem] p-6">
          <SectionHeading
            eyebrow="Sources"
            title={page.sourceTitle}
            description={page.sourceDescription}
          />
          <div className="mt-6 flex flex-col gap-3">
            {page.sourceLinks.map((source) => (
              <a
                key={source.href}
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-foreground transition hover:text-accent"
              >
                {source.label}
                <ExternalLink className="size-4" />
              </a>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-16">
        <SectionHeading
          eyebrow="Best fit"
          title={page.fitTitle}
          description={page.fitDescription}
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {page.fitLinks.map((item) => (
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

      <section className="mt-16 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
        <article className="section-shell rounded-[1.5rem] p-6">
          <SectionHeading
            eyebrow="Related reads"
            title={page.relatedTitle}
            description={page.relatedDescription}
          />
          <div className="mt-8 grid gap-4">
            {page.relatedLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-[1.25rem] border border-line/70 bg-black/15 p-5 transition hover:border-accent/40"
              >
                <h2 className="text-lg font-semibold text-foreground">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
              </Link>
            ))}
          </div>
        </article>

        <article className="section-shell rounded-[1.5rem] p-6">
          <SectionHeading
            eyebrow="Cluster logic"
            title="This page is meant to be cited, then followed."
            description="Answer-first structure, source links, visible FAQ, and explicit next routes help both search crawlers and AI systems understand what to quote and where to continue."
          />
          <div className="mt-8 rounded-[1.25rem] border border-line/70 bg-white/5 p-5 text-sm leading-7 text-muted">
            <div className="flex items-center gap-2 font-medium text-foreground">
              <LibraryBig className="size-4 text-accent" />
              Why the cluster exists
            </div>
            <p className="mt-3">
              Searchers often enter through a model name, a category label, or a vendor-versus-vendor
              query. The cluster keeps those routes useful without forcing the product into a news-site
              posture.
            </p>
          </div>
        </article>
      </section>

      <section className="mt-16">
        <SectionHeading
          eyebrow="FAQ"
          title="Visible answers help this page travel better."
          description="Each FAQ is written to answer the search intent plainly, without assuming the reader already knows the surrounding product language."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {page.faqs.map((item) => (
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
