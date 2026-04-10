import { PlaceholderCard } from "@/components/app/placeholder-card";
import { SectionShell } from "@/components/app/section-shell";

const agents = [
  {
    name: "Website concierge",
    status: "Preview",
    description: "Guides visitors, captures leads, and routes interested buyers.",
  },
  {
    name: "Roleplay coach",
    status: "Preview",
    description: "Supports sales, support, and interview practice scenarios.",
  },
  {
    name: "Support trainer",
    status: "Preview",
    description: "Frames escalation and response patterns for teams.",
  },
] as const;

export default function AgentsPage() {
  return (
    <div className="space-y-8">
      <section className="max-w-3xl space-y-3">
        <p className="text-xs uppercase tracking-[0.28em] text-accent-warm">
          Agents
        </p>
        <h1 className="text-4xl font-medium tracking-tight text-ink">
          Agent templates and credibility before live voice is ready.
        </h1>
        <p className="text-base leading-7 text-muted">
          The route is shaped like a product console, but it is still honest
          about being a preview.
        </p>
      </section>

      <SectionShell
        title="Template queue"
        description="Each card gives the operator enough context to understand where the product will go."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {agents.map((agent) => (
            <article
              key={agent.name}
              className="rounded-[24px] border border-line/70 bg-white/5 p-5"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-lg font-medium text-ink">{agent.name}</h2>
                <span className="rounded-full border border-line px-3 py-1 text-xs uppercase tracking-[0.24em] text-muted">
                  {agent.status}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted">
                {agent.description}
              </p>
            </article>
          ))}
        </div>
      </SectionShell>

      <PlaceholderCard
        title="Agent build queue"
        description="Configuration, prompts, and evaluation artifacts will land here next."
      />
    </div>
  );
}
