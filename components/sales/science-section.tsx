export function ScienceSection() {
  return (
    <section className="flex flex-col gap-8 py-16">
      <h2 className="font-sans text-3xl font-bold text-foreground md:text-4xl">
        {"אבל בסוף המדע הוכיח ש…."}
      </h2>

      <div className="flex flex-col gap-4 text-lg leading-relaxed text-foreground">
        <p>{"יש משהו אחד שאחראי לאגירת השומן בגוף"}</p>
        <p>{"אני קורא לו:"}</p>
        <p className="font-sans text-3xl font-black text-foreground md:text-4xl">
          {"מתג שריפת השומן של הגוף"}
        </p>
        <p className="text-muted-foreground">{"ובשפה המקצועית:"}</p>
        <p className="font-sans text-2xl font-bold text-foreground md:text-3xl">
          {"הורמון האינסולין"}
        </p>
      </div>

      <p className="rounded bg-foreground px-6 py-4 text-center text-lg font-bold text-primary-foreground">
        {"ואני מאתגר אתכן למצוא רופא או חוקר שלא יסכים איתי!"}
      </p>

      <div className="flex flex-col gap-4 text-lg leading-relaxed text-foreground">
        <p>{"ואם לא נתייחס להורמון הזה בתהליך,"}</p>
        <p className="font-bold">{"פשוט לא התייחסנו לפיל שבחדר."}</p>
        <p>
          {"נלך סביב הפיל ונתעלם ממנו אבל הוא תמיד יהיה שם."}
        </p>
        <p className="text-muted-foreground">
          {"הפיל… זה השומן שלנו. הפאוץ. השניצלים"}
        </p>
        <p className="text-muted-foreground">{"או איך שתרצי לקרוא לזה"}</p>
        <p className="font-bold text-xl">
          {"וכל עוד נתעלם מזה, הבטן תישאר שם"}
        </p>
      </div>

      <div className="my-4 border-t border-border" />

      <p className="font-sans text-xl font-bold leading-relaxed text-foreground md:text-2xl text-balance">
        {"ומה קורה כשרצים בכוח אבל בכיוון לא נכון?"}
        <br />
        <span className="text-muted-foreground">{"אנחנו רק מתרחקים מהמטרה."}</span>
      </p>
    </section>
  )
}
