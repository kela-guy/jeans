import { TestimonialImage } from "./testimonial-image"
import { TESTIMONIALS, TESTIMONIAL_INDEX } from "@/lib/testimonials"

export function Closing21DaysSection() {
  return (
    <section className="py-10">
      <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
        {"הסגירה"}
      </p>
      <h2 className="mt-2 text-xl font-black text-foreground md:text-2xl">
        <span className="marker">{"בעוד 21 ימים בלבד"}</span>
      </h2>
      <p className="mt-2 text-base font-bold text-foreground">
        {"3 שבועות בדיוק"}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
        {"כשאת בסוף התוכנית"}
      </p>
      <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-foreground">
        <p>
          {"ייתכן שתחווי אשמה כי ברגע שתיהי 2 מידות פחות, ותראי שזה וואלה לא היה כל כך קשה, ואפילו נהניתי מזה."}
        </p>
        <p>
          {"יכול להיות שתאשימי את עצמך, בשאלות כמו ״למה לא עשיתי את זה קודם״."}
        </p>
        <p className="text-base font-bold md:text-lg">
          {"ואני מאמין ש"}
          <span className="marker">{"הכל מדויק, כל דבר בזמן שלו"}</span>
          {"."}
        </p>
        <p className="text-base font-bold md:text-lg">
          {"ואם זה הרגע שלך לבצע שינוי, "}
          <span className="marker">{"הרגע שלך הגיע"}</span>
          {"."}
        </p>
      </div>

      <div className="mt-10">
        <TestimonialImage {...TESTIMONIALS[TESTIMONIAL_INDEX.closing21Days]} />
      </div>
    </section>
  )
}
