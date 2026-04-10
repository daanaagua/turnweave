import Link from "next/link";
import { appNav } from "@/lib/site";

export function AppSidebar() {
  return (
    <aside className="border-r border-line/70 bg-panel/80 p-6">
      <Link
        href="/app"
        className="text-sm font-semibold uppercase tracking-[0.32em] text-ink"
      >
        Turnweave
      </Link>
      <div className="mt-8 rounded-3xl border border-line bg-panel-strong p-4">
        <p className="text-xs uppercase tracking-[0.24em] text-muted">
          Current workspace
        </p>
        <p className="mt-3 text-lg font-medium text-ink">Turnweave Studio</p>
        <p className="mt-1 text-sm text-muted">Product shell environment</p>
      </div>
      <nav className="mt-8 grid gap-2">
        {appNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-2xl px-4 py-3 text-sm text-muted transition hover:bg-white/5 hover:text-ink"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
