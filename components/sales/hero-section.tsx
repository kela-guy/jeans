import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="flex flex-col items-center pb-20 pt-10">
      {/* Announcement bar */}
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="mx-auto h-48 w-full max-w-md rounded border border-border bg-muted flex items-center justify-center">
          <span className="text-sm text-muted-foreground">{"[תמונה של ערוצי טלוויזיה ועיתונות]"}</span>
        </div>
        <p className="mt-2 text-base leading-relaxed text-muted-foreground">
          {"אחרי שהוכיח ל100 אלף ישראלים איך לרדת 5 קילו בשבועיים בצורה שפויה, אביב מראה לך"}
        </p>
      </div>

      {/* Main headline -- massive vertical isolation */}
      <h1 className="mt-12 mb-10 text-center text-4xl font-black leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
        {"איך להוריד 2 מידות בג׳ינס"}
        <br />
        {"תוך 21 יום"}
      </h1>

      {/* Subheadline */}
      <h2 className="max-w-xl text-center text-xl font-medium leading-relaxed text-foreground md:text-2xl text-balance">
        {"בשבוע הקרוב נפעיל לך את מתג שריפת השומן"}
        <br />
        {"שיאפשר לגוף שלך להמיס את השומן הבטני"}
      </h2>

      {/* Qualifier -- tighter to subheadline, smaller */}
      <p className="mt-4 text-sm font-bold tracking-wide text-foreground/70 uppercase">
        {"[ללא תפריטים, ללא חדר כושר, ללא הרעבה]"}
      </p>

      {/* Hero image placeholder */}
      <div className="mt-12 mx-auto h-72 w-full max-w-xl rounded border border-border bg-muted flex items-center justify-center md:h-96">
        <span className="text-sm text-muted-foreground">{"[תמונה ראשית]"}</span>
      </div>

      <ArrowDown className="mt-10 h-5 w-5 animate-bounce text-muted-foreground" />
    </section>
  )
}
