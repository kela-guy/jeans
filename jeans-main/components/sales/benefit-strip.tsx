import type { LucideIcon } from "lucide-react"

export function BenefitStrip({
  items,
}: {
  items: { label: string; icon?: LucideIcon }[]
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 py-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-2 text-center"
        >
          {item.icon && (
            <item.icon className="h-5 w-5 shrink-0 text-foreground" aria-hidden />
          )}
          <span className="text-sm font-bold text-foreground md:text-base">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  )
}
