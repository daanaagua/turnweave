import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-medium text-ink">{siteConfig.name}</p>
          <p className="mt-1">
            Voice experiences for websites, teams, and interactive scenes.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/legal/privacy" className="transition hover:text-ink">
            Privacy
          </Link>
          <Link href="/legal/terms" className="transition hover:text-ink">
            Terms
          </Link>
          <Link href="/book-demo" className="transition hover:text-ink">
            Book demo
          </Link>
          <a
            href={`mailto:${siteConfig.supportEmail}`}
            className="transition hover:text-ink"
          >
            {siteConfig.supportEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}
