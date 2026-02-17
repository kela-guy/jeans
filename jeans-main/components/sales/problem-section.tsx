import Image from "next/image"

export function ProblemSection() {
  return (
    <section className="py-10 pl-5 pr-6 md:pl-6 md:pr-8">
      <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
        {"האמת הכואבת"}
      </p>

      <h2 className="mt-3 text-2xl font-bold leading-snug text-foreground md:text-3xl text-balance">
        {"ככל שאת ״מקפידה״ יותר, כך את "}
        <span className="marker">{"מתרחקת מבטן שטוחה"}</span>
      </h2>

      <div className="mt-6 flex flex-col gap-1 text-base leading-relaxed text-foreground">
        <p>{"במקום להוריד את הבטן,"}</p>
        <p>{"הגוף רק נכנס לסטרס"}</p>
        <p>{"והסטרס הזה, דווקא גורם לו "}
          <span className="marker">{"לאגור שומן"}</span>
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-4 border-r-4 border-foreground pr-6">
        <p className="text-base leading-relaxed text-foreground">
          <span className="marker font-semibold">{"תפחיתי קלוריות,"}</span>{" "}
          {"הוא ייכנס למצוקה ויחשוב שאין לו מזון"}
        </p>
        <p className="text-base leading-relaxed text-foreground">
          <span className="marker font-semibold">{"תתאמני יותר,"}</span>{" "}
          {"הוא ירגיש עומס ויצבור שומן שיעזור לו להתמודד"}
        </p>
        <p className="text-base leading-relaxed text-foreground">
          <span className="marker font-semibold">{"תשני את התזונה באופן קיצוני,"}</span>{" "}
          {"הוא יאגור שומן ויערך לגרוע מכל"}
        </p>
      </div>

      <div className="mt-14">
        <p className="text-base font-bold text-foreground">
          {"אני מאמין שאת עושה הכל נכון..."}
        </p>

        <div className="mt-5 flex flex-col gap-2 text-base leading-relaxed text-foreground">
          <p>{"ועדיין, סביר שלא תראי ירידה של השומן הבטני."}</p>
          <p>{"דיאטות שעבדו בעבר, "}
            <span className="marker">{"לא עובדות היום"}</span>
          </p>
          <p>{"למרות שאת מתמידה יותר מתמיד, רשומה לפילאטיס, יוגה, במודעות לגוף"}</p>
        </div>

        <p className="mt-8 text-lg font-bold leading-snug text-foreground md:text-xl">
          {"ועדיין "}
          <span className="marker">{"הפאוץ הזה תקוע שם"}</span>
          {", עקשן ולא רוצה לשחרר."}
        </p>

        <p className="mt-2 text-sm italic text-muted-foreground">
          {"הוא כבר הפך להיות חלק ממך."}
        </p>
      </div>

      {/* מיקום תמונה – הבעיה/סטרס */}
      <div className="mt-10 aspect-video w-full max-w-xl overflow-hidden rounded-lg border-2 border-border bg-muted mx-auto relative">
        <Image
          src="/placeholder.svg"
          alt="האמת הכואבת – סטרס"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 36rem"
          unoptimized
        />
      </div>
    </section>
  )
}
