import { PlaceholderCard } from "@/components/app/placeholder-card";
import { SectionShell } from "@/components/app/section-shell";

export default function WorkspacePage() {
  return (
    <div className="space-y-8">
      <section className="max-w-3xl space-y-3">
        <p className="text-xs uppercase tracking-[0.28em] text-accent-warm">
          Workspace
        </p>
        <h1 className="text-4xl font-medium tracking-tight text-ink">
          The operating center for a single Turnweave workspace.
        </h1>
        <p className="text-base leading-7 text-muted">
          This page frames the workspace without pretending a live membership
          system is already wired in.
        </p>
      </section>

      <SectionShell
        title="Workspace details"
        description="A future account owner will see organization details, members, and access notes here."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-[24px] border border-line/70 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-muted">Name</p>
            <p className="mt-3 text-lg text-ink">Turnweave Studio</p>
          </article>
          <article className="rounded-[24px] border border-line/70 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-muted">Owner</p>
            <p className="mt-3 text-lg text-ink">Operations lead</p>
          </article>
          <article className="rounded-[24px] border border-line/70 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-muted">
              Status
            </p>
            <p className="mt-3 text-lg text-ink">Ready for auth wiring</p>
          </article>
        </div>
      </SectionShell>

      <PlaceholderCard
        title="Members and permissions"
        description="Invite, role assignment, and access history will live here once the auth flow is live."
      />
    </div>
  );
}
