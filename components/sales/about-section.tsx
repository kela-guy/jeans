export function AboutSection() {
  return (
    <section className="flex flex-col gap-8 py-16">
      <h2 className="font-sans text-3xl font-bold text-foreground md:text-4xl">
        {"היי, אני אביב"}
      </h2>

      <div className="flex flex-col gap-8 md:flex-row md:items-start">
        <div className="mx-auto h-64 w-64 shrink-0 rounded border border-border bg-muted flex items-center justify-center md:mx-0">
          <span className="text-sm text-muted-foreground">{"[תמונה של אביב]"}</span>
        </div>
        <div className="flex flex-col gap-4 text-lg leading-relaxed text-foreground">
          <p>
            {"אחרי שנים של מחקר והתנסות, גיליתי שהפתרון לירידה במשקל הרבה יותר פשוט ממה שהתעשייה רוצה שתחשבי."}
          </p>
          <p>
            {"הצלחתי לעזור ליותר מ-100,000 ישראלים לרדת במשקל בצורה שפויה ובריאה, ועכשיו אני רוצה לעזור גם לך."}
          </p>
          <p className="font-bold">
            {"התוכנית הזו היא התוצאה של כל מה שלמדתי, מרוכז ב-21 ימים שישנו לך את הגוף ואת החיים."}
          </p>
        </div>
      </div>
    </section>
  )
}
