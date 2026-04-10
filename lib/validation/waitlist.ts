import { z } from "zod";

export const waitlistSchema = z.object({
  email: z.string().trim().email("Enter a valid email address."),
  interest: z.string().trim().min(8, "Add a short note about what you want."),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;
