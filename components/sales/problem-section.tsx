export function ProblemSection() {
  return (
    <section className="py-20">
      {/* Painful truth */}
      <p className="text-sm font-bold tracking-wide text-muted-foreground uppercase">
        {"האמת הכואבת:"}
      </p>

      <h2 className="mt-4 text-2xl font-bold leading-snug text-foreground md:text-3xl text-balance">
        {"ככל שאת ״מקפידה״ יותר, כך את מתרחקת מבטן שטוחה"}
      </h2>

      <div className="mt-8 flex flex-col gap-1 text-base leading-relaxed text-foreground">
        <p>{"במקום להוריד את הבטן,"}</p>
        <p>{"הגוף רק נכנס לסטרס"}</p>
        <p>{"והסטרס הזה, דווקא גורם לו לאגור שומן"}</p>
      </div>

      {/* Stress triggers -- generous top spacing to separate from intro */}
      <div className="mt-12 flex flex-col gap-4 border-r-4 border-foreground pr-6">
        <p className="text-base leading-relaxed text-foreground">
          <span className="font-bold">{"תפחיתי קלוריות,"}</span>{" "}
          {"הוא ייכנס למצוקה ויחשוב שאין לו מזון"}
        </p>
        <p className="text-base leading-relaxed text-foreground">
          <span className="font-bold">{"תתאמני יותר,"}</span>{" "}
          {"הוא ירגיש עומס ויצבור שומן שיעזור לו להתמודד"}
        </p>
        <p className="text-base leading-relaxed text-foreground">
          <span className="font-bold">{"תשני את התזונה באופן קיצוני,"}</span>{" "}
          {"הוא יאגור שומן ויערך לגרוע מכל"}
        </p>
      </div>

      {/* Empathy block -- large top gap to create a new "beat" */}
      <div className="mt-16">
        <p className="text-lg font-bold text-foreground">
          {"אני מאמין שאת עושה הכל נכון..."}
        </p>

        <div className="mt-6 flex flex-col gap-2 text-base leading-relaxed text-foreground">
          <p>{"ועדיין, סביר שלא תראי ירידה של השומן הבטני."}</p>
          <p>{"דיאטות שעבדו בעבר, לא עובדות היום"}</p>
          <p>{"למרות שאת מתמידה יותר מתמיד, רשומה לפילאטיס, יוגה, במודעות לגוף"}</p>
        </div>

        {/* Key emotional line -- isolated with extra spacing */}
        <p className="mt-8 text-xl font-bold leading-snug text-foreground">
          {"ועדיין הפאוץ הזה תקוע שם, עקשן ולא רוצה לשחרר."}
        </p>

        <p className="mt-3 text-sm italic text-muted-foreground">
          {"הוא כבר הפך להיות חלק ממך."}
        </p>
      </div>
    </section>
  )
}
