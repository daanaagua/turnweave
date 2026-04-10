import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/marketing/page-shell";
import { SectionHeading } from "@/components/marketing/section-heading";
import { DemoRequestForm } from "@/components/forms/demo-request-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a demo",
  description:
    "Request a Turnweave demo for website agents, roleplay training, or the future platform shell.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BookDemoPage() {
  return (
    <PageShell className="py-16 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Request a demo"
            title="Walk through the product shell before you ask for live rollout."
            description="We keep this honest: the demo route captures interest for website voice agents, roleplay training, and the future billing/platform surface. Live voice infrastructure is not claimed here yet."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-[28px] border border-line/70 bg-panel/70 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-accent-warm">
                You will see
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">
                A product walkthrough, lead capture flow, and the dashboard
                surfaces that are already credible today.
              </p>
            </article>
            <article className="rounded-[28px] border border-line/70 bg-panel/70 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-accent-warm">
                What is not live
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">
                No live voice transport and no live Creem checkout yet.
              </p>
            </article>
          </div>
          <p className="text-sm leading-6 text-muted">
            Need to talk to a person sooner? Email{" "}
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="text-ink transition hover:text-accent"
            >
              {siteConfig.supportEmail}
            </a>
            .
          </p>
        </section>
        <section className="rounded-[36px] border border-line/70 bg-panel/85 p-6 shadow-[0_28px_80px_rgba(0,0,0,0.26)]">
          <p className="text-xs uppercase tracking-[0.28em] text-muted">
            Demo intake
          </p>
          <h2 className="mt-3 text-2xl font-medium text-ink">
            Tell us the first workflow you want to shape.
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            This form writes to Supabase when configured. Until then it stays
            transparent about the placeholder state.
          </p>
          <div className="mt-6">
            <DemoRequestForm />
          </div>
          <p className="mt-6 text-sm leading-6 text-muted">
            Prefer a lighter first step?{" "}
            <Link
              href="/waitlist"
              className="text-ink transition hover:text-accent"
            >
              Join the waitlist instead
            </Link>
            .
          </p>
        </section>
      </div>
    </PageShell>
  );
}
