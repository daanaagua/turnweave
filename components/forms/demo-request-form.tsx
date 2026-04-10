"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { demoRequestSchema, type DemoRequestInput } from "@/lib/validation/demo-request";
import { FormField } from "@/components/forms/form-field";

type FormState = {
  status: "idle" | "sending" | "success" | "error";
  message: string;
};

const initialState: FormState = {
  status: "idle",
  message: "We reply manually for now, so this form stays honest about the current workflow.",
};

export function DemoRequestForm() {
  const [state, setState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof DemoRequestInput, string>>>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      useCase: String(formData.get("useCase") ?? ""),
      timeline: String(formData.get("timeline") ?? ""),
    };

    const parsed = demoRequestSchema.safeParse(payload);

    if (!parsed.success) {
      setState({
        status: "error",
        message: "Please correct the fields below.",
      });
      const nextErrors: Partial<Record<keyof DemoRequestInput, string>> = {};
      parsed.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof DemoRequestInput | undefined;
        if (key && !nextErrors[key]) {
          nextErrors[key] = issue.message;
        }
      });
      setErrors(nextErrors);
      return;
    }

    setState({ status: "sending", message: "Sending your request..." });

    try {
      const response = await fetch("/api/demo", {
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
            "We could not save the request yet. Please try again or email suporte@turnweave.com.",
        });
        return;
      }

      event.currentTarget.reset();
      setState({
        status: "success",
        message:
          result.message ??
          "Request received. We will reach out with next steps and a booking link.",
      });
    } catch {
      setState({
        status: "error",
        message:
          "Network error while sending the demo request. Please try again or email suporte@turnweave.com.",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <FormField
          label="Name"
          name="name"
          placeholder="Ari Santos"
          autoComplete="name"
          error={errors.name}
        />
        <FormField
          label="Work email"
          name="email"
          placeholder="ari@turnweave.com"
          autoComplete="email"
          type="email"
          error={errors.email}
        />
      </div>
      <FormField
        label="Company"
        name="company"
        placeholder="Turnweave Studio"
        autoComplete="organization"
        error={errors.company}
      />
      <FormField
        kind="textarea"
        label="Use case"
        name="useCase"
        placeholder="Tell us what the agent should handle and what success looks like."
        error={errors.useCase}
      />
      <div className="grid gap-4 md:grid-cols-[1fr_220px]">
        <FormField
          label="Timeline"
          name="timeline"
          placeholder="This week / this month / later"
          error={errors.timeline}
        />
        <button
          type="submit"
          className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-accent px-5 text-sm font-medium text-black transition hover:bg-accent/90 disabled:cursor-wait disabled:opacity-70"
          disabled={state.status === "sending"}
        >
          {state.status === "sending" ? "Sending..." : "Request demo"}
        </button>
      </div>
      <p className={`text-sm leading-6 ${state.status === "success" ? "text-[#b5f0d4]" : state.status === "error" ? "text-[#f2a6a6]" : "text-muted"}`}>
        {state.message}
      </p>
    </form>
  );
}
