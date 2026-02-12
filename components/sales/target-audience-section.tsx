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
    <section className="flex flex-col gap-10 py-16">
      <div className="flex flex-col gap-6">
        <h3 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
          {"למי זה מתאים"}
        </h3>
        <ul className="flex flex-col gap-3">
          {forWhom.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-lg leading-relaxed text-foreground">
              <Check className="mt-1 h-5 w-5 shrink-0 text-foreground" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
          {"למי זה לא מתאים"}
        </h3>
        <ul className="flex flex-col gap-3">
          {notFor.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-lg leading-relaxed text-muted-foreground">
              <X className="mt-1 h-5 w-5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
