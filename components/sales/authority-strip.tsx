export function AuthorityStrip() {
  return (
    <div className="flex flex-col items-center gap-2 rounded border border-border bg-muted/50 px-4 py-3 text-center">
      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
        {"כפי שנראה ב"}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <span className="text-sm font-semibold text-foreground">{"ערוץ 12"}</span>
        <span className="text-muted-foreground">{"•"}</span>
        <span className="text-sm font-semibold text-foreground">{"ידיעות אחרונות"}</span>
        <span className="text-muted-foreground">{"•"}</span>
        <span className="text-sm font-semibold text-foreground">{"מעריב"}</span>
      </div>
      <p className="text-xs text-muted-foreground">
        {"100,000+ ישראלים כבר ירדו במשקל"}
      </p>
    </div>
  )
}
