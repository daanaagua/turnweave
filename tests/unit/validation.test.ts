import { describe, expect, it } from "vitest";
import { demoRequestSchema } from "@/lib/validation/demo-request";
import { waitlistSchema } from "@/lib/validation/waitlist";

describe("validation schemas", () => {
  it("accepts a complete demo request", () => {
    const result = demoRequestSchema.safeParse({
      name: "Ari Santos",
      email: "ari@turnweave.com",
      company: "Turnweave Studio",
      useCase: "Website voice agent for lead capture",
      timeline: "This month",
    });

    expect(result.success).toBe(true);
  });

  it("rejects a demo request with an invalid email", () => {
    const result = demoRequestSchema.safeParse({
      name: "Ari Santos",
      email: "not-an-email",
      company: "Turnweave Studio",
      useCase: "Website voice agent for lead capture",
      timeline: "This month",
    });

    expect(result.success).toBe(false);
  });

  it("accepts a waitlist entry", () => {
    const result = waitlistSchema.safeParse({
      email: "ops@turnweave.com",
      interest: "Billing, usage, and webhook placeholders",
    });

    expect(result.success).toBe(true);
  });

  it("rejects a waitlist entry with a short interest field", () => {
    const result = waitlistSchema.safeParse({
      email: "ops@turnweave.com",
      interest: "ok",
    });

    expect(result.success).toBe(false);
  });
});
