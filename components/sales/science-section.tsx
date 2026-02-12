export function ScienceSection() {
  return (
    <section className="py-20">
      <p className="text-sm font-bold tracking-wide text-muted-foreground uppercase">
        {"המדע"}
      </p>

      <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
        {"אבל בסוף המדע הוכיח ש...."}
      </h2>

      <div className="mt-8 flex flex-col gap-2 text-base leading-relaxed text-foreground">
        <p>{"יש משהו אחד שאחראי לאגירת השומן בגוף"}</p>
        <p className="text-sm text-muted-foreground">{"אני קורא לו:"}</p>
      </div>

      {/* The big reveal -- maximum isolation */}
      <p className="mt-10 mb-2 text-3xl font-black leading-tight text-foreground md:text-4xl">
        {"מתג שריפת השומן של הגוף"}
      </p>
      <p className="text-sm text-muted-foreground">{"ובשפה המקצועית:"}</p>
      <p className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
        {"הורמון האינסולין"}
      </p>

      {/* Challenge bar */}
      <p className="mt-12 rounded bg-foreground px-6 py-4 text-center text-base font-bold text-primary-foreground">
        {"ואני מאתגר אתכן למצוא רופא או חוקר שלא יסכים איתי!"}
      </p>

      <div className="mt-12 flex flex-col gap-2 text-base leading-relaxed text-foreground">
        <p>{"ואם לא נתייחס להורמון הזה בתהליך,"}</p>
        <p className="font-bold">{"פשוט לא התייחסנו לפיל שבחדר."}</p>
        <p>{"נלך סביב הפיל ונתעלם ממנו אבל הוא תמיד יהיה שם."}</p>
      </div>

      <div className="mt-4 flex flex-col gap-1 text-sm text-muted-foreground">
        <p>{"הפיל... זה השומן שלנו. הפאוץ. השניצלים"}</p>
        <p>{"או איך שתרצי לקרוא לזה"}</p>
      </div>

      <p className="mt-8 text-lg font-bold text-foreground">
        {"וכל עוד נתעלם מזה, הבטן תישאר שם"}
      </p>

      <div className="mt-14 border-t border-border" />

      <p className="mt-14 text-xl font-bold leading-snug text-foreground md:text-2xl text-balance">
        {"ומה קורה כשרצים בכוח אבל בכיוון לא נכון?"}
      </p>
      <p className="mt-3 text-base text-muted-foreground">
        {"אנחנו רק מתרחקים מהמטרה."}
      </p>
    </section>
  )
}
