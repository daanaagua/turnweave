import { z } from "zod";

export const demoRequestSchema = z.object({
  name: z.string().trim().min(2, "Name is required."),
  email: z.string().trim().email("Enter a valid work email."),
  company: z.string().trim().min(2, "Company is required."),
  useCase: z.string().trim().min(10, "Tell us a little more about the use case."),
  timeline: z.string().trim().min(2, "Choose a timeline."),
});

export type DemoRequestInput = z.infer<typeof demoRequestSchema>;
