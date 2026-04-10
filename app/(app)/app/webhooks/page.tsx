import { PlaceholderCard } from "@/components/app/placeholder-card";

export default function WebhooksPage() {
  return (
    <div className="space-y-8">
      <section className="max-w-3xl space-y-3">
        <p className="text-xs uppercase tracking-[0.28em] text-accent-warm">
          Webhooks
        </p>
        <h1 className="text-4xl font-medium tracking-tight text-ink">
          Delivery endpoints and event logs will appear here.
        </h1>
        <p className="text-base leading-7 text-muted">
          This surface is intentionally marked as a placeholder rather than a
          live event center.
        </p>
      </section>

      <PlaceholderCard
        title="Webhook management placeholder"
        description="Endpoint registration, signing secrets, and delivery logs are not live yet."
      />
    </div>
  );
}
