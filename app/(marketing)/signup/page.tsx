import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/marketing/page-shell";
import { SectionHeading } from "@/components/marketing/section-heading";
import { AuthPortalForm } from "@/components/forms/auth-portal-form";

export const metadata: Metadata = {
  title: "Signup",
  description: "Preview the Turnweave workspace signup shell.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SignupPage() {
  return (
    <PageShell className="py-16 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Create workspace"
            title="Start from the shell and expand into the platform later."
            description="Signup is a preview surface today. It shows the onboarding shape for a future Supabase-backed workspace without pretending the live account flow is active yet."
          />
          <div className="rounded-[28px] border border-line/70 bg-panel/70 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-accent-warm">
              Early structure
            </p>
            <p className="mt-3 text-sm leading-6 text-muted">
              A workspace, agents, scenes, conversations, and billing center
              are already represented in the dashboard shell.
            </p>
            <Link
              href="/app"
              className="mt-5 inline-flex rounded-full border border-line px-4 py-2 text-sm text-ink transition hover:bg-white/5"
            >
              Enter shell preview
            </Link>
          </div>
        </section>
        <section className="rounded-[36px] border border-line/70 bg-panel/85 p-6 shadow-[0_28px_80px_rgba(0,0,0,0.26)]">
          <p className="text-xs uppercase tracking-[0.28em] text-muted">
            Sign up
          </p>
          <h2 className="mt-3 text-2xl font-medium text-ink">
            Create a workspace identity for the future auth flow.
          </h2>
          <div className="mt-6">
            <AuthPortalForm mode="signup" />
          </div>
        </section>
      </div>
    </PageShell>
  );
}
