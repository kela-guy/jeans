import { TestimonialImage } from "./testimonial-image"
import { TESTIMONIALS, TESTIMONIAL_INDEX } from "@/lib/testimonials"

export function ScienceSection() {
  return (
    <section className="py-10">
      <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
        {"המדע"}
      </p>

      <h2 className="mt-2 text-xl font-bold text-foreground md:text-2xl">
        {"אבל בסוף המדע הוכיח ש...."}
      </h2>

      <div className="mt-6 flex flex-col gap-2 text-base leading-relaxed text-foreground">
        <p>{"יש משהו אחד שאחראי לאגירת השומן בגוף"}</p>
        <p className="text-sm text-muted-foreground">{"אני קורא לו:"}</p>
      </div>

      <p className="mt-8 mb-1 text-2xl font-black leading-tight text-foreground md:text-3xl">
        <span className="marker">{"מתג שריפת השומן של הגוף"}</span>
      </p>
      <p className="text-xs text-muted-foreground">{"ובשפה המקצועית:"}</p>
      <p className="mt-1 text-xl font-bold text-foreground md:text-2xl">
        <span className="marker">{"הורמון האינסולין"}</span>
      </p>

      <p className="mt-10 rounded-lg border-2 border-black bg-transparent px-6 py-4 text-center text-base font-bold text-foreground shadow-md md:text-lg">
        {"ואני מאתגר אתכן למצוא רופא או חוקר שלא יסכים איתי!"}
      </p>

      <div className="mt-10 flex flex-col gap-2 text-base leading-relaxed text-foreground">
        <p>{"ואם לא נתייחס להורמון הזה בתהליך,"}</p>
        <p className="font-bold">
          <span className="marker">{"פשוט לא התייחסנו לפיל שבחדר"}</span>
          {"."}
        </p>
        <p>{"נלך סביב הפיל ונתעלם ממנו אבל הוא תמיד יהיה שם."}</p>
      </div>

      <div className="mt-3 flex flex-col gap-1 text-sm text-muted-foreground">
        <p>{"הפיל... זה השומן שלנו. הפאוץ. השניצלים"}</p>
        <p>{"או איך שתרצי לקרוא לזה"}</p>
      </div>

      <p className="mt-6 text-base font-bold text-foreground md:text-lg">
        {"וכל עוד נתעלם מזה, "}
        <span className="marker">{"הבטן תישאר שם"}</span>
      </p>

      <div className="mt-12 border-t border-border" />

      <p className="mt-12 text-lg font-bold leading-snug text-foreground md:text-xl text-balance">
        {"ומה קורה כש"}<span className="marker">{"רצים בכוח אבל בכיוון לא נכון"}</span>
        {"?"}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        {"אנחנו רק מתרחקים מהמטרה."}
      </p>

      <div className="mt-10">
        <TestimonialImage {...TESTIMONIALS[TESTIMONIAL_INDEX.science]} />
      </div>
    </section>
  )
}
