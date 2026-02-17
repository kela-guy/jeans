export function AboutSection() {
  return (
    <section className="py-10">
      <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
        {"אודות"}
      </p>
      <h2 className="mt-2 text-xl font-bold text-foreground md:text-2xl">
        {"אביב, נעים להכיר:"}
      </h2>

      <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-start">
        <div className="mx-auto h-56 w-56 shrink-0 rounded border border-border bg-muted flex items-center justify-center md:mx-0">
          <span className="text-xs text-muted-foreground">{"[תמונה של אביב]"}</span>
        </div>
        <div className="flex flex-col gap-4 text-base leading-relaxed text-foreground">
          <p>
            {"אני יכול לספר לך שאני כבר מעל ל12 שנה בתחום, מוכר מאוד בישראל ועברו אצלי "}
            <span className="marker">{"100 אלף ישראלים"}</span>
            {", ממש עכשיו בשנת 2025. אבל אנחנו לא בשביל לדבר עלי, אלא לדבר עלייך."}
          </p>
          <p>
            {"אני יודע שהתוכנית הזאת תביא אותך ל"}
            <span className="marker">{"2 מידות פחות בג׳ינס"}</span>
            {" ובקלות יותר ממה שחשבת. אני יודע שזה גם אומר בשבילך הרבה יותר מלרדת 2 מידות – זה ממש להראות אחרת, להרגיש אחרת."}
          </p>
          <p>
            {"לפעמים הקושי האמיתי הוא לא המחיר או מה מקבלים. הוא "}
            <span className="marker">{"הקושי להבין שהגיע הזמן לבצע שינוי"}</span>
            {". אז תדעי לך שמהצד שלי, אני עשיתי הכל כדי לאפשר לך את המצע הכי נוח לשינוי הזה."}
          </p>
          <p>
            {"תאפשרי לי לקחת אותך יד ביד בשביל הזה יום אחרי יום, 21 ימים שבסופם כן, את תיהי 2 מידות פחות בג׳ינס. ויחד עם זאת, את בעיקר תרגישי אנרגטית יותר, קלילה יותר, חיונית יותר, מאמינה בעצמך יותר וגאה בעצמך יותר! ואפילו יותר אישה. אם אפשר להגיד את זה ככה."}
          </p>
          <p className="text-base font-bold md:text-lg">
            <span className="marker">{"אז זהו, זה הזמן. לחיצת כפתור אחת ואת בפנים!"}</span>
            {" ניפגש אנחנו כבר בקורס!"}
          </p>
        </div>
      </div>
    </section>
  )
}
