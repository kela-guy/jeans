export function SocialProofSection() {
  return (
    <section className="py-10 pl-6 pr-5 md:pl-8 md:pr-6">
      <h2 className="text-2xl font-bold tracking-normal text-foreground md:text-3xl">
        {"וכולם יראו את זה!"}
      </h2>

      <p className="mt-6 text-sm text-muted-foreground">
        {"המשפט שחוזר אצלי מלקוחות לאחרונה:"}
      </p>

      {/* Big quote -- massive isolation to make it the centerpiece */}
      <blockquote className="my-10 border-r-4 border-foreground pr-6 py-1">
        <p className="text-2xl font-bold italic leading-snug text-foreground md:text-3xl text-balance">
          {"״לא מאמינים לי שירדתי בלי זריקות״"}
        </p>
      </blockquote>

      <p className="text-lg font-bold text-foreground">
        {"כי זה פשוט עובד."}
      </p>

      <div className="mt-8 flex flex-col gap-2 text-base leading-relaxed text-foreground">
        <p>{"לקבל מחמאות מהסביבה ולסובב ראשים זה רק חלק ממה שהמשתתפות בתוכנית מתארות."}</p>
        <p className="text-sm text-muted-foreground">{"ברור לי שאת לא נרשמת בשביל זה, אבל זה תמיד נחמד."}</p>
      </div>
    </section>
  )
}
