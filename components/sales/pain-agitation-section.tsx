export function PainAgitationSection() {
  return (
    <section className="py-20">
      <div className="flex flex-col gap-2 text-base leading-relaxed text-foreground">
        <p>{"אני מבין למה המונים פונים לזריקות, כי כשמנסים כל כך קשה ולא רואים תוצאות"}</p>
        <p className="font-bold">{"אז נמאס לנו,"}</p>
        <p>{"מרגיש שהגוף שלנו מקולקל,"}</p>
      </div>

      {/* Key emotional punch -- big spacing above */}
      <p className="mt-10 text-xl font-bold leading-snug text-foreground md:text-2xl">
        {"הגוף בוגד בנו! מסביבנו כולן יורדות במשקל ורק אנחנו לא."}
      </p>

      <div className="mt-10 flex flex-col gap-2 text-base leading-relaxed text-foreground">
        <p>{"כבר לא ברור אם הפעם כשארצה לצאת בערב הג׳ינס באמת ייסגר,"}</p>
        <p>{"מרגיש כאילו כולם רואים את הפגמים שלנו."}</p>
        <p>{"אז בוחרים באיזה תנוחה לשבת שלא ״תבליט״ את מה שלא צריך לראות."}</p>
      </div>

      {/* Stand-out line */}
      <p className="mt-8 text-lg font-bold text-foreground">
        {"כבר לא לובשים את מה שיפה. לובשים את מה שמסתיר"}
      </p>

      <div className="mt-12 flex flex-col gap-2 text-base leading-relaxed text-foreground">
        <p>{"במקום שההתעסקות שלך תהיה בלהראות את היופי שלך,"}</p>
      </div>

      <p className="mt-6 text-xl font-bold text-foreground">
        {"ההתעסקות היא ב: מה לא בסדר בי."}
      </p>

      <p className="mt-8 text-sm italic leading-relaxed text-muted-foreground">
        {"ועצוב לראות שכל זה,"}
        <br />
        {"בזמן שפשוט לא נתת תשומת לב"}
        <br />
        {"למנגנון הכי פשוט והישרדותי בגוף."}
      </p>
    </section>
  )
}
