import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { TestimonialImage } from "./testimonial-image"
import { TESTIMONIALS, TESTIMONIAL_INDEX } from "@/lib/testimonials"

export function HeroSection() {
  return (
    <section className="flex h-fit flex-col items-center pb-0 pt-10">
      <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
        {"אחרי שהוכיח ל"}
        <span className="marker font-semibold text-foreground">{"100 אלף"}</span>
        {" ישראלים איך לרדת 5 קילו בשבועיים בצורה שפויה, אביב מראה לך איך"}
      </p>

      <h1 className="mt-10 mb-8 text-center text-4xl font-black leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
        {"להוריד 2 מידות בג׳ינס תוך 21 יום"}
      </h1>

      <div className="mt-2 flex max-w-xl flex-col items-center gap-5 text-center">
        <p className="text-lg font-semibold leading-relaxed text-foreground md:text-xl">
          {"במיוחד אם את מקפידה, מתאמצת ועדיין "}
          <span className="marker">{"הבטן לא יורדת"}</span>
          {"."}
        </p>
        <p className="text-base leading-relaxed text-foreground md:text-lg">
          {"את חייבת להרים את "}
          <span className="marker font-semibold">{"מתג שריפת השומן"}</span>
          {". ברגע שתעשי את זה הגוף ישחרר את השומן הבטני, יוריד את הנפיחות ויאפשר לך לרדת 2 מידות בקלות."}
        </p>
        <div className="w-full max-w-[21rem] rounded-lg overflow-hidden">
          <Image
            src="https://www.stayyoung.live/wp-content/uploads/2026/02/2size-jeans-image.png"
            alt="הגוף ישחרר את השומן הבטני - ג׳ינס ומידות"
            width={396}
            height={297}
            className="w-full h-auto object-cover"
          />
        </div>
        <p className="text-xl font-bold leading-snug text-foreground md:text-2xl">
          {"מהו המתג? ולמה פספסתי אותו עד היום?"}
        </p>
        <p className="text-sm font-medium text-muted-foreground">
          {"ההסבר בהמשך הדף"}
        </p>
      </div>

      <p className="mt-3 text-xs font-bold tracking-widest text-foreground/60 uppercase">
        {"[ללא תפריטים, ללא חדר כושר, ללא הרעבה]"}
      </p>

      <p className="mt-4 text-center text-xs font-medium text-muted-foreground">
        {"אביב גיל: המומחה הגדול בישראל להורדת השומן הבטני"}
      </p>

      <p className="mt-6 max-w-xl text-center text-xs leading-relaxed text-muted-foreground">
        {"*בלי תזונה קשוחה, בלי תפריטים, בלי ספירת קלוריות. הגוף ישיל את השומן "}
        <span className="marker text-foreground">{"לא מתוך מאמץ, אלא מתוך הרפיה"}</span>
        {"."}
      </p>

      <div className="mt-10 flex w-full max-w-xl flex-col gap-6">
        <TestimonialImage {...TESTIMONIALS[TESTIMONIAL_INDEX.hero[0]]} />
        <TestimonialImage {...TESTIMONIALS[TESTIMONIAL_INDEX.hero[1]]} />
      </div>

      <ArrowDown className="mt-10 h-5 w-5 animate-bounce text-muted-foreground" />
    </section>
  )
}
