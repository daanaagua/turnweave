# Creem Integration Notes

1. Treat Creem as prepared but not live.
2. Keep the billing copy honest: use "soon", "request access", or "placeholder" where the checkout is not active.
3. The helper in `lib/billing/creem.ts` should remain stable until product and merchant details are confirmed.
4. When the live checkout work starts, replace the placeholder session flow without changing the dashboard route shape.
5. Keep webhook routing and invoice history as future platform work, not present-day claims.
