export function PricingSection() {
  return (
    <section className="py-10" id="pricing">
      <div className="mx-auto flex w-full max-w-sm flex-col rounded border-2 border-foreground p-8">
        <p className="text-center text-xs font-bold tracking-widest uppercase text-muted-foreground">
          {"מחיר מיוחד להצטרפות היום"}
        </p>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          {"המחיר המלא של התוכנית"}
        </p>
        <p className="text-center text-base font-bold text-muted-foreground line-through">
          {"970 ש״ח"}
        </p>
        <p className="mt-2 text-center text-sm font-bold text-foreground">
          {"והיום..."}
        </p>
        <p className="mt-2 text-center text-sm text-foreground">
          {"חוץ מהתוכנית את מקבלת גם בונוסים: מאמן אישי 24/7, מאגר המתכונים לנשים עסוקות, חודש מתנה בקהילת הפרימיום. וכדי להבטיח לך שאני הולך לתת לך הרבה הרבה יותר ממה שאת משלמת, "}
          <span className="marker font-semibold">{"70% הנחה"}</span>
          {" – אני עומד על זה."}
        </p>

        <div className="mt-6 flex flex-col items-center gap-1 text-center">
          <p className="text-4xl font-black text-foreground md:text-5xl">
            <span className="marker">{"297 ש״ח בלבד!"}</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {"ניתן להצטרף ביום ב"}
          </p>
        </div>

        <p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground">
          {"*בעלות של כוס קפה אחת ליום. אם צריך כלכלית, תוותרי על כוס קפה אחת בשביל לרדת 2 מידות בג׳ינס ואני מבטיח לך שזה הדבר היחידי שאני אבקש ממך לוותר עליו."}
        </p>

        <div className="my-6 border-t border-border" />

        <ul className="flex flex-col gap-2 text-sm text-foreground">
          <li className="flex items-center gap-2">
            <span>{"+"}</span>
            <span>{"תוכנית 21 ימים – להוריד 2 מידות בג׳ינס"}</span>
          </li>
          <li className="flex items-center gap-2">
            <span>{"+"}</span>
            <span>{"מאמן אישי 24/7 (טובי AI)"}</span>
          </li>
          <li className="flex items-center gap-2">
            <span>{"+"}</span>
            <span>{"מאגר המתכונים לנשים עסוקות"}</span>
          </li>
          <li className="flex items-center gap-2">
            <span>{"+"}</span>
            <span>{"חודש מתנה בקהילת הפרימיום חטובים לחיים"}</span>
          </li>
        </ul>

        <p className="mt-3 text-center text-xs font-medium text-muted-foreground">
          {"החזר כספי אם לא תראי תוצאות – ביטול פשוט"}
        </p>
      </div>
    </section>
  )
}
