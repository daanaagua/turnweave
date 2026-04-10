# Turnweave Shell Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the first production-ready Turnweave shell site with SSR marketing pages, auth-backed dashboard shell, SEO/GEO foundations, Cloudflare deployment, and billing/email integration placeholders.

**Architecture:** Use a Next.js App Router application configured for Cloudflare Workers so all public pages render server-side and the dashboard shell can mix server-rendered shells with light client interactivity. Persist users, workspaces, demo requests, and waitlist entries in Supabase; keep billing and API platform surfaces as honest placeholders with stable routes and types for later activation.

**Tech Stack:** Next.js, TypeScript, Tailwind CSS, shadcn/ui, Supabase, Zod, Cloudflare Workers, Wrangler, Vitest, Playwright

---

## File Map

- `package.json`: scripts, dependencies, quality gates
- `wrangler.jsonc`: Cloudflare Worker config for the Next.js deployment
- `next.config.ts`: Next.js configuration
- `app/layout.tsx`: root layout, fonts, metadata defaults, theme shell
- `app/globals.css`: design tokens and global styles
- `app/(marketing)/*`: SSR public pages
- `app/(app)/*`: authenticated dashboard shell pages
- `app/api/demo/route.ts`: demo booking submission endpoint
- `app/api/waitlist/route.ts`: waitlist submission endpoint
- `app/api/auth/callback/route.ts`: Supabase auth callback
- `components/marketing/*`: homepage and public site sections
- `components/app/*`: dashboard navigation and shell widgets
- `components/forms/*`: SSR-friendly forms with client validation wrappers
- `lib/site.ts`: site config, nav config, product copy
- `lib/seo.ts`: metadata builders and JSON-LD helpers
- `lib/supabase/*`: clients for server and browser usage
- `lib/billing/creem.ts`: typed billing placeholder surface
- `lib/validation/*`: Zod schemas for forms and settings
- `content/docs/*`: MDX docs content
- `content/scenarios/*`: scenario page content
- `tests/unit/*`: helper and validation tests
- `tests/e2e/*`: route smoke tests
- `docs/ops/zoho-turnweave-alias.md`: Zoho alias/forward runbook
- `docs/ops/cloudflare-deploy.md`: Cloudflare deploy runbook
- `.env.example`: required environment variables

## Task 1: Bootstrap the Cloudflare-compatible Next.js app

**Files:**
- Create: `package.json`
- Create: `wrangler.jsonc`
- Create: `next.config.ts`
- Create: `vitest.config.ts`
- Create: `playwright.config.ts`
- Create: `.env.example`
- Test: `tests/unit/smoke.test.ts`

- [ ] **Step 1: Write the failing smoke test**

```ts
// tests/unit/smoke.test.ts
import { describe, expect, it } from "vitest";
import { siteConfig } from "@/lib/site";

describe("siteConfig", () => {
  it("uses the Turnweave production domain", () => {
    expect(siteConfig.url).toBe("https://turnweave.com");
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run:

```bash
npm run test:unit -- --run tests/unit/smoke.test.ts
```

Expected: FAIL because `package.json`, `vitest`, and `lib/site.ts` do not exist yet.

- [ ] **Step 3: Create the project scaffold and core config**

```json
// package.json
{
  "name": "turnweave",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit",
    "test:unit": "vitest",
    "test:e2e": "playwright test",
    "check": "npm run lint && npm run typecheck && npm run test:unit -- --run"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.10.0",
    "@radix-ui/react-slot": "^1.1.2",
    "@supabase/ssr": "^0.5.2",
    "@supabase/supabase-js": "^2.50.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.511.0",
    "next": "^16.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-hook-form": "^7.56.4",
    "tailwind-merge": "^3.3.0",
    "zod": "^3.24.4"
  },
  "devDependencies": {
    "@opennextjs/cloudflare": "^1.17.1",
    "@playwright/test": "^1.54.2",
    "@types/node": "^24.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "eslint": "^9.30.0",
    "eslint-config-next": "^16.0.0",
    "tailwindcss": "^4.1.0",
    "typescript": "^5.8.3",
    "vitest": "^3.2.4",
    "wrangler": "^4.26.0"
  }
}
```

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "mdx"],
};

export default nextConfig;
```

