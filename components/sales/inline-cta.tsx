export function InlineCta({ text = "!אני רוצה להתחיל עכשיו" }: { text?: string }) {
  return (
    <div className="py-10 text-center">
      <a
        href="#pricing"
        className="inline-block w-full max-w-sm rounded bg-foreground px-8 py-4 text-base font-bold text-primary-foreground transition-opacity hover:opacity-90"
      >
        {text}
      </a>
      <p className="mt-2 text-xs text-muted-foreground">
        {"*מקומות מוגבלים"}
      </p>
    </div>
  )
}
