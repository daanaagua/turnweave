"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { waitlistSchema, type WaitlistInput } from "@/lib/validation/waitlist";
import { FormField } from "@/components/forms/form-field";

type FormState = {
  status: "idle" | "sending" | "success" | "error";
  message: string;
};

const initialState: FormState = {
  status: "idle",
  message: "This channel is for teams that want early access without pretending billing is live.",
};

export function WaitlistForm() {
  const [state, setState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof WaitlistInput, string>>>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});

    const formData = new FormData(event.currentTarget);
    const payload = {
      email: String(formData.get("email") ?? ""),
      interest: String(formData.get("interest") ?? ""),
    };

    const parsed = waitlistSchema.safeParse(payload);

    if (!parsed.success) {
      setState({
        status: "error",
        message: "Please fix the field below.",
      });
      const nextErrors: Partial<Record<keyof WaitlistInput, string>> = {};
      parsed.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof WaitlistInput | undefined;
        if (key && !nextErrors[key]) {
          nextErrors[key] = issue.message;
        }
      });
      setErrors(nextErrors);
      return;
    }

    setState({ status: "sending", message: "Joining the waitlist..." });

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsed.data),
      });

      const result = (await response.json().catch(() => ({}))) as {
        error?: string;
        message?: string;
      };

      if (!response.ok) {
        setState({
          status: "error",
          message:
            result.error ??
            "We could not save the waitlist entry yet. Please try again or email suporte@turnweave.com.",
        });
        return;
      }

      event.currentTarget.reset();
      setState({
        status: "success",
        message:
          result.message ??
          "You're on the list. We will contact you when access opens.",
      });
    } catch {
      setState({
        status: "error",
        message:
          "Network error while joining the waitlist. Please try again or email suporte@turnweave.com.",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <FormField
        label="Email"
        name="email"
        placeholder="team@turnweave.com"
        autoComplete="email"
        type="email"
        error={errors.email}
      />
      <FormField
        kind="textarea"
        label="What do you want first?"
        name="interest"
        placeholder="Example: billing preview, dashboard access, or support routing."
        error={errors.interest}
      />
      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-5 text-sm font-medium text-black transition hover:bg-accent/90 disabled:cursor-wait disabled:opacity-70"
        disabled={state.status === "sending"}
      >
        {state.status === "sending" ? "Joining..." : "Join waitlist"}
      </button>
      <p className={`text-sm leading-6 ${state.status === "success" ? "text-[#b5f0d4]" : state.status === "error" ? "text-[#f2a6a6]" : "text-muted"}`}>
        {state.message}
      </p>
    </form>
  );
}
