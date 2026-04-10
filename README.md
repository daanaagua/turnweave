# Turnweave

Turnweave is a server-rendered product shell for website voice agents, roleplay workflows, and future platform expansion.

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS
- Supabase scaffolding for auth and submissions
- OpenNext + Cloudflare Workers deployment

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npm run check
npm run test:e2e
npm run build
```

## Cloudflare Build

```bash
npx opennextjs-cloudflare build
npx opennextjs-cloudflare deploy
```

## Structure

- `app/(marketing)` public SSR pages
- `app/(app)` authenticated dashboard shell
- `app/api` submission endpoints
- `lib/seo.ts` metadata and crawl helpers
- `docs/ops` deployment, billing, and mailbox runbooks
