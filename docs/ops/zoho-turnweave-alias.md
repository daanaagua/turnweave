# Zoho Alias or Forward Setup

Target inbox: `suporte@turnweave.com`

Preferred path:

1. Create `suporte@turnweave.com` as a Zoho alias or mailbox.
2. Use that address in the public footer and support copy once it is live.
3. If Zoho aliasing is not available yet, add Cloudflare Email Routing as a forwarder.
4. Keep a fallback forward target in place so support mail still reaches the team.
5. Confirm SPF, DKIM, and DMARC after the address is activated.

Fallback note:

- The Cloudflare forward should stay as the emergency path, not the primary story, once Zoho is ready.

Current status on 2026-04-10:

1. Cloudflare Email Routing is enabled for `turnweave.com`.
2. Required MX, SPF, and DKIM DNS records were created automatically by Cloudflare.
3. Destination address `suporte@scanlume.com` was created in Cloudflare as the forward target.
4. The destination address is still `unverified`, so the forwarding rule cannot be created yet.
5. The remaining action is to open the Cloudflare verification email in Zoho and confirm the destination address.

After verification:

1. Create a rule that matches `suporte@turnweave.com`.
2. Forward mail to `suporte@scanlume.com`.
3. Update the public support address in the site footer and contact copy if needed.
