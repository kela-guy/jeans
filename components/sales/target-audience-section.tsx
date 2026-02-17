import { Check, X } from "lucide-react"

export function TargetAudienceSection() {
  const forWhom = [
    "נשים שניסו דיאטות רבות ולא הצליחו",
    "נשים שרוצות לרדת במשקל בצורה בריאה ושפויה",
    "נשים שמוכנות להשקיע 21 יום בשביל שינוי אמיתי",
    "נשים שרוצות להבין את הגוף שלהן ולעבוד איתו, לא נגדו",
  ]

  const notFor = [
    "מי שמחפשת פתרון קסם ללא מאמץ",
    "מי שלא מוכנה להקדיש 21 יום לתהליך",
    "מי שמעדיפה להמשיך עם דיאטות יויו",
  ]

  return (
    <section className="py-10">
      <div>
        <h3 className="text-xl font-bold text-foreground md:text-2xl">
          {"למי זה מתאים"}
        </h3>
        <ul className="mt-6 flex flex-col gap-3">
          {forWhom.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base leading-relaxed text-foreground">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-bold text-foreground md:text-2xl">
          {"למי זה לא מתאים"}
        </h3>
        <ul className="mt-6 flex flex-col gap-3">
          {notFor.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
              <X className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
