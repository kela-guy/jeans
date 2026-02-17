export function InlineStat({
  number,
  label,
  className = "",
}: {
  number: string
  label: string
  className?: string
}) {
  return (
    <span
      className={`inline text-base font-medium text-muted-foreground md:text-lg ${className}`}
      dir="rtl"
    >
      <span className="font-bold tabular-nums text-foreground">{number}</span>{" "}
      {label}
    </span>
  )
}
