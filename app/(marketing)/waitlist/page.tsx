import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/marketing/page-shell";
import { SectionHeading } from "@/components/marketing/section-heading";
import { WaitlistForm } from "@/components/forms/waitlist-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Waitlist",
  description:
    "Join the Turnweave waitlist for the early-access dashboard, billing shell, and support routing.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function WaitlistPage() {
  return (
    <PageShell className="py-16 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Early access"
            title="Keep a place in line while the shell gets sharper."
            description="The waitlist is for teams that want the dashboard, billing preview, and support routing as soon as they are ready. We do not claim live billing here yet."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-[28px] border border-line/70 bg-panel/70 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-accent-warm">
                Early surfaces
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">
                Workspace shell, billing placeholder, usage/logs surface, and
                future API hooks.
              </p>
            </article>
            <article className="rounded-[28px] border border-line/70 bg-panel/70 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-accent-warm">
                Support
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">
                Support inbox target:{" "}
                <a
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="text-ink transition hover:text-accent"
                >
                  {siteConfig.supportEmail}
                </a>
                .
              </p>
            </article>
          </div>
          <p className="text-sm leading-6 text-muted">
            If you need the product story first, start with{" "}
            <Link
              href="/book-demo"
              className="text-ink transition hover:text-accent"
            >
              the demo form
            </Link>
            .
          </p>
        </section>
        <section className="rounded-[36px] border border-line/70 bg-panel/85 p-6 shadow-[0_28px_80px_rgba(0,0,0,0.26)]">
          <p className="text-xs uppercase tracking-[0.28em] text-muted">
            Waitlist intake
          </p>
          <h2 className="mt-3 text-2xl font-medium text-ink">
            Tell us which surface matters most.
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            The form records interest when Supabase is configured and otherwise
            keeps the product claim honest.
          </p>
          <div className="mt-6">
            <WaitlistForm />
          </div>
        </section>
      </div>
    </PageShell>
  );
}
