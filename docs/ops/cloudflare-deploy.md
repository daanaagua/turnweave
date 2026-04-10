# Cloudflare Deploy Runbook

1. Keep the app on the current Cloudflare deployment target used by the repo.
2. Set `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_SUPABASE_URL`, and `NEXT_PUBLIC_SUPABASE_ANON_KEY` before deploying.
3. Add `SUPABASE_SERVICE_ROLE_KEY` only when a future admin workflow needs it.
4. Build locally with `npm run build`.
5. Deploy with the app's Cloudflare workflow or the current Worker adapter command used in the repository.
6. Verify the public routes after deploy:
   - `/`
   - `/book-demo`
   - `/waitlist`
   - `/login`
   - `/signup`
   - `/app`
