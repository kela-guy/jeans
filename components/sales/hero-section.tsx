import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-8 pb-16 pt-8">
      {/* Announcement bar */}
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="mx-auto h-48 w-full max-w-md rounded border border-border bg-muted flex items-center justify-center">
          <span className="text-sm text-muted-foreground">{"[תמונה של ערוצי טלוויזיה ועיתונות]"}</span>
        </div>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {"אחרי שהוכיח ל100 אלף ישראלים איך לרדת 5 קילו בשבועיים בצורה שפויה, אביב מראה לך"}
        </p>
      </div>

      {/* Main headline */}
      <h1 className="text-center font-sans text-4xl font-black leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
        {"איך להוריד 2 מידות בג׳ינס"}
        <br />
        {"תוך 21 יום"}
      </h1>

      {/* Subheadline */}
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="max-w-2xl font-sans text-xl font-medium leading-relaxed text-foreground md:text-2xl text-balance">
          {"בשבוע הקרוב נפעיל לך את מתג שריפת השומן"}
          <br />
          {"שיאפשר לגוף שלך להמיס את השומן הבטני"}
        </h2>
        <p className="text-lg font-bold text-foreground">
          {"[ללא תפריטים, ללא חדר כושר, ללא הרעבה]"}
        </p>
      </div>

      {/* Hero image placeholder */}
      <div className="mx-auto h-72 w-full max-w-xl rounded border border-border bg-muted flex items-center justify-center md:h-96">
        <span className="text-sm text-muted-foreground">{"[תמונה ראשית]"}</span>
      </div>

      <ArrowDown className="h-6 w-6 animate-bounce text-muted-foreground" />
    </section>
  )
}
