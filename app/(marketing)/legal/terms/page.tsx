import { PageShell } from "@/components/marketing/page-shell";
import { SectionHeading } from "@/components/marketing/section-heading";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Terms",
  description: "Turnweave terms overview for the public marketing shell.",
  path: "/legal/terms",
});

const terms = [
  "The public site is provided to explain the product and support conversation.",
  "Any future product features, accounts, and workspace controls will be covered by their own terms as they appear.",
  "The shell may evolve as Turnweave expands into platform features, but public route names will remain descriptive.",
];

export default function TermsPage() {
  return (
    <PageShell className="py-10 md:py-14">
      <article className="section-shell rounded-[2rem] px-6 py-10 md:px-10 md:py-12">
        <SectionHeading
          eyebrow="Legal"
          title="Terms"
          description="A concise terms statement for the public marketing surface."
        />
        <div className="mt-10 max-w-3xl space-y-4 text-sm leading-7 text-muted md:text-base">
          {terms.map((term) => (
            <p key={term}>{term}</p>
          ))}
        </div>
      </article>
    </PageShell>
  );
}
