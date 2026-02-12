export function PricingSection() {
  return (
    <section className="py-20" id="pricing">
      <div className="mx-auto flex w-full max-w-sm flex-col rounded border-2 border-foreground p-8">
        <p className="text-center text-sm font-bold tracking-wide text-muted-foreground uppercase">{"מחיר"}</p>

        <div className="mt-6 flex flex-col items-center gap-1 text-center">
          <p className="text-sm text-muted-foreground line-through">{"₪XXX"}</p>
          <p className="text-5xl font-black text-foreground">{"₪XXX"}</p>
          <p className="mt-1 text-sm text-muted-foreground">{"תשלום חד פעמי"}</p>
        </div>

        <div className="my-6 border-t border-border" />

        <ul className="flex flex-col gap-2 text-sm text-foreground">
          <li className="flex items-center gap-2">
            <span>{"+"}</span>
            <span>{"קורס דיגיטלי מלא ל-21 יום"}</span>
          </li>
          <li className="flex items-center gap-2">
            <span>{"+"}</span>
            <span>{"כל הבונוסים"}</span>
          </li>
          <li className="flex items-center gap-2">
            <span>{"+"}</span>
            <span>{"גישה לצמיתות"}</span>
          </li>
        </ul>

        <a
          href="#pricing"
          className="mt-8 block w-full rounded bg-foreground py-4 text-center text-base font-bold text-primary-foreground transition-opacity hover:opacity-90"
        >
          {"!אני רוצה להתחיל"}
        </a>
      </div>
    </section>
  )
}
