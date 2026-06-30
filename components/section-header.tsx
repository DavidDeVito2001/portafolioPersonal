export function SectionHeader({
  index,
  title,
  className = "mb-12",
}: {
  index: string
  title: string
  className?: string
}) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="font-mono text-sm text-signal">{index}</span>
      <h2 className="font-display text-2xl font-bold tracking-tight text-bone md:text-3xl">
        {title}
      </h2>
      <div className="h-px flex-1 bg-line" />
    </div>
  )
}
