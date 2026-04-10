import { PlaceholderCard } from "@/components/app/placeholder-card";
import { SectionShell } from "@/components/app/section-shell";
import { siteConfig } from "@/lib/site";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <section className="max-w-3xl space-y-3">
        <p className="text-xs uppercase tracking-[0.28em] text-accent-warm">
          Settings
        </p>
        <h1 className="text-4xl font-medium tracking-tight text-ink">
          Workspace settings and support routing.
        </h1>
        <p className="text-base leading-7 text-muted">
          This page keeps the shell credible now while leaving room for the
          actual account preferences layer later.
        </p>
      </section>

      <SectionShell
        title="Settings overview"
        description="Basic settings categories are visible so operators know where the platform is headed."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-[24px] border border-line/70 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-muted">
              Profile
            </p>
            <p className="mt-3 text-sm leading-6 text-muted">
              Name, email, and sign-in method will live here.
            </p>
          </article>
          <article className="rounded-[24px] border border-line/70 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-muted">
              Notifications
            </p>
            <p className="mt-3 text-sm leading-6 text-muted">
              Usage alerts and delivery notices will appear later.
            </p>
          </article>
          <article className="rounded-[24px] border border-line/70 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-muted">
              Support
            </p>
            <p className="mt-3 text-sm leading-6 text-muted">
              Support target:{" "}
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
      </SectionShell>

      <PlaceholderCard
        title="Preferences and API settings"
        description="The future settings split can expand into account, API, and workspace tabs without changing the route shape."
      />
    </div>
  );
}
