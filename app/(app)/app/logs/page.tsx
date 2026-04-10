import { PlaceholderCard } from "@/components/app/placeholder-card";

export default function LogsPage() {
  return (
    <div className="space-y-8">
      <section className="max-w-3xl space-y-3">
        <p className="text-xs uppercase tracking-[0.28em] text-accent-warm">
          Logs
        </p>
        <h1 className="text-4xl font-medium tracking-tight text-ink">
          Operational logs and event history.
        </h1>
        <p className="text-base leading-7 text-muted">
          The route is here for future delivery, auth, and product telemetry
          history without pretending the feed already exists.
        </p>
      </section>

      <PlaceholderCard
        title="Log stream placeholder"
        description="Request audit history, webhook traces, and debugging output will be added later."
      />
    </div>
  );
}
