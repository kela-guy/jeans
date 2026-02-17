export function SocialProofStats() {
  const stats = [
    { number: "+100,000", label: "ישראלים שכבר ירדו במשקל" },
    { number: "21", label: "ימים בלבד לתוצאות" },
    { number: "97%", label: "שביעות רצון" },
  ]

  return (
    <div className="py-12">
      <div className="flex items-center justify-between gap-4 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="flex-1">
            <p className="text-3xl font-black text-foreground md:text-4xl" dir="ltr">
              {stat.number}
            </p>
            <p className="mt-1 text-xs leading-tight text-muted-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
