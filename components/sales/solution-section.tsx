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
    <section className="flex flex-col gap-12 py-16">
      {/* The only solution */}
      <div className="flex flex-col gap-6">
        <h2 className="font-sans text-3xl font-bold text-foreground md:text-4xl">
          {"הפתרון היחיד!"}
        </h2>
        <div className="flex flex-col gap-3 text-lg leading-relaxed text-foreground">
          <p className="font-bold text-xl">{"הוא הפעלת מתג שריפת השומן"}</p>
          <p>{"כל עוד המתג הוא על כבוי, הגוף יאגור שומן"}</p>
          <p className="font-bold">
            {"וכשהמתג פעיל, הגוף שורף גם את השומן בכל אזורי הגוף"}
          </p>
          <p>{"גם את השומן הויסראלי (השומן הבטני)"}</p>
          <p>{"וגם את הארוחה האחרונה שלנו"}</p>
          <p className="font-bold">
            {"כך שהגוף גם שורף שומן וגם מפסיק אגירה של שומן חדש"}
          </p>
        </div>
      </div>

      {/* What is the switch */}
      <div className="flex flex-col gap-6">
        <h3 className="font-sans text-2xl font-bold text-foreground md:text-3xl">
          {"מהו מתג שריפת השומן?"}
        </h3>
        <div className="flex flex-col gap-3 text-lg leading-relaxed text-foreground">
          <p>{"המתג הוא הורמון אחד מעצבן במיוחד,"}</p>
          <p className="font-bold text-xl">
            {"הסיבה היחידה שבגללה עולים במשקל"}
          </p>
          <p className="text-muted-foreground">
            {"וזו לא אמירה, זה מוכח במאות רבות של מחקרים"}
          </p>
        </div>

        {/* Interactive Switch Illustration */}
        <SwitchIllustration />
      </div>

      {/* Benefits when switch is on */}
      <div className="flex flex-col gap-6">
        <h3 className="font-sans text-2xl font-bold text-foreground md:text-3xl">
          {"ברגע שתדליקי את המתג"}
        </h3>
        <ul className="flex flex-col gap-3">
          {switchOnBenefits.map((benefit, i) => (
            <li key={i} className="flex items-start gap-3 text-lg leading-relaxed text-foreground">
              <Check className="mt-1 h-5 w-5 shrink-0 text-foreground" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
