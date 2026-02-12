import { Check } from "lucide-react"
import { SwitchIllustration } from "./switch-illustration"

export function SolutionSection() {
  const switchOnBenefits = [
    "הדחף למתוק ייעלם כלא היה",
    "תהיה על אנרגיה גבוה ותשוקה לחיים",
    "הגוף ימיס את השומן על בסיס קבוע",
    "הגוף יחזיר לחיים תהליכים מטאבולים רדומים",
    "ויחזור לשרוף שומן כמו פעם! בגילאי ה20.",
    "תשני שינה טובה ואיכותית, תירדמי בקלות",
    "ובעיקר, הבריאות והחיוניות משתפרת פלאים.",
  ]

  return (
    <section className="py-20">
      {/* The only solution */}
      <p className="text-sm font-bold tracking-wide text-muted-foreground uppercase">
        {"הפתרון"}
      </p>

      <h2 className="mt-3 text-3xl font-black text-foreground md:text-4xl">
        {"\u05D4\u05E4\u05EA\u05E8\u05D5\u05DF \u05D4\u05D9\u05D7\u05D9\u05D3!"}
      </h2>

      <p className="mt-8 text-xl font-bold text-foreground">
        {"הוא הפעלת מתג שריפת השומן"}
      </p>

      <div className="mt-4 flex flex-col gap-2 text-base leading-relaxed text-foreground">
        <p>{"כל עוד המתג הוא על כבוי, הגוף יאגור שומן"}</p>
        <p className="font-bold">{"וכשהמתג פעיל, הגוף שורף גם את השומן בכל אזורי הגוף"}</p>
        <p className="text-muted-foreground">{"גם את השומן הויסראלי (השומן הבטני)"}</p>
        <p className="text-muted-foreground">{"וגם את הארוחה האחרונה שלנו"}</p>
      </div>

      <p className="mt-6 text-lg font-bold text-foreground">
        {"כך שהגוף גם שורף שומן וגם מפסיק אגירה של שומן חדש"}
      </p>

      {/* What is the switch */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-foreground md:text-3xl">
          {"מהו מתג שריפת השומן?"}
        </h3>

        <div className="mt-6 flex flex-col gap-2 text-base leading-relaxed text-foreground">
          <p>{"המתג הוא הורמון אחד מעצבן במיוחד,"}</p>
          <p className="text-lg font-bold">{"הסיבה היחידה שבגללה עולים במשקל"}</p>
          <p className="text-sm text-muted-foreground">{"וזו לא אמירה, זה מוכח במאות רבות של מחקרים"}</p>
        </div>

        {/* Interactive Switch Illustration */}
        <div className="mt-10">
          <SwitchIllustration />
        </div>
      </div>

      {/* Benefits when switch is on */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-foreground md:text-3xl">
          {"ברגע שתדליקי את המתג"}
        </h3>

        <ul className="mt-8 flex flex-col gap-3">
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
