export function OfferSection() {
  return (
    <section className="flex flex-col gap-12 py-16">
      {/* Transition */}
      <div className="flex flex-col gap-4 text-center">
        <p className="text-lg leading-relaxed text-foreground">
          {"אחרי שבשנת 2025 אביב הראה ל100 אלף ישראלים"}
          <br />
          {"כיצד להוריד 5 קילו בשבועיים"}
        </p>
        <h2 className="font-sans text-3xl font-black leading-tight text-foreground md:text-4xl text-balance">
          {"עכשיו הוא בא להראות לך כיצד להוריד 2 מידות בג׳ינס"}
          <br />
          {"וכל זה בקלות תוך 21 ימים בקורס דיגיטלי."}
        </h2>
      </div>

      {/* Context */}
      <div className="flex flex-col gap-3 text-lg leading-relaxed text-muted-foreground text-center">
        <p>{"שלכולנו יש יותר משימות משעות ביממה"}</p>
        <p>{"הגוף נמצא בסטרס תמידי,"}</p>
        <p>{"זאת האמת בעולם המערבי במאה ה21"}</p>
        <p>{"כולם בלחץ כל הזמן, בזמן שיש שפע של אוכל מכל כיוון"}</p>
        <p className="font-bold text-foreground">{"כאילו הכשילו אותנו מראש"}</p>
      </div>

      {/* What you get */}
      <div className="flex flex-col gap-6">
        <h3 className="font-sans text-2xl font-bold text-foreground md:text-3xl">
          {"מה מקבלים"}
        </h3>
        <div className="flex flex-col gap-4">
          {[
            { title: "מודול 1", desc: "תוכן המודול הראשון" },
            { title: "מודול 2", desc: "תוכן המודול השני" },
            { title: "מודול 3", desc: "תוכן המודול השלישי" },
          ].map((mod, i) => (
            <div key={i} className="flex gap-4 rounded border border-border p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground text-primary-foreground font-bold">
                {i + 1}
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-bold text-foreground">{mod.title}</p>
                <p className="text-muted-foreground">{mod.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bonuses */}
      <div className="flex flex-col gap-6">
        <h3 className="font-sans text-2xl font-bold text-foreground md:text-3xl">
          {"בונוסים"}
        </h3>
        <div className="flex flex-col gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-4 rounded bg-muted p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-foreground font-bold text-primary-foreground text-sm">
                {"מתנה"}
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-bold text-foreground">{`בונוס ${i}`}</p>
                <p className="text-muted-foreground">{"תיאור הבונוס"}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Guarantee */}
      <div className="flex flex-col gap-4 rounded border-2 border-foreground p-6 text-center md:p-8">
        <h3 className="font-sans text-2xl font-bold text-foreground md:text-3xl">
          {"אחריות"}
        </h3>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {"פרטי האחריות יופיעו כאן"}
        </p>
      </div>
    </section>
  )
}
