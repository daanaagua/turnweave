export const roleplayTrainingScenario = {
  title: "Roleplay & Training",
  slug: "roleplay-training",
  summary:
    "Use Turnweave for sales practice, support rehearsal, interviews, and language drills that benefit from realistic voice interactions.",
  headline: "Practice scenes that feel like the real conversation, not a worksheet.",
  description:
    "The shell makes training feel like a product, with distinct scenes for coaching, rehearsal, and feedback instead of a generic simulator page.",
  outcomes: [
    "Coach response quality in a controlled scene.",
    "Repeat difficult conversations without rebuilding the flow.",
    "Give teams a shared place to practice before live sessions.",
  ],
  flow: [
    "Pick a roleplay scenario.",
    "Follow the scene prompt and constraints.",
    "Review what happened and refine the next run.",
  ],
  notes: [
    "Useful for sales teams, support teams, hiring prep, and language practice.",
    "The scenario catalog can expand without changing the public framing.",
  ],
} as const;

export const roleplayTrainingSections = [
  {
    title: "Training modes",
    items: [
      "Sales objection handling and discovery practice.",
      "Support escalation and calm-response rehearsal.",
      "Interview simulation and language fluency drills.",
    ],
  },
  {
    title: "Why it matters",
    items: [
      "Real conversation pressure reveals gaps faster than a static checklist.",
      "A repeatable scene helps teams build muscle memory.",
      "The same shell can support coaching or assessment.",
    ],
  },
  {
    title: "How it fits",
    items: [
      "Runs alongside website agent experiences.",
      "Can later connect to analytics, scoring, and platform controls.",
      "Keeps the public surface focused on the job, not the implementation.",
    ],
  },
] as const;
