import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/marketing/page-shell";
import { SectionHeading } from "@/components/marketing/section-heading";
import { AuthPortalForm } from "@/components/forms/auth-portal-form";

export const metadata: Metadata = {
  title: "Login",
  description: "Preview the Turnweave workspace login shell.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginPage() {
  return (
    <PageShell className="py-16 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Workspace access"
            title="Sign in to the shell you already have."
            description="Login is scaffolded for a future Supabase auth flow. For now, it explains the experience and keeps the product direction credible."
          />
          <div className="rounded-[28px] border border-line/70 bg-panel/70 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-accent-warm">
              Current state
            </p>
            <p className="mt-3 text-sm leading-6 text-muted">
              The app shell, dashboard routes, and billing placeholders are
              ready. The live auth connection will slot in later without
              changing the public surface.
            </p>
            <Link
              href="/app"
              className="mt-5 inline-flex rounded-full border border-line px-4 py-2 text-sm text-ink transition hover:bg-white/5"
            >
              Preview dashboard shell
            </Link>
          </div>
        </section>
        <section className="rounded-[36px] border border-line/70 bg-panel/85 p-6 shadow-[0_28px_80px_rgba(0,0,0,0.26)]">
          <p className="text-xs uppercase tracking-[0.28em] text-muted">
            Sign in
          </p>
          <h2 className="mt-3 text-2xl font-medium text-ink">
            Use the workspace credentials once auth is wired.
          </h2>
          <div className="mt-6">
            <AuthPortalForm mode="login" />
          </div>
        </section>
      </div>
    </PageShell>
  );
}
