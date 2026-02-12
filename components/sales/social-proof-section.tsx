export function SocialProofSection() {
  return (
    <section className="flex flex-col gap-8 py-16">
      <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
        {"וכולם יראו את זה!"}
      </h2>

      <div className="flex flex-col gap-4 text-lg leading-relaxed text-foreground">
        <p className="text-muted-foreground">
          {"המשפט שחוזר אצלי מלקוחות לאחרונה:"}
        </p>
        <blockquote className="border-r-4 border-foreground pr-6 py-2">
          <p className="font-serif text-2xl font-bold italic text-foreground md:text-3xl">
            {"״לא מאמינים לי שירדתי בלי זריקות״"}
          </p>
        </blockquote>
        <p className="font-bold text-xl">{"כי זה פשוט עובד."}</p>
      </div>

      <div className="flex flex-col gap-3 text-lg leading-relaxed text-foreground">
        <p>
          {"לקבל מחמאות מהסביבה ולסובב ראשים זה רק חלק ממה שהמשתתפות בתוכנית מתארות."}
        </p>
        <p className="text-muted-foreground">
          {"ברור לי שאת לא נרשמת בשביל זה, אבל זה תמיד נחמד."}
        </p>
      </div>
    </section>
  )
}
