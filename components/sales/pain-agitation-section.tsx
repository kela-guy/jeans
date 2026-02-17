export function PainAgitationSection() {
  return (
    <section className="py-10">
      <div className="flex flex-col gap-2 text-base leading-relaxed text-foreground">
        <p>{"אני מבין למה המונים פונים לזריקות, כי כשמנסים כל כך קשה ולא רואים תוצאות"}</p>
        <p className="font-bold">{"אז נמאס לנו,"}</p>
        <p>{"מרגיש ש"}<span className="marker">{"הגוף שלנו מקולקל"}</span>{"."}</p>
      </div>

      <p className="mt-8 text-lg font-bold leading-snug text-foreground md:text-xl">
        {"הגוף בוגד בנו! "}
        <span className="marker">{"מסביבנו כולן יורדות במשקל ורק אנחנו לא"}</span>
        {"."}
      </p>

      <div className="mt-8 flex flex-col gap-2 text-base leading-relaxed text-foreground">
        <p>{"כבר לא ברור אם הפעם כשארצה לצאת בערב הג׳ינס באמת ייסגר,"}</p>
        <p>{"מרגיש כאילו כולם רואים את הפגמים שלנו."}</p>
        <p>{"אז בוחרים באיזה תנוחה לשבת שלא ״תבליט״ את מה שלא צריך לראות."}</p>
      </div>

      <p className="mt-6 text-base font-bold text-foreground md:text-lg">
        {"כבר לא לובשים את מה שיפה. "}
        <span className="marker">{"לובשים את מה שמסתיר"}</span>
      </p>

      <div className="mt-8 flex flex-col gap-2 text-base leading-relaxed text-foreground">
        <p>{"במקום שההתעסקות שלך תהיה בלהראות את היופי שלך,"}</p>
      </div>

      <p className="mt-4 text-lg font-bold text-foreground">
        {"ההתעסקות היא ב: "}
        <span className="marker">{"מה לא בסדר בי"}</span>
        {"."}
      </p>

      <p className="mt-6 text-sm italic leading-relaxed text-muted-foreground">
        {"ועצוב לראות שכל זה,"}
        <br />
        {"בזמן שפשוט לא נתת תשומת לב "}
        <span className="marker text-foreground/90">{"למנגנון הכי פשוט והישרדותי בגוף"}</span>
        {"."}
      </p>
    </section>
  )
}
