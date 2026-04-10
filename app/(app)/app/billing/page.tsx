import Link from "next/link";
import { PlaceholderCard } from "@/components/app/placeholder-card";
import { SectionShell } from "@/components/app/section-shell";
import { getBillingPlans } from "@/lib/billing/creem";

export default function BillingPage() {
  const plans = getBillingPlans();

  return (
    <div className="space-y-8">
      <section className="max-w-3xl space-y-3">
        <p className="text-xs uppercase tracking-[0.28em] text-accent-warm">
          Billing center
        </p>
        <h1 className="text-4xl font-medium tracking-tight text-ink">
          Creem is prepared, but the checkout is not live yet.
        </h1>
        <p className="text-base leading-7 text-muted">
          This page stays honest while still looking like a product that will
          support paid plans soon.
        </p>
      </section>

      <SectionShell
        title="Plan previews"
        description="The helper layer provides stable shapes for the future billing integration."
      >
        <div className="grid gap-4 xl:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.slug}
              className="rounded-[24px] border border-line/70 bg-white/5 p-5"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-lg font-medium text-ink">{plan.name}</h2>
                {plan.badge ? (
                  <span className="rounded-full border border-line px-3 py-1 text-xs uppercase tracking-[0.24em] text-muted">
                    {plan.badge}
                  </span>
                ) : null}
              </div>
              <p className="mt-4 text-3xl font-medium text-ink">{plan.price}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-muted">
                {plan.seats}
              </p>
              <p className="mt-4 text-sm leading-6 text-muted">
                {plan.description}
              </p>
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="mt-6 inline-flex h-11 cursor-not-allowed items-center justify-center rounded-full border border-line px-4 text-sm text-muted opacity-70"
              >
                {plan.ctaLabel} (placeholder)
              </button>
            </article>
          ))}
        </div>
      </SectionShell>

      <PlaceholderCard
        title="Invoices and payment method"
        description="Invoice history, payment methods, and live Creem checkout will be connected later."
        ctaHref="/waitlist"
        ctaLabel="Request access"
      />
      <p className="text-sm leading-6 text-muted">
        The billing helper currently returns a placeholder session only.{" "}
        <Link href="/waitlist" className="text-ink transition hover:text-accent">
          Join the waitlist
        </Link>
        if you want to be notified when it becomes active.
      </p>
    </div>
  );
}
