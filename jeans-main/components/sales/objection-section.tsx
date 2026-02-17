export function ObjectionSection() {
  return (
    <section className="py-10">
      <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
        {"חששות"}
      </p>
      <h2 className="mt-2 text-xl font-bold text-foreground md:text-2xl">
        {"אם יש משהו אחד שמונע ממך להצטרף."}
      </h2>
      <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-foreground">
        <p className="text-base font-bold md:text-lg">
          <span className="marker">{"אני אומר שתצטרפי."}</span>
        </p>
        <p>
          {"2 מידות בג׳ינס זה נשמע פשוט אבל "}
          <span className="marker">{"מייצר שינוי אמיתי"}</span>
          {" והד שישפיע על איזורים נוספים בחיים. צעד שאמנם דורש אומץ אך ברגע שמצטרפים הקורס כבר יסחוף אותך ויחד איתו התוצאות."}
        </p>
        <p className="text-base font-bold md:text-lg">
          {"ותדעי לאורך כל הדרך! "}
          <span className="marker">{"אנחנו שם לספק לך את המענה שאת צריכה"}</span>
          {"."}
        </p>
      </div>
    </section>
  )
}
