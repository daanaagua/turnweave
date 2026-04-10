import { PlaceholderCard } from "@/components/app/placeholder-card";
import { SectionShell } from "@/components/app/section-shell";

const scenes = [
  "Website FAQ and lead capture",
  "Sales objection handling",
  "Support escalation rehearsal",
  "Interview practice session",
] as const;

export default function ScenesPage() {
  return (
    <div className="space-y-8">
      <section className="max-w-3xl space-y-3">
        <p className="text-xs uppercase tracking-[0.28em] text-accent-warm">
          Scenes
        </p>
        <h1 className="text-4xl font-medium tracking-tight text-ink">
          Roleplay and training sequences with product-shaped language.
        </h1>
        <p className="text-base leading-7 text-muted">
          The scene page gives future operators a place to map practice flows
          without claiming realtime voice is already active.
        </p>
      </section>

      <SectionShell
        title="Scene library"
        description="These are the first shells that a trainer or operator can reason about."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {scenes.map((scene) => (
            <article
              key={scene}
              className="rounded-[24px] border border-line/70 bg-white/5 p-5"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-muted">
                Scenario
              </p>
              <p className="mt-3 text-lg text-ink">{scene}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <PlaceholderCard
        title="Scene editor"
        description="Prompt blocks, evaluation criteria, and scene playback controls will slot in later."
      />
    </div>
  );
}
