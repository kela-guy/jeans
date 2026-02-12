export function WhatsAppTestimonials() {
  const messages = [
    {
      name: "מיכל, 42",
      text: "ירדתי 6 קילו בשבועיים!! בלי להרגיש שאני בדיאטה בכלל. הג׳ינס סוף סוף נסגר",
      time: "14:23",
    },
    {
      name: "שירה, 35",
      text: "הבעל שלי שאל אותי אם עשיתי משהו לפנים. אמרתי לו שזה כל הגוף. הוא לא האמין",
      time: "09:47",
    },
    {
      name: "רונית, 51",
      text: "אחרי שנים של דיאטות יויו, סוף סוף משהו שעובד ולא גורם לי לסבול. תודה אביב",
      time: "18:05",
    },
    {
      name: "דנה, 38",
      text: "3 ימים בתוכנית והדחף למתוק פשוט נעלם. לא מאמינה שזה אמיתי",
      time: "11:32",
    },
    {
      name: "יעל, 44",
      text: "חברות בעבודה שואלות מה קרה לי. ירדתי מידה וחצי בשבועיים. ממליצה לכולן!!",
      time: "16:58",
    },
  ]

  return (
    <section className="py-16">
      <p className="text-center text-sm font-bold tracking-wide text-muted-foreground uppercase">
        {"מה המשתתפות אומרות"}
      </p>
      <h2 className="mt-3 text-center text-2xl font-bold text-foreground md:text-3xl">
        {"הודעות אמיתיות מהתוכנית"}
      </h2>

      <div className="mt-8 flex flex-col gap-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className="max-w-[85%] rounded-lg rounded-tr-none border border-border bg-muted px-4 py-3"
            style={{ alignSelf: i % 2 === 0 ? "flex-start" : "flex-end" }}
          >
            <p className="text-xs font-bold text-foreground">{msg.name}</p>
            <p className="mt-1 text-sm leading-relaxed text-foreground">{msg.text}</p>
            <p className="mt-1 text-left text-[10px] text-muted-foreground" dir="ltr">{msg.time}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        {"ועוד מאות הודעות כאלה בכל שבוע..."}
      </p>
    </section>
  )
}
