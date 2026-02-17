import { Check } from "lucide-react"
import { SwitchIllustration } from "./switch-illustration"

export function SolutionSection() {
  const switchOnBenefits = [
    "הדחף למתוק ייעלם",
    "תיהי על אנרגיה גבוה ותשוקה לחיים",
    "הגוף ימיס את השומן על בסיס קבוע",
    "יחזיר לחיים תהליכים מטאבולים רדומים",
    "ויחזור לשרוף שומן כמו פעם!",
    "בגילאי ה20",
    "תשני שינה טובה ואיכותית, תירדמי בקלות",
    "ובעיקר, הבריאות והחיוניות משתפרת פלאים.",
  ]

  return (
    <section className="py-10">
      {/* The only solution */}
      <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
        {"הפתרון היחיד!"}
      </p>

      <h2 className="mt-2 text-2xl font-black tracking-tight text-foreground md:text-3xl lg:text-4xl">
        {"הפתרון היחיד!"}
      </h2>

      <p className="mt-6 text-lg font-bold text-foreground md:text-xl">
        {"הוא הפעלת "}
        <span className="marker">{"מתג שריפת השומן"}</span>
      </p>

      <div className="mt-6 flex flex-col gap-2 text-base leading-relaxed text-foreground">
        <p>{"כל עוד המתג הוא על כבוי, הגוף יאגור שומן"}</p>
        <p className="font-bold">{"וכשהמתג פעיל, הגוף שורף גם את השומן בכל אזורי הגוף"}</p>
        <p className="text-muted-foreground">{"גם את השומן הויסראלי (השומן הבטני)"}</p>
        <p className="text-muted-foreground">{"וגם את הארוחה האחרונה שלנו"}</p>
      </div>

      <p className="mt-5 text-base font-bold text-foreground md:text-lg">
        {"כך שהגוף גם שורף שומן "}
        <span className="marker">{"וגם מפסיק אגירה של שומן חדש"}</span>
      </p>

      <div className="mt-14">
        <h3 className="text-xl font-bold text-foreground md:text-2xl">
          {"מהו מתג שריפת השומן?"}
        </h3>

        <div className="mt-5 flex flex-col gap-2 text-base leading-relaxed text-foreground">
          <p>{"המתג הוא הורמון אחד מעצבן במיוחד,"}</p>
          <p className="font-bold">
            <span className="marker">{"הסיבה היחידה שבגללה עולים במשקל"}</span>
          </p>
          <p className="text-sm text-muted-foreground">{"וזו לא אמירה, זה מוכח במאות רבות של מחקרים"}</p>
        </div>

        {/* Interactive Switch Illustration */}
        <div className="mt-10">
          <SwitchIllustration />
        </div>
      </div>

      <div className="mt-14">
        <h3 className="text-xl font-bold text-foreground md:text-2xl">
          {"ברגע שתדליקי את המתג"}
        </h3>

        <ul className="mt-6 flex flex-col gap-3">
          {switchOnBenefits.map((benefit, i) => (
            <li key={i} className="flex items-start gap-3 text-base leading-relaxed text-foreground">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
