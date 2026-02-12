export function ProblemSection() {
  return (
    <section className="flex flex-col gap-12 py-16">
      {/* Painful truth */}
      <div className="flex flex-col gap-6">
        <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
          {"האמת הכואבת:"}
        </h2>
        <h3 className="font-serif text-xl font-bold leading-relaxed text-foreground md:text-2xl text-balance">
          {"ככל שאת ״מקפידה״ יותר, כך את מתרחקת מבטן שטוחה"}
        </h3>
        <div className="flex flex-col gap-4 text-lg leading-relaxed text-foreground">
          <p>
            {"במקום להוריד את הבטן,"}
            <br />
            {"הגוף רק נכנס לסטרס"}
            <br />
            {"והסטרס הזה, דווקא גורם לו לאגור שומן"}
          </p>
        </div>

        {/* Stress triggers */}
        <div className="flex flex-col gap-3 border-r-4 border-foreground pr-6">
          <p className="text-lg leading-relaxed text-foreground">
            <span className="font-bold">{"תפחיתי קלוריות,"}</span>{" "}
            {"הוא ייכנס למצוקה ויחשוב שאין לו מזון"}
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            <span className="font-bold">{"תתאמני יותר,"}</span>{" "}
            {"הוא ירגיש עומס ויצבור שומן שיעזור לו להתמודד"}
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            <span className="font-bold">{"תשני את התזונה באופן קיצוני,"}</span>{" "}
            {"הוא יאגור שומן ויערך לגרוע מכל"}
          </p>
        </div>
      </div>

      {/* Empathy block */}
      <div className="flex flex-col gap-4">
        <p className="text-lg font-bold leading-relaxed text-foreground">
          {"אני מאמין שאת עושה הכל נכון…"}
        </p>
        <div className="flex flex-col gap-2 text-lg leading-relaxed text-foreground">
          <p>{"ועדיין, סביר שלא תראי ירידה של השומן הבטני."}</p>
          <p>{"דיאטות שעבדו בעבר, לא עובדות היום"}</p>
          <p>
            {"למרות שאת מתמידה יותר מתמיד, רשומה לפילאטיס, יוגה, במודעות לגוף"}
          </p>
          <p className="font-bold">
            {"ועדיין הפאוץ הזה תקוע שם, עקשן ולא רוצה לשחרר."}
          </p>
          <p className="text-muted-foreground italic">
            {"הוא כבר הפך להיות חלק ממך."}
          </p>
        </div>
      </div>
    </section>
  )
}
