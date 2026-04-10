export const docsIndex = {
  title: "Docs",
  summary:
    "A compact product guide for the public shell, with enough structure to support a real platform later.",
  sections: [
    {
      title: "Getting started",
      body: "Understand how the public pages fit together and where the product surface begins.",
    },
    {
      title: "Product model",
      body: "Learn the difference between website agents, roleplay scenes, and the future platform layer.",
    },
    {
      title: "Scenario guides",
      body: "Follow the pages that describe website agents and training scenes in more detail.",
    },
    {
      title: "Platform direction",
      body: "See how the current shell leaves room for API, usage, and operational controls without overpromising.",
    },
    {
      title: "Model explainers",
      body: "Follow explainer pages for voice models and category terms that shape how buyers search the market.",
    },
  ],
  routes: [
    { href: "/product", label: "Product overview" },
    { href: "/scenarios/website-agents", label: "Website agents" },
    { href: "/scenarios/roleplay-training", label: "Roleplay & training" },
    { href: "/pricing", label: "Pricing" },
    { href: "/seeduplex", label: "Seeduplex explainer" },
  ],
} as const;