```jsonc
// wrangler.jsonc
{
  "name": "turnweave",
  "main": ".open-next/worker.js",
  "compatibility_date": "2026-04-10",
  "compatibility_flags": ["nodejs_compat"],
  "assets": {
    "binding": "ASSETS",
    "directory": ".open-next/assets"
  },
  "observability": {
    "enabled": true
  }
}
```

```ts
// vitest.config.ts
import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  test: {
    environment: "node",
    include: ["tests/unit/**/*.test.ts"]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, ".")
    }
  }
});
```

```ts
// playwright.config.ts
import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "tests/e2e",
  use: {
    baseURL: "http://127.0.0.1:3000"
  },
  webServer: {
    command: "npm run dev",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: true
  }
});
```

```env
# .env.example
NEXT_PUBLIC_SITE_URL=https://turnweave.com
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

- [ ] **Step 4: Add the minimal site config needed for the test**

```ts
// lib/site.ts
export const siteConfig = {
  name: "Turnweave",
  description: "Real-time voice experiences for websites, teams, and interactive scenes.",
  url: "https://turnweave.com"
} as const;
```

- [ ] **Step 5: Run the checks and commit**

Run:

```bash
npm install
npm run test:unit -- --run tests/unit/smoke.test.ts
npm run lint
npm run typecheck
git add package.json wrangler.jsonc next.config.ts vitest.config.ts playwright.config.ts .env.example lib/site.ts tests/unit/smoke.test.ts
git commit -m "chore: bootstrap turnweave app scaffold"
```

Expected: unit test PASS, lint PASS, typecheck PASS.

## Task 2: Build the global shell, design tokens, and route groups

**Files:**
- Create: `app/layout.tsx`
- Create: `app/globals.css`
- Create: `app/(marketing)/layout.tsx`
- Create: `app/(app)/layout.tsx`
- Create: `components/marketing/site-header.tsx`
- Create: `components/marketing/site-footer.tsx`
- Create: `components/app/app-sidebar.tsx`
- Create: `components/app/app-header.tsx`
- Test: `tests/e2e/navigation.spec.ts`

- [ ] **Step 1: Write the failing route smoke test**

```ts
// tests/e2e/navigation.spec.ts
import { test, expect } from "@playwright/test";

