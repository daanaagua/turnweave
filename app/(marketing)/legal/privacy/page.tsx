import { PageShell } from "@/components/marketing/page-shell";
import { SectionHeading } from "@/components/marketing/section-heading";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Privacy",
  description: "Turnweave privacy overview for the public marketing shell.",
  path: "/legal/privacy",
});

const points = [
  "We only ask for contact details when you choose to reach out.",
  "Public pages are meant to explain the product and route intent, not collect unnecessary data.",
  "If future forms or product surfaces store more information, the policy will expand with them.",
];

export default function PrivacyPage() {
  return (
    <PageShell className="py-10 md:py-14">
      <article className="section-shell rounded-[2rem] px-6 py-10 md:px-10 md:py-12">
        <SectionHeading
          eyebrow="Legal"
          title="Privacy"
          description="A concise public privacy statement for the Turnweave marketing shell."
        />
        <div className="mt-10 max-w-3xl space-y-4 text-sm leading-7 text-muted md:text-base">
          <p>
            Turnweave is designed to give visitors a clear understanding of the product. If you email{" "}
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="font-medium text-foreground underline decoration-white/30 underline-offset-4 transition hover:decoration-accent"
            >
              {siteConfig.supportEmail}
            </a>
            , we will see the information you choose to send.
          </p>
          {points.map((point) => (
            <p key={point}>{point}</p>
          ))}
        </div>
      </article>
    </PageShell>
  );
}
