import { describe, expect, it } from "vitest";
import { createCheckoutSession, getBillingPlans } from "@/lib/billing/creem";

describe("creem placeholder helper", () => {
  it("returns the canonical Turnweave billing plans", () => {
    expect(getBillingPlans().map((plan) => plan.slug)).toEqual([
      "starter",
      "pro",
      "team",
    ]);
  });

  it("exposes a placeholder checkout session payload", async () => {
    await expect(createCheckoutSession("pro")).resolves.toMatchObject({
      provider: "creem",
      status: "placeholder",
      plan: "pro",
    });
  });
});
