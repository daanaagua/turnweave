type StatCardProps = {
  label: string;
  value: string;
  note?: string;
};

export function StatCard({ label, value, note }: StatCardProps) {
  return (
    <article className="rounded-[28px] border border-line/70 bg-panel/80 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.2)]">
      <p className="text-xs uppercase tracking-[0.24em] text-muted">{label}</p>
      <p className="mt-4 text-3xl font-medium text-ink">{value}</p>
      {note ? <p className="mt-3 text-sm leading-6 text-muted">{note}</p> : null}
    </article>
  );
}
