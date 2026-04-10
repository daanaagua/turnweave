# Cloudflare Deploy Runbook

1. Set `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` before running Wrangler.
2. Set `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_SUPABASE_URL`, and `NEXT_PUBLIC_SUPABASE_ANON_KEY` before deploying.
3. Add `SUPABASE_SERVICE_ROLE_KEY` only when a future admin workflow needs it.
4. Build locally with `npm run build:worker`.
5. Deploy with `npm run deploy`.
6. The zone for `turnweave.com` is already created in Cloudflare. Update NameSilo nameservers to:
   - `cleo.ns.cloudflare.com`
   - `jillian.ns.cloudflare.com`
7. Custom domains are already attached to the `turnweave` Worker from the Cloudflare account side.
8. `www -> apex` is enforced in the Worker entry path as a `308` redirect to `https://turnweave.com`.
9. `http -> https` is enforced in two layers:
   - Cloudflare zone setting `Always Use HTTPS`
   - Worker-level `308` redirect as a fallback during propagation
10. Verify the public routes after deploy:
   - `/`
   - `/book-demo`
   - `/waitlist`
   - `/login`
   - `/signup`
   - `/app`
11. Verify the Workers preview URL:
   - `https://turnweave.pony17620.workers.dev`
