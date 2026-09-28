export const Pill = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center max-w-max gap-2 rounded-full border border-slate-200 bg-blue-50 px-4 py-2 text-xs uppercase tracking-wide text-muted-foreground">
      <span className="size-2 rounded-full bg-brand-ink" aria-hidden="true" />
      {text}
    </div>
  )
}
