export function PricingSection() {
  return (
    <section className="flex flex-col gap-8 py-16" id="pricing">
      <h2 className="text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
        {"מחיר"}
      </h2>

      <div className="mx-auto flex w-full max-w-md flex-col gap-6 rounded border-2 border-foreground p-8">
        <div className="flex flex-col gap-2 text-center">
          <p className="text-muted-foreground line-through text-lg">{"₪XXX"}</p>
          <p className="font-serif text-5xl font-black text-foreground">{"₪XXX"}</p>
          <p className="text-muted-foreground">{"תשלום חד פעמי"}</p>
        </div>

        <div className="border-t border-border" />

        <ul className="flex flex-col gap-2 text-foreground">
          <li className="flex items-center gap-2">
            <span className="text-foreground">{"+"}</span>
            <span>{"קורס דיגיטלי מלא ל-21 יום"}</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-foreground">{"+"}</span>
            <span>{"כל הבונוסים"}</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-foreground">{"+"}</span>
            <span>{"גישה לצמיתות"}</span>
          </li>
        </ul>

        <a
          href="#signup"
          className="block w-full rounded bg-foreground py-4 text-center text-lg font-bold text-primary-foreground transition-opacity hover:opacity-90"
        >
          {"!אני רוצה להתחיל"}
        </a>
      </div>
    </section>
  )
}
