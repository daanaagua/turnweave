export function AppHeader() {
  return (
    <header className="border-b border-line/70 bg-canvas/70 px-8 py-5 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-muted">
            Dashboard
          </p>
          <p className="mt-2 text-lg font-medium text-ink">
            Voice workspace control center
          </p>
        </div>
        <button
          type="button"
          disabled
          aria-disabled="true"
          className="rounded-full border border-line px-4 py-2 text-sm text-muted opacity-70"
        >
          Invite teammate (soon)
        </button>
      </div>
    </header>
  );
}
