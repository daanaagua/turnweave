export type BillingPlanSlug = "starter" | "pro" | "team";

export type BillingPlan = {
  slug: BillingPlanSlug;
  name: string;
  price: string;
  seats: string;
  description: string;
  ctaLabel: string;
  badge?: string;
};

export type CreemCheckoutSession = {
  provider: "creem";
  status: "placeholder";
  plan: BillingPlanSlug;
  checkoutUrl: string | null;
  message: string;
};

const billingPlans: BillingPlan[] = [
  {
    slug: "starter",
    name: "Starter",
    price: "$0",
    seats: "1 workspace",
    description: "A light shell for early evaluation and internal previews.",
    ctaLabel: "Start free",
  },
  {
    slug: "pro",
    name: "Pro",
    price: "$49",
    seats: "3 seats",
    description: "The most credible shell for a small operator team.",
    ctaLabel: "Upgrade soon",
    badge: "Most common",
  },
  {
    slug: "team",
    name: "Team",
    price: "$199",
    seats: "10 seats",
    description: "A workspace for handoffs, reviews, and shared operations.",
    ctaLabel: "Talk to sales",
  },
];

export function getBillingPlans(): BillingPlan[] {
  return billingPlans;
}

export async function createCheckoutSession(
  plan: BillingPlanSlug,
): Promise<CreemCheckoutSession> {
  return {
    provider: "creem",
    status: "placeholder",
    plan,
    checkoutUrl: null,
    message:
      "Creem checkout is not live yet. This placeholder keeps the billing surface ready for activation.",
  };
}
