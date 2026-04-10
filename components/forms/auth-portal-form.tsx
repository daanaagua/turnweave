"use client";

import Link from "next/link";
import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import { FormField } from "@/components/forms/form-field";

type AuthMode = "login" | "signup";

type AuthPortalFormProps = {
  mode: AuthMode;
};

export function AuthPortalForm({ mode }: AuthPortalFormProps) {
  const [message, setMessage] = useState(
    mode === "login"
      ? "Workspace auth is scaffolded, but the live Supabase session flow is not wired yet."
      : "Create a workspace shell now. We will connect the real signup flow later.",
  );

  const buttonLabel = useMemo(
    () => (mode === "login" ? "Open dashboard preview" : "Create workspace"),
    [mode],
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(
      mode === "login"
        ? "Login is a preview surface for now. Use the dashboard shell below."
        : "Signup is a preview surface for now. Use the dashboard shell below.",
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      {mode === "signup" ? (
        <FormField
          label="Name"
          name="name"
          placeholder="Ari Santos"
          autoComplete="name"
        />
      ) : null}
      <FormField
        label="Email"
        name="email"
        placeholder="team@turnweave.com"
        autoComplete="email"
        type="email"
      />
      {mode === "login" ? (
        <FormField
          label="Password"
          name="password"
          type="password"
          placeholder="password"
          autoComplete="current-password"
        />
      ) : (
        <FormField
          label="Workspace goal"
          name="goal"
          placeholder="One line about what this workspace will do first."
        />
      )}
      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-5 text-sm font-medium text-black transition hover:bg-accent/90"
      >
        {buttonLabel}
      </button>
      <p className="text-sm leading-6 text-muted">{message}</p>
      <p className="text-sm leading-6 text-muted">
        {mode === "login" ? (
          <>
            No live auth yet?{" "}
            <Link href="/signup" className="text-ink transition hover:text-accent">
              Request workspace access
            </Link>
          </>
        ) : (
          <>
            Already have access?{" "}
            <Link href="/login" className="text-ink transition hover:text-accent">
              Sign in
            </Link>
          </>
        )}
      </p>
    </form>
  );
}
