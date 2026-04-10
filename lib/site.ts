const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://turnweave.com";

export const siteConfig = {
  name: "Turnweave",
  shortName: "Turnweave",
  description:
    "Website agents, roleplay training, and a platform-ready shell for voice experiences.",
  url: siteUrl,
  supportEmail: "suporte@turnweave.com",
} as const;

export const marketingNav = [
  { href: "/product", label: "Product" },
  { href: "/scenarios/website-agents", label: "Scenarios" },
  { href: "/pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" },
] as const;

export const appNav = [
  { href: "/app", label: "Overview" },
  { href: "/app/workspace", label: "Workspace" },
  { href: "/app/agents", label: "Agents" },
  { href: "/app/scenes", label: "Scenes" },
  { href: "/app/conversations", label: "Conversations" },
  { href: "/app/billing", label: "Billing" },
  { href: "/app/settings", label: "Settings" },
] as const;
