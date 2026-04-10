import { PlaceholderCard } from "@/components/app/placeholder-card";

export default function UsagePage() {
  return (
    <div className="space-y-8">
      <section className="max-w-3xl space-y-3">
        <p className="text-xs uppercase tracking-[0.28em] text-accent-warm">
          Usage
        </p>
        <h1 className="text-4xl font-medium tracking-tight text-ink">
          Usage charts will live here later.
        </h1>
        <p className="text-base leading-7 text-muted">
          This route exists now so product and platform work have a stable home
          when metering is turned on.
        </p>
      </section>

      <PlaceholderCard
        title="Usage meters"
        description="Charts, credits, and activity summaries are placeholders right now."
      />
    </div>
  );
}
