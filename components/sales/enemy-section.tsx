export function EnemySection() {
  return (
    <section className="flex flex-col gap-8 py-16">
      <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
        {"מוכרים לך פתרון קסם!"}
      </h2>

      <div className="flex flex-col gap-4 text-lg leading-relaxed text-foreground">
        <p>
          {"השוק מלא בגורואים שכל אחד מבטיח למה השיטה שלו הכי טובה,"}
        </p>
        <p>
          {"דיאטות כסאח כאלו ואחרות, כל יום מתעוררת לחיים תזונה חדשה"}
        </p>
        <p className="text-muted-foreground">
          {"ספירת קלוריות, דיאטת מיצים, למי יש סבלנות וזמן לזה."}
        </p>
      </div>

      <p className="text-lg leading-relaxed text-foreground italic">
        {"זה עדיף על ה״גורואים״ שביום בהיר אחד החליטו ״להמציא״ תזונה חדשה ולקרוא לה בשם המשפחה שלהם…"}
      </p>

      <div className="flex flex-col gap-4 text-lg leading-relaxed text-foreground">
        <p>
          {"בזמן שכל הגורואים מספרים לך, למה השיטה שלהם הכי ייחודית"}
        </p>
        <p>{"ולמה היא תעבוד עבורך"}</p>
        <p className="font-bold text-xl">{"את רק שפן הנסיונות שלהם."}</p>
        <p>
          {"את זו שמנסה עוד דיאטה ועוד תזונה, זריקות, או תוספים."}
        </p>
        <p className="text-muted-foreground">
          {"כאילו שאולי הפעם זה ישנה משהו.."}
        </p>
        <p className="font-bold">{"אבל זה בעיקר מייאש ומוריד תקווה."}</p>
      </div>

      <div className="flex flex-col gap-3 text-lg leading-relaxed text-foreground">
        <p>{"וכשזה לא עובד.."}</p>
        <p className="font-bold">
          {"או יותר גרוע, כשזה עובד וחוזרים חזרה את כל המשקל."}
        </p>
        <p className="text-xl font-bold">
          {"שוב הביטחון העצמי מתרסק לריצפה….."}
        </p>
        <p>{"וכל זה…."}</p>
        <p className="text-lg">
          {"רק בשביל להרגיש טוב יותר בגוף שלך, להיות בריאה יותר…"}
        </p>
        <p className="font-bold text-xl">{"כי זה מגיע לך!"}</p>
      </div>

      <div className="my-4 border-t border-border" />

      <div className="flex flex-col gap-4 text-lg leading-relaxed text-foreground">
        <p>
          {"בזמן שגורו אחד אומר שמשהו בריא, גורו אחר אומר שזה מסוכן."}
        </p>
        <p>{"מייצרים אצלינו בלבול מתמיד וספק האם אנחנו בדרך הנכונה."}</p>
        <p className="font-bold">
          {"ובעיקר, הבטן נשארת שם.. והיא הדבר הקבוע היחיד בכל התהליך המייגע הזה."}
        </p>
      </div>

      <div className="flex flex-col gap-4 text-lg leading-relaxed text-foreground">
        <p>
          {"אני בטוח שניסית והתאמצת מאוד להקפיד על כל ההנחיות ולשמור על המשקל…"}
        </p>
        <p className="font-bold">
          {"אבל אם התחלת תזונה בצורה לא נכונה זה לא משנה כמה תתאמצי.."}
        </p>
        <p>
          {"לא רק שהירידה במשקל תיפסק, זה רק עניין של זמן עד שתעלי את כל המשקל בחזרה."}
        </p>
        <p className="text-muted-foreground italic">{"(הסיפור המוכר)"}</p>
      </div>

      {/* They benefit from your failure */}
      <div className="rounded border-2 border-foreground p-6 md:p-8">
        <div className="flex flex-col gap-3 text-lg leading-relaxed text-foreground">
          <p className="font-bold">
            {"נוח להם שכל אישה עושה 3 דיאטות בשנה או יותר."}
          </p>
          <p className="font-bold">
            {"נוח להם כששוב ושוב נרשמים לתוכניות שלהם."}
          </p>
          <p className="font-bold text-xl">
            {"נוח להם להטעות אותך…"}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 text-lg leading-relaxed text-muted-foreground">
        <p>{"אני לא יודע אם הם עושים את זה בכוונה או בטעות"}</p>
        <p>
          {"האמת היא שכל אחד מהם יכול להמציא ״שיטה״"}
        </p>
        <p>
          {"כל אחד יכול לספר, למה זה עבד עבורו ולמה זה ״בטוח יעבוד עבורך."}
        </p>
      </div>
    </section>
  )
}
