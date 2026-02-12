export function OfferSection() {
  return (
    <section className="py-20">
      {/* Transition */}
      <div className="text-center">
        <p className="text-base leading-relaxed text-muted-foreground">
          {"אחרי שבשנת 2025 אביב הראה ל"}
          <span className="font-black text-foreground">{"100,000"}</span>
          {" ישראלים"}
          <br />
          {"כיצד להוריד 5 קילו בשבועיים"}
        </p>

        <h2 className="mt-8 text-2xl font-black leading-snug text-foreground md:text-3xl text-balance">
          {"עכשיו הוא בא להראות לך כיצד להוריד 2 מידות בג׳ינס"}
          <br />
          {"וכל זה בקלות תוך 21 ימים בקורס דיגיטלי."}
        </h2>
      </div>

      {/* Context */}
      <div className="mt-12 flex flex-col gap-2 text-center text-sm leading-relaxed text-muted-foreground">
        <p>{"שלכולנו יש יותר משימות משעות ביממה"}</p>
        <p>{"הגוף נמצא בסטרס תמידי,"}</p>
        <p>{"זאת האמת בעולם המערבי במאה ה21"}</p>
        <p>{"כולם בלחץ כל הזמן, בזמן שיש שפע של אוכל מכל כיוון"}</p>
        <p className="mt-2 text-base font-bold text-foreground">{"כאילו הכשילו אותנו מראש"}</p>
      </div>

      {/* What you get */}
      <div className="mt-16">
        <p className="text-sm font-bold tracking-wide text-muted-foreground uppercase">{"מה כלול"}</p>
        <h3 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">{"מה מקבלים"}</h3>

        <div className="mt-8 flex flex-col gap-3">
          {[
            { title: "מודול 1", desc: "תוכן המודול הראשון" },
            { title: "מודול 2", desc: "תוכן המודול השני" },
            { title: "מודול 3", desc: "תוכן המודול השלישי" },
          ].map((mod, i) => (
            <div key={i} className="flex gap-4 rounded border border-border p-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-bold text-primary-foreground">
                {i + 1}
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="font-bold text-foreground">{mod.title}</p>
                <p className="text-sm text-muted-foreground">{mod.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bonuses */}
      <div className="mt-14">
        <p className="text-sm font-bold tracking-wide text-muted-foreground uppercase">{"מתנות"}</p>
        <h3 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">{"בונוסים"}</h3>

        <div className="mt-8 flex flex-col gap-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-4 rounded bg-muted p-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-foreground text-xs font-bold text-primary-foreground">
                {"מתנה"}
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="font-bold text-foreground">{`בונוס ${i}`}</p>
                <p className="text-sm text-muted-foreground">{"תיאור הבונוס"}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


    </section>
  )
}
