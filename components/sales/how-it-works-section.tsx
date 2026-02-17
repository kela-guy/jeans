const STEPS = [
  "לוחצת על כפתור ההרשמה ממלאת פרטים",
  "עוברת לתשלום באמצעות כרטיס אשראי",
  "תוך 5 דקות תקבלי לאימייל גישה לקורס מהאפליקציה",
  "הקורס ייפתח לך יום אחרי יום וטובי המאמן AI שלנו שם לצידך בכל שלב.",
]

export function HowItWorksSection() {
  return (
    <section className="py-10">
      <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
        {"ההרשמה"}
      </p>
      <h2 className="mt-2 text-xl font-bold text-foreground md:text-2xl">
        {"איך זה הולך לעבוד:"}
      </h2>
      <ul className="mt-6 flex flex-col gap-4">
        {STEPS.map((step, i) => (
          <li key={i} className="flex items-start gap-3 text-base leading-relaxed text-foreground">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-bold text-primary-foreground">
              {i + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-base font-bold text-foreground">
        <span className="marker">{"התוכנית נשארת פתוחה לחצי שנה!"}</span>
      </p>
    </section>
  )
}
