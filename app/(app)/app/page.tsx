import Link from "next/link";
import { PlaceholderCard } from "@/components/app/placeholder-card";
import { SectionShell } from "@/components/app/section-shell";
import { StatCard } from "@/components/app/stat-card";

const quickLinks = [
  { href: "/app/workspace", label: "Workspace" },
  { href: "/app/agents", label: "Agents" },
  { href: "/app/scenes", label: "Scenes" },
  { href: "/app/conversations", label: "Conversations" },
  { href: "/app/billing", label: "Billing" },
  { href: "/app/settings", label: "Settings" },
] as const;

export default function AppHomePage() {
  return (
    <div className="space-y-8">
      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[36px] border border-line/70 bg-panel/85 p-8 shadow-[0_28px_90px_rgba(0,0,0,0.28)]">
          <p className="text-xs uppercase tracking-[0.28em] text-accent-warm">
            Workspace overview
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            A credible shell for agents, scenes, conversations, and billing.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            This shell is server-rendered and honest about what exists today:
            enough structure for operators to navigate, inspect, and plan the
            next build.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-line px-4 py-2 text-sm text-ink transition hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <PlaceholderCard
          title="Platform-ready surfaces"
          description="Usage, webhooks, logs, and docs preview routes are present so future platform work has a place to land."
          ctaHref="/app/webhooks"
          ctaLabel="See placeholder surfaces"
        />
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Workspaces"
          value="1"
          note="Single workspace shell with room for multi-seat expansion."
        />
        <StatCard
          label="Agents"
          value="3"
          note="Website voice, sales roleplay, and support/training patterns."
        />
        <StatCard
          label="Scenes"
          value="4"
          note="Demo-ready sequences for evaluation and training."
        />
        <StatCard
          label="Billing"
          value="Soon"
          note="Creem is prepared in helper code, but not live in-product yet."
        />
      </section>

      <SectionShell
        eyebrow="Operator notes"
        title="What this shell is ready for"
        description="The current build gives the team a believable control center before the live platform pieces are turned on."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-[24px] border border-line/70 bg-white/5 p-5">
            <p className="text-sm font-medium text-ink">Workspace</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              Workspace details, members, and preferences live here.
            </p>
          </article>
          <article className="rounded-[24px] border border-line/70 bg-white/5 p-5">
            <p className="text-sm font-medium text-ink">Billing center</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              Plan previews, upgrade CTA, and invoices placeholder live here.
            </p>
          </article>
          <article className="rounded-[24px] border border-line/70 bg-white/5 p-5">
            <p className="text-sm font-medium text-ink">Future surfaces</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              Usage, webhooks, logs, and API settings stay visible even before
              they become real.
            </p>
          </article>
        </div>
      </SectionShell>
    </div>
  );
}