test("marketing and app shells render key navigation", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: "Product" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Pricing" })).toBeVisible();
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run:

```bash
npm run test:e2e -- tests/e2e/navigation.spec.ts
```

Expected: FAIL because `/` and layout files do not exist.

- [ ] **Step 3: Create the root and marketing layouts**

```tsx
// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

```tsx
// app/(marketing)/layout.tsx
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
```

```tsx
// components/marketing/site-header.tsx
import Link from "next/link";

const links = [
  { href: "/product", label: "Product" },
  { href: "/scenarios/website-agents", label: "Scenarios" },
  { href: "/pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" }
];

export function SiteHeader() {
  return (
    <header className="border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-[0.18em] uppercase">
          Turnweave
        </Link>
        <nav className="flex gap-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
```

- [ ] **Step 4: Create the app layout and global styling**

```tsx
// app/(app)/layout.tsx
import { AppHeader } from "@/components/app/app-header";
import { AppSidebar } from "@/components/app/app-sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-[260px_1fr]">
        <AppSidebar />
        <div className="border-l border-white/10">
          <AppHeader />
          <main className="p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
```

```tsx
// components/marketing/site-footer.tsx
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-white/60">
        <p>© {new Date().getFullYear()} Turnweave</p>
        <div className="flex gap-4">
          <Link href="/legal/privacy">Privacy</Link>
          <Link href="/legal/terms">Terms</Link>
          <Link href="/book-demo">Book demo</Link>
        </div>
      </div>
    </footer>
  );
}
```

```tsx
// components/app/app-sidebar.tsx
import Link from "next/link";

const appLinks = [
  { href: "/app", label: "Overview" },
  { href: "/app/agents", label: "Agents" },
  { href: "/app/scenes", label: "Scenes" },
  { href: "/app/conversations", label: "Conversations" },
  { href: "/app/billing", label: "Billing" }
];

export function AppSidebar() {
  return (
    <aside className="p-6">
      <Link href="/app" className="font-semibold tracking-[0.18em] uppercase">
        Turnweave
      </Link>
      <nav className="mt-8 grid gap-2">
        {appLinks.map((link) => (
          <Link key={link.href} href={link.href} className="rounded-2xl px-3 py-2 hover:bg-white/5">
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
```

```tsx
// components/app/app-header.tsx
export function AppHeader() {
  return (
    <header className="border-b border-white/10 px-8 py-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-white/50">Workspace</p>
          <p className="text-lg font-medium">Turnweave Studio</p>
        </div>
        <button className="rounded-full border border-white/15 px-4 py-2 text-sm">
          Invite teammate
        </button>
      </div>
    </header>
  );
}
```

```css
/* app/globals.css */
@import "tailwindcss";

:root {
  --canvas: #0d1016;
  --canvas-elevated: #151a22;
  --ink: #edf1f7;
  --muted: #99a4b3;
  --accent: #7fb9ad;
  --accent-warm: #c8b38f;
  --line: rgba(255, 255, 255, 0.1);
}

body {
  background: radial-gradient(circle at top, rgba(127, 185, 173, 0.16), transparent 30%), var(--canvas);
  color: var(--ink);
}

.bg-canvas { background-color: var(--canvas); }
.text-ink { color: var(--ink); }
```

- [ ] **Step 5: Run the smoke test and commit**

Run:

```bash
npm run test:e2e -- tests/e2e/navigation.spec.ts
git add app/layout.tsx app/globals.css "app/(marketing)/layout.tsx" "app/(app)/layout.tsx" components/marketing/site-header.tsx components/marketing/site-footer.tsx components/app/app-sidebar.tsx components/app/app-header.tsx tests/e2e/navigation.spec.ts
git commit -m "feat: add global turnweave shells"
```

Expected: Playwright PASS after the homepage exists in Task 3; if it still fails here, pause and finish Task 3 before committing both tasks together.

## Task 3: Ship the SSR marketing pages and docs shell

**Files:**
- Create: `app/(marketing)/page.tsx`
- Create: `app/(marketing)/product/page.tsx`
- Create: `app/(marketing)/pricing/page.tsx`
- Create: `app/(marketing)/book-demo/page.tsx`
- Create: `app/(marketing)/waitlist/page.tsx`
- Create: `app/(marketing)/docs/page.tsx`
- Create: `app/(marketing)/scenarios/website-agents/page.tsx`
- Create: `app/(marketing)/scenarios/roleplay-training/page.tsx`
- Create: `app/(marketing)/legal/privacy/page.tsx`
- Create: `app/(marketing)/legal/terms/page.tsx`
- Create: `components/marketing/hero.tsx`
- Create: `components/marketing/product-pillars.tsx`
- Create: `components/marketing/product-preview.tsx`
- Create: `content/docs/getting-started.mdx`
- Create: `content/scenarios/website-agents.ts`
- Test: `tests/e2e/marketing-pages.spec.ts`

- [ ] **Step 1: Write the failing marketing-page smoke tests**

```ts
// tests/e2e/marketing-pages.spec.ts
import { test, expect } from "@playwright/test";

test("homepage explains website agents and roleplay", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Website Agents")).toBeVisible();
  await expect(page.getByText("Roleplay & Training")).toBeVisible();
  await expect(page.getByRole("link", { name: "Create workspace" })).toBeVisible();
});

test("pricing page renders plan cards", async ({ page }) => {
  await page.goto("/pricing");
  await expect(page.getByText("Starter")).toBeVisible();
  await expect(page.getByText("Team")).toBeVisible();
});
```

- [ ] **Step 2: Run the tests to verify they fail**

Run:

```bash
npm run test:e2e -- tests/e2e/marketing-pages.spec.ts
```

Expected: FAIL because the public pages do not exist.

- [ ] **Step 3: Implement the homepage and public routes as server components**

```tsx
// app/(marketing)/page.tsx
import Link from "next/link";
import { Hero } from "@/components/marketing/hero";
import { ProductPillars } from "@/components/marketing/product-pillars";
import { ProductPreview } from "@/components/marketing/product-preview";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <Hero />
      <ProductPillars />
      <ProductPreview />
      <section className="grid gap-6 py-16 md:grid-cols-2">
        <article className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold">Website Agents</h2>
          <p className="mt-3 text-white/70">
            Guide visitors, answer questions, capture leads, and route qualified conversations.
          </p>
          <Link href="/scenarios/website-agents" className="mt-6 inline-flex">
            Explore scenario
          </Link>
        </article>
        <article className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold">Roleplay &amp; Training</h2>
          <p className="mt-3 text-white/70">
            Launch practice scenes for sales, support, interviews, and language workflows.
          </p>
          <Link href="/scenarios/roleplay-training" className="mt-6 inline-flex">
            Explore scenario
          </Link>
        </article>
      </section>
    </div>
  );
}
```

```tsx
// components/marketing/hero.tsx
import Link from "next/link";

export function Hero() {
  return (
    <section className="grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
      <div>
        <p className="text-sm uppercase tracking-[0.28em] text-[var(--accent-warm)]">Turnweave</p>
        <h1 className="mt-4 text-5xl font-semibold leading-tight">
          Real-time voice experiences for websites, teams, and interactive scenes.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/70">
          Launch a polished product shell for website agents, roleplay workflows, and platform-ready operations.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/signup" className="rounded-full bg-[var(--accent)] px-5 py-3 text-black">
            Create workspace
          </Link>
          <Link href="/book-demo" className="rounded-full border border-white/15 px-5 py-3">
            Book demo
          </Link>
        </div>
      </div>
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
        <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
          <p className="text-sm text-white/60">Live preview</p>
          <div className="mt-4 grid gap-3">
            <div className="rounded-2xl bg-white/5 p-4">Agent: Turnweave Site Concierge</div>
            <div className="rounded-2xl bg-white/5 p-4">Scene: Sales Objection Handling</div>
            <div className="rounded-2xl bg-white/5 p-4">Billing: Platform-ready plan shells</div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Implement pricing, docs, legal, and scenario pages**

```tsx
// app/(marketing)/pricing/page.tsx
const plans = [
  { name: "Starter", price: "$0", description: "Public site + single workspace shell." },
  { name: "Pro", price: "$49", description: "Expanded workspace, more scenes, billing center shell." },
  { name: "Team", price: "$199", description: "Multi-seat planning surface for operators and teams." }
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-semibold">Pricing</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <article key={plan.name} className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">{plan.name}</h2>
            <p className="mt-3 text-3xl">{plan.price}</p>
            <p className="mt-4 text-white/70">{plan.description}</p>
            <button className="mt-8 rounded-full border border-white/15 px-4 py-2">
              Pay with Creem (soon)
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
```

```tsx
// app/(marketing)/docs/page.tsx
export default function DocsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-4xl font-semibold">Docs</h1>
      <p className="mt-4 text-white/70">
        Start with concepts, product structure, and the platform surface area Turnweave is designed to grow into.
      </p>
      <ul className="mt-8 space-y-3 text-white/80">
        <li>Getting started</li>
        <li>Agents and scenes</li>
        <li>Conversations</li>
        <li>Billing</li>
        <li>API reference (coming soon)</li>
      </ul>
    </div>
  );
}
```

- [ ] **Step 5: Run the route tests and commit**

Run:

```bash
npm run test:e2e -- tests/e2e/navigation.spec.ts tests/e2e/marketing-pages.spec.ts
git add app components content tests/e2e
git commit -m "feat: add turnweave marketing surfaces"
```

Expected: both Playwright specs PASS.

## Task 4: Add Supabase auth, server-rendered forms, and persistence

**Files:**
- Create: `lib/supabase/server.ts`
- Create: `lib/supabase/client.ts`
- Create: `lib/validation/demo-request.ts`
- Create: `lib/validation/waitlist.ts`
- Create: `app/api/demo/route.ts`
- Create: `app/api/waitlist/route.ts`
- Create: `app/(marketing)/signup/page.tsx`
- Create: `app/(marketing)/login/page.tsx`
- Create: `supabase/migrations/20260410_init.sql`
- Test: `tests/unit/validation.test.ts`

- [ ] **Step 1: Write the failing validation tests**

```ts
// tests/unit/validation.test.ts
import { describe, expect, it } from "vitest";
import { demoRequestSchema } from "@/lib/validation/demo-request";

describe("demoRequestSchema", () => {
  it("rejects a request without an email", () => {
    const result = demoRequestSchema.safeParse({ name: "A", useCase: "Website agents" });
    expect(result.success).toBe(false);
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run:

```bash
npm run test:unit -- --run tests/unit/validation.test.ts
```

Expected: FAIL because the validation schema file does not exist.

- [ ] **Step 3: Add schemas, Supabase clients, and SQL**

```ts
// lib/validation/demo-request.ts
import { z } from "zod";

export const demoRequestSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  useCase: z.string().min(2),
  timeline: z.string().min(2)
});
```

```ts
// lib/supabase/server.ts
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export function createSupabaseServerClient() {
  const cookieStore = cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: () => undefined
      }
    }
  );
}
```

```sql
-- supabase/migrations/20260410_init.sql
create table if not exists public.workspaces (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null,
  name text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.demo_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text not null,
  use_case text not null,
  timeline text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.waitlist_entries (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  interest text not null,
  created_at timestamptz not null default now()
);
```

- [ ] **Step 4: Implement the route handlers and form pages**

```ts
// app/api/demo/route.ts
import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { demoRequestSchema } from "@/lib/validation/demo-request";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = demoRequestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid demo request." }, { status: 400 });
  }

  const supabase = createSupabaseServerClient();
  const { error } = await supabase.from("demo_requests").insert({
    name: parsed.data.name,
    email: parsed.data.email,
    company: parsed.data.company,
    use_case: parsed.data.useCase,
    timeline: parsed.data.timeline
  });

  if (error) {
    return NextResponse.json({ error: "Failed to submit." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
```

```tsx
// app/(marketing)/book-demo/page.tsx
export default function BookDemoPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-semibold">Book a demo</h1>
      <form className="mt-10 grid gap-4">
        <input name="name" placeholder="Name" className="rounded-2xl border border-white/10 bg-white/5 p-4" />
        <input name="email" placeholder="Work email" className="rounded-2xl border border-white/10 bg-white/5 p-4" />
        <input name="company" placeholder="Company" className="rounded-2xl border border-white/10 bg-white/5 p-4" />
        <textarea name="useCase" placeholder="Use case" className="min-h-32 rounded-2xl border border-white/10 bg-white/5 p-4" />
        <button className="rounded-full bg-[var(--accent)] px-5 py-3 text-black">Submit</button>
      </form>
    </div>
  );
}
```

- [ ] **Step 5: Run validation tests, route smoke checks, and commit**

Run:

```bash
npm run test:unit -- --run tests/unit/validation.test.ts
npm run lint
npm run typecheck
git add lib/supabase lib/validation app/api "app/(marketing)/signup/page.tsx" "app/(marketing)/login/page.tsx" supabase/migrations/20260410_init.sql tests/unit/validation.test.ts
git commit -m "feat: add auth and lead capture persistence"
```

Expected: unit tests PASS, lint PASS, typecheck PASS.

## Task 5: Implement the dashboard shell and future platform placeholders

**Files:**
- Create: `app/(app)/app/page.tsx`
- Create: `app/(app)/app/workspace/page.tsx`
- Create: `app/(app)/app/agents/page.tsx`
- Create: `app/(app)/app/scenes/page.tsx`
- Create: `app/(app)/app/conversations/page.tsx`
- Create: `app/(app)/app/billing/page.tsx`
- Create: `app/(app)/app/settings/page.tsx`
- Create: `app/(app)/app/docs-preview/page.tsx`
- Create: `app/(app)/app/usage/page.tsx`
- Create: `app/(app)/app/webhooks/page.tsx`
- Create: `app/(app)/app/logs/page.tsx`
- Create: `components/app/stat-card.tsx`
- Test: `tests/e2e/dashboard-shell.spec.ts`

- [ ] **Step 1: Write the failing dashboard smoke test**

```ts
// tests/e2e/dashboard-shell.spec.ts
import { test, expect } from "@playwright/test";

test("dashboard shell exposes agents, scenes, and billing", async ({ page }) => {
  await page.goto("/app");
  await expect(page.getByText("Workspace overview")).toBeVisible();
  await expect(page.getByRole("link", { name: "Agents" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Billing" })).toBeVisible();
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run:

```bash
npm run test:e2e -- tests/e2e/dashboard-shell.spec.ts
```

Expected: FAIL because the dashboard routes do not exist.

- [ ] **Step 3: Build the dashboard landing page and app routes**

```tsx
// app/(app)/app/page.tsx
const stats = [
  { label: "Workspace overview", value: "1 workspace" },
  { label: "Agents", value: "3 templates" },
  { label: "Scenes", value: "4 shells" },
  { label: "Billing", value: "Pro plan shell" }
];

export default function AppHomePage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-semibold">Workspace overview</h1>
        <p className="mt-2 text-white/60">Run website agents, roleplay flows, and platform-ready operations from one shell.</p>
      </section>
      <section className="grid gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <article key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-white/60">{stat.label}</p>
            <p className="mt-2 text-2xl">{stat.value}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
```

```tsx
// app/(app)/app/billing/page.tsx
export default function BillingPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Billing</h1>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <p className="text-white/60">Current plan</p>
        <p className="mt-2 text-2xl">Pro shell</p>
        <button className="mt-6 rounded-full border border-white/15 px-4 py-2">
          Upgrade with Creem (soon)
        </button>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Add the future platform routes as explicit placeholders**

```tsx
// app/(app)/app/webhooks/page.tsx
export default function WebhooksPage() {
  return (
    <div className="rounded-3xl border border-dashed border-white/15 bg-white/5 p-8">
      <h1 className="text-3xl font-semibold">Webhooks</h1>
      <p className="mt-3 text-white/65">
        Endpoint registration, signing secrets, and delivery logs will appear here in a later platform phase.
      </p>
    </div>
  );
}
```

```tsx
// app/(app)/app/usage/page.tsx
export default function UsagePage() {
  return (
    <div className="rounded-3xl border border-dashed border-white/15 bg-white/5 p-8">
      <h1 className="text-3xl font-semibold">Usage</h1>
      <p className="mt-3 text-white/65">Conversation, credit, and future API usage charts will live here.</p>
    </div>
  );
}
```

- [ ] **Step 5: Run the dashboard test and commit**

Run:

```bash
npm run test:e2e -- tests/e2e/dashboard-shell.spec.ts
git add "app/(app)" components/app tests/e2e/dashboard-shell.spec.ts
git commit -m "feat: add dashboard shell routes"
```

Expected: Playwright PASS.

## Task 6: Add typed billing placeholders and operator docs

**Files:**
- Create: `lib/billing/creem.ts`
- Create: `docs/ops/cloudflare-deploy.md`
- Create: `docs/ops/zoho-turnweave-alias.md`
- Create: `docs/ops/creem-integration-notes.md`
- Test: `tests/unit/creem.test.ts`

- [ ] **Step 1: Write the failing billing placeholder test**

```ts
// tests/unit/creem.test.ts
import { describe, expect, it } from "vitest";
import { getBillingPlans } from "@/lib/billing/creem";

describe("getBillingPlans", () => {
  it("returns starter, pro, and team plans", () => {
    expect(getBillingPlans().map((plan) => plan.slug)).toEqual(["starter", "pro", "team"]);
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run:

```bash
npm run test:unit -- --run tests/unit/creem.test.ts
```

Expected: FAIL because the billing helper does not exist.

- [ ] **Step 3: Add the billing helper with stable placeholder types**

```ts
// lib/billing/creem.ts
export type BillingPlan = {
  slug: "starter" | "pro" | "team";
  name: string;
  monthlyPrice: string;
  seats: string;
  credits: string;
  ctaLabel: string;
};

const plans: BillingPlan[] = [
  { slug: "starter", name: "Starter", monthlyPrice: "$0", seats: "1 seat", credits: "Starter shell", ctaLabel: "Start free" },
  { slug: "pro", name: "Pro", monthlyPrice: "$49", seats: "3 seats", credits: "Expanded shell", ctaLabel: "Upgrade soon" },
  { slug: "team", name: "Team", monthlyPrice: "$199", seats: "10 seats", credits: "Team shell", ctaLabel: "Contact sales" }
];

export function getBillingPlans() {
  return plans;
}

export async function createCheckoutSession() {
  return { mode: "placeholder", provider: "creem" as const };
}
```

- [ ] **Step 4: Write the operator runbooks**

```md
<!-- docs/ops/cloudflare-deploy.md -->
# Cloudflare Deploy Runbook

1. Create the Worker-backed Next.js project in Cloudflare.
2. Add `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and `SUPABASE_SERVICE_ROLE_KEY`.
3. Connect the GitHub repository `daanaagua/turnweave`.
4. Run `npm run build`.
5. Deploy with `npx opennextjs-cloudflare build && npx wrangler deploy`.
```

```md
<!-- docs/ops/zoho-turnweave-alias.md -->
# Zoho Alias or Forward Setup

Preferred path:
1. Add `turnweave.com` to Zoho Mail admin.
2. Create `suporte@turnweave.com` as an alias for the existing support mailbox.
3. If alias support is unavailable, configure Cloudflare Email Routing to forward `suporte@turnweave.com` to `suporte@scanlume.com`.
4. Verify SPF, DKIM, and DMARC before enabling the inbox address in site copy.
```

```md
<!-- docs/ops/creem-integration-notes.md -->
# Creem Integration Notes

1. Reuse the existing `scanlume.com` Creem product structure only after copying product IDs, webhook secrets, and checkout mode names into Turnweave-specific environment variables.
2. Keep the public pricing page and `/app/billing` UI stable even before live checkout is enabled.
3. Replace the placeholder `createCheckoutSession()` helper only after confirming the Turnweave merchant workspace and webhook endpoint.
4. Add a dedicated billing webhook route before turning on live checkout.
```

- [ ] **Step 5: Run tests and commit**

Run:

```bash
npm run test:unit -- --run tests/unit/creem.test.ts
git add lib/billing/creem.ts docs/ops/cloudflare-deploy.md docs/ops/zoho-turnweave-alias.md docs/ops/creem-integration-notes.md tests/unit/creem.test.ts
git commit -m "docs: add billing and operations runbooks"
```

Expected: unit tests PASS.

## Task 7: Complete SEO/GEO, metadata, and crawl surfaces

**Files:**
- Create: `lib/seo.ts`
- Create: `app/sitemap.ts`
- Create: `app/robots.ts`
- Create: `app/opengraph-image.tsx`
- Modify: `app/(marketing)/page.tsx`
- Modify: `app/(marketing)/scenarios/website-agents/page.tsx`
- Modify: `app/(marketing)/scenarios/roleplay-training/page.tsx`
- Test: `tests/unit/seo.test.ts`

- [ ] **Step 1: Write the failing metadata helper tests**

```ts
// tests/unit/seo.test.ts
import { describe, expect, it } from "vitest";
import { buildTitle } from "@/lib/seo";

describe("buildTitle", () => {
  it("adds the Turnweave suffix", () => {
    expect(buildTitle("Pricing")).toBe("Pricing | Turnweave");
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run:

```bash
npm run test:unit -- --run tests/unit/seo.test.ts
```

Expected: FAIL because `lib/seo.ts` does not exist.

- [ ] **Step 3: Add reusable SEO helpers**

```ts
// lib/seo.ts
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export function buildTitle(title: string) {
  return `${title} | ${siteConfig.name}`;
}

export function buildMetadata(title: string, description: string, path = "/"): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
```

- [ ] **Step 4: Add sitemap, robots, and JSON-LD to the public routes**

```ts
// app/sitemap.ts
import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/product",
    "/pricing",
    "/docs",
    "/book-demo",
    "/waitlist",
    "/scenarios/website-agents",
    "/scenarios/roleplay-training"
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date()
  }));
}
```

```ts
// app/robots.ts
import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteConfig.url}/sitemap.xml`
  };
}
```

```tsx
// app/(marketing)/scenarios/website-agents/page.tsx
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(
  "AI Voice Agent for Websites",
  "Deploy a polished website voice agent shell for FAQs, lead capture, booking, and guided product discovery.",
  "/scenarios/website-agents"
);
```

- [ ] **Step 5: Run all checks and commit**

Run:

```bash
npm run test:unit -- --run tests/unit/seo.test.ts
npm run test:e2e -- tests/e2e
npm run check
git add lib/seo.ts app/sitemap.ts app/robots.ts app/opengraph-image.tsx "app/(marketing)" tests/unit/seo.test.ts
git commit -m "feat: add seo and crawl surfaces"
```

Expected: unit tests PASS, E2E PASS, full check PASS.

## Task 8: Connect git, prepare Cloudflare deployment, and publish

**Files:**
- Modify: `.gitignore`
- Modify: `README.md`
- Create: `.github/workflows/ci.yml`
- Test: repository and deployment commands

- [ ] **Step 1: Add the failing CI expectation**

```yaml
# .github/workflows/ci.yml
name: ci

on:
  push:
    branches: ["main"]
  pull_request:

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - run: npm ci
      - run: npm run check
```

- [ ] **Step 2: Run the repository commands to verify setup gaps**

Run:

```bash
git init
git remote add origin https://github.com/daanaagua/turnweave.git
git status
```

Expected: repository initializes cleanly; if `origin` already exists, use `git remote set-url origin ...` instead.

- [ ] **Step 3: Add README deployment instructions**

```md
<!-- README.md -->
# Turnweave

Turnweave is a server-rendered voice product shell for website agents, roleplay workflows, and future platform capabilities.

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run check
npm run test:e2e
```

## Deploy

Use Cloudflare Workers for SSR:

```bash
npx opennextjs-cloudflare build
npx wrangler deploy
```
```

- [ ] **Step 4: Run the final verification and deploy**

Run:

```bash
npm run check
npm run build
npx opennextjs-cloudflare build
npx wrangler deploy
git add .
git commit -m "feat: launch first turnweave shell"
git push -u origin main
```

Expected: local checks PASS, production build PASS, Worker deploy PASS, GitHub push PASS.

- [ ] **Step 5: Verify post-deploy surfaces**

Run:

```bash
curl -I https://turnweave.com
curl https://turnweave.com/sitemap.xml
curl https://turnweave.com/robots.txt
```

Expected:
- homepage returns `200`
- sitemap includes core public routes
- robots returns the sitemap URL

## Self-Review

### Spec coverage

- Product shell and public site: covered in Tasks 2 and 3.
- Auth-backed dashboard shell: covered in Tasks 4 and 5.
- Billing placeholders and Creem-ready surface: covered in Task 6.
- SEO/GEO and SSR requirements: covered in Task 7.
- Cloudflare deployment and GitHub push: covered in Task 8.
- Zoho alias/forward preparation: covered in Task 6 runbook.

### Placeholder scan

- The product intentionally uses “coming soon” only for billing/provider surfaces that are explicitly out of scope for this release.
- No `TODO`, `TBD`, or unresolved file paths remain in the plan.

### Type consistency

- Billing plan slugs are consistently `starter`, `pro`, and `team`.
- The site brand string is consistently `Turnweave`.
- The main public scenario routes are consistently `/scenarios/website-agents` and `/scenarios/roleplay-training`.

### Implementation note

- Because official Cloudflare guidance routes full-stack SSR Next.js apps to the Workers guide, deploy the production app on Cloudflare Workers rather than Pages, while still serving it fully on Cloudflare.

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-04-10-turnweave-shell-implementation.md`. Two execution options:

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

Which approach?
