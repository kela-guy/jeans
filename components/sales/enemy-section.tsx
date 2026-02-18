import { TestimonialImage } from "./testimonial-image"
import { TESTIMONIALS, TESTIMONIAL_INDEX } from "@/lib/testimonials"

export function EnemySection() {
  return (
    <section className="py-10">
      <h2 className="text-xl font-bold text-foreground md:text-2xl">
        {"מוכרים לך "}
        <span className="marker">{"פתרון קסם"}</span>
        {"!"}
      </h2>

      <div className="mt-6 flex flex-col gap-2 text-base leading-relaxed text-foreground">
        <p>{"השוק מלא בגורואים שכל אחד מבטיח למה השיטה שלו הכי טובה,"}</p>
        <p>{"דיאטות כסאח כאלו ואחרות, כל יום מתעוררת לחיים תזונה חדשה"}</p>
        <p className="text-sm text-muted-foreground">{"ספירת קלוריות, דיאטת מיצים, למי יש סבלנות וזמן לזה."}</p>
      </div>

      <p className="mt-6 text-sm italic leading-relaxed text-muted-foreground">
        {"זה עדיף על ה״גורואים״ שביום בהיר אחד החליטו ״להמציא״ תזונה חדשה ולקרוא לה בשם המשפחה שלהם..."}
      </p>

      <div className="mt-8 flex flex-col gap-2 text-base leading-relaxed text-foreground">
        <p>{"בזמן שכל הגורואים מספרים לך, למה השיטה שלהם הכי ייחודית"}</p>
        <p>{"ולמה היא תעבוד עבורך"}</p>
      </div>

      <p className="mt-6 text-lg font-bold text-foreground md:text-xl">
        <span className="marker">{"את רק שפן הנסיונות שלהם"}</span>
        {"."}
      </p>

      <div className="mt-6 flex flex-col gap-2 text-base leading-relaxed text-foreground">
        <p>{"את זו שמנסה עוד דיאטה ועוד תזונה, זריקות, או תוספים."}</p>
        <p className="text-sm text-muted-foreground">{"כאילו שאולי הפעם זה ישנה משהו.."}</p>
      </div>

      <p className="mt-6 font-bold text-foreground">
        {"אבל זה בעיקר מייאש ומוריד תקווה."}
      </p>

      {/* Confidence crash -- isolated block */}
      <div className="mt-12 flex flex-col gap-2 text-base leading-relaxed text-foreground">
        <p>{"וכשזה לא עובד.."}</p>
        <p className="font-bold">{"או יותר גרוע, כשזה עובד וחוזרים חזרה את כל המשקל."}</p>
      </div>

      <p className="mt-6 text-lg font-bold text-foreground md:text-xl">
        <span className="marker">{"שוב הביטחון העצמי מתרסק לריצפה"}</span>
        {"....."}
      </p>

      <p className="mt-2 text-sm text-muted-foreground">{"וכל זה...."}</p>

      <div className="mt-5 flex flex-col gap-1 text-base leading-relaxed text-foreground">
        <p>{"רק בשביל להרגיש טוב יותר בגוף שלך, להיות בריאה יותר..."}</p>
      </div>

      <p className="mt-5 text-lg font-bold text-foreground">
        {"כי "}<span className="marker">{"זה מגיע לך"}</span>
        {"!"}
      </p>

      <div className="my-12 border-t border-border" />

      <div className="flex flex-col gap-2 text-base leading-relaxed text-foreground">
        <p>{"בזמן שגורו אחד אומר שמשהו בריא, גורו אחר אומר שזה מסוכן."}</p>
        <p>{"מייצרים אצלינו בלבול מתמיד וספק האם אנחנו בדרך הנכונה."}</p>
      </div>

      <p className="mt-6 text-base font-bold leading-snug text-foreground md:text-lg">
        {"ובעיקר, "}
        <span className="marker">{"הבטן נשארת שם"}</span>
        {".. והיא הדבר הקבוע היחיד בכל התהליך המייגע הזה."}
      </p>

      <div className="mt-12 flex flex-col gap-2 text-base leading-relaxed text-foreground">
        <p>{"אני בטוח שניסית והתאמצת מאוד להקפיד על כל ההנחיות ולשמור על המשקל..."}</p>
        <p className="font-bold">{"אבל אם התחלת תזונה בצורה לא נכונה זה לא משנה כמה תתאמצי.."}</p>
        <p>{"לא רק שהירידה במשקל תיפסק, זה רק עניין של זמן עד שתעלי את כל המשקל בחזרה."}</p>
        <p className="mt-1 text-sm italic text-muted-foreground">{"(הסיפור המוכר)"}</p>
      </div>

      <div className="mt-12 rounded border-2 border-foreground px-6 py-6 md:px-8">
        <div className="flex flex-col gap-3 text-base leading-relaxed text-foreground">
          <p className="font-bold">{"נוח להם שכל אישה עושה 3 דיאטות בשנה או יותר."}</p>
          <p className="font-bold">{"נוח להם כששוב ושוב נרשמים לתוכניות שלהם."}</p>
        </div>
        <p className="mt-5 text-lg font-bold text-foreground md:text-xl">
          <span className="marker">{"נוח להם להטעות אותך"}</span>
          {"..."}
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
        <p>{"אני לא יודע אם הם עושים את זה בכוונה או בטעות"}</p>
        <p>{"האמת היא שכל אחד מהם יכול להמציא ״שיטה״"}</p>
        <p>{"כל אחד יכול לספר, למה זה עבד עבורו ולמה זה ״בטוח יעבוד עבורך."}</p>
      </div>

      <div className="mt-10">
        <TestimonialImage {...TESTIMONIALS[TESTIMONIAL_INDEX.enemy]} />
      </div>
    </section>
  )
}
