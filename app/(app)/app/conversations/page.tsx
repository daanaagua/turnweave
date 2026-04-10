import { PlaceholderCard } from "@/components/app/placeholder-card";
import { SectionShell } from "@/components/app/section-shell";

const conversations = [
  {
    title: "Website lead",
    detail: "Lead captured, follow-up requested, routed to sales.",
  },
  {
    title: "Roleplay session",
    detail: "Training run with feedback notes and scorecard placeholders.",
  },
  {
    title: "Support rehearsal",
    detail: "Escalation path drafted but not connected to live voice yet.",
  },
] as const;

export default function ConversationsPage() {
  return (
    <div className="space-y-8">
      <section className="max-w-3xl space-y-3">
        <p className="text-xs uppercase tracking-[0.28em] text-accent-warm">
          Conversations
        </p>
        <h1 className="text-4xl font-medium tracking-tight text-ink">
          Conversation history with enough structure to feel real.
        </h1>
        <p className="text-base leading-7 text-muted">
          This surface is ready for history, notes, and outcome tracking once
          the platform layer arrives.
        </p>
      </section>

      <SectionShell
        title="Recent conversations"
        description="The layout is ready for a future table and detail drawer."
      >
        <div className="grid gap-4">
          {conversations.map((conversation) => (
            <article
              key={conversation.title}
              className="rounded-[24px] border border-line/70 bg-white/5 p-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h2 className="text-lg font-medium text-ink">
                  {conversation.title}
                </h2>
                <span className="rounded-full border border-line px-3 py-1 text-xs uppercase tracking-[0.24em] text-muted">
                  Shell
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted">
                {conversation.detail}
              </p>
            </article>
          ))}
        </div>
      </SectionShell>

      <PlaceholderCard
        title="Conversation detail drawer"
        description="Transcript, metadata, and evaluation notes will live in a richer view later."
      />
    </div>
  );
}
