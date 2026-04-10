import Link from "next/link";
import { marketingNav } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-canvas/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-4 md:flex-row md:items-center md:justify-between md:gap-6">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.32em] text-ink"
          >
            Turnweave
          </Link>
          <div className="flex items-center gap-3 md:hidden">
            <Link
              href="/login"
              className="rounded-full border border-line px-4 py-2 text-sm text-ink transition hover:bg-white/5"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-black transition hover:bg-accent/90"
            >
              Create workspace
            </Link>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          {marketingNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <nav
          aria-label="Primary"
          className="flex gap-2 overflow-x-auto text-xs text-muted md:hidden"
        >
          {marketingNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-line/70 bg-white/5 px-3 py-1.5 transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="rounded-full border border-line px-4 py-2 text-sm text-ink transition hover:bg-white/5"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-black transition hover:bg-accent/90"
          >
            Create workspace
          </Link>
        </div>
      </div>
    </header>
  );
}
