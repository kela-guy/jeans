import { Check } from "lucide-react"

const WEEK1_BULLETS = [
  "לא נתמקד ב״מה״ וב״כמה״ כמו בשיטות אחרות, אלא ב״איך״ לאכול ו״מתי״",
  "כלי שלוקח שתי דקות ו17 שניות שישחרר אותך מהדחף למתוק",
  "השקר הלבן: המאכל שאת כנראה אוכלת על בסיס יומי ובטוחה שהוא בריא ומרזה אבל בפועל גורם לך להרגיש שהגינס הולך ומתהדק",
  "נראה איך לאפשר לגוף להרפות מהסטרס ולעצור את אגירת השומן.",
]
const WEEK1_FEEL = "תרד הנפיחות מהבטן ומהפנים, תרגישי קלילות אחרי ארוחה, הירדמות מהירה יותר ושינה עמוקה יותר. בשבוע זה, החברות הקרובות כבר שמות לב."

const WEEK2_BULLETS = [
  "פותחים את הסכר: מאפשרים לגוף להרפות ולשחרר את השומן",
  "נטעם כפית אחת שיש לך במזווה שתייצר תחושת שובע ואנרגיה ל5 שעות",
  "הסודות נחשפים: תראי בדיוק מה עובד על הגוף שלך",
  "6 מזונות ה״בריאות״ שמנפחים לך את הבטן",
  "הגוף פשוט חוזר לעבוד כמו פעם.",
  "מזה לעזאזל מזונות מיט״ה, כמה את אוכלת מהם כל יום בלי לדעת, ולמה כל מזון כזה יוריד לך את המתג מייד",
]
const WEEK2_FEEL = "תרגישי את הנפיחות יורדת בכל הגוף. תרגישי זאת אפילו באצבעות הידיים כשטבעת הנישואין תרד בקלות. התוצאות מורגשות, נכנסת למומנטום. המאבק מול פיתויים נחלש, התהליך מרגיש טבעי ומספק לך אנרגיה."

const WEEK3_BULLETS = [
  "איך להשאר איתנה מול פיתויים והרגלים ישנים",
  "תרגיל של 45 שניות לחיזוק הדימוי העצמי שגם הסביבה תרגיש אותו",
  "להראות טוב בכל בגד: יציבה ועמידה נכונה.",
  "ירידה דרמטית ב״קרייבינג!",
  "כך תפתחי בוקר מנצח!",
  "בוסט למטאבוליזם - 2 כלים ש״מרמים״ את הגוף כדי להכניס את שריפת השומן לבוסט",
]
const WEEK3_FEEL = "כבר לא צריך להכיס את הבטן! גם אלו שאף פעם לא שמים לב לשינוי, ישימו לב שמשהו השתנה. המידות יורדות, הנפיחות נעלמה. איכות השינה השתפרה, האנרגיה, חיוניות, עור הפנים זוהר. הבגדים יושבים הרבה יותר טוב. הסביבה תרגיש את השינוי שעשית, זה לא רק במשקל, אלא באנרגיה ובמה שאת משדרת. ובעיקר... זה הזמן לקנות ג׳ינסים ב2 מידות פחות!"

export function OfferSection() {
  return (
    <section className="py-10">
      <div className="text-center">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {"אחרי שבשנת 2025 אביב הראה ל"}
          <span className="marker font-semibold text-foreground">{"100 אלף"}</span>
          {" ישראלים כיצד להוריד 5 קילו בשבועיים עכשיו הוא בא להראות לך כיצד "}
          <span className="marker">{"להוריד 2 מידות בג׳ינס"}</span>
          {" וכל זה בקלות תוך 21 ימים בקורס דיגיטלי."}
        </p>
      </div>

      <div className="mt-14">
        <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
          {"מה את מקבלת"}
        </p>
        <h2 className="mt-2 text-xl font-black leading-snug text-foreground md:text-2xl">
          {"אז מה את מקבלת בקורס"}
        </h2>
        <h3 className="mt-2 text-lg font-bold text-foreground md:text-xl">
          {"להוריד 2 מידות בג׳ינס תוך 21 יום"}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-foreground">
          {"ברגע שאת משלמת ומצטרפת את מגיעה ישר לאפליקציה שלנו שם ייפתח הקורס. כל יום נפתח שיעור חדש של עד 7 דקות. 21 שיעורים - 21 ימים שיבילו אותך כל הדרך ל2 מידות פחות בג׳ינס."}
        </p>
        <p className="mt-4 text-base font-bold text-foreground">
          <span className="marker">{"אין לנו תפריטים, לא סופרים קלוריות, לא משנים לך את התזונה"}</span>
        </p>
        <p className="mt-4 text-base leading-relaxed text-foreground">
          {"אז מה כן? מוסיפים מאכלים לתפריט, משנים את סדר הארוחות, מתמקדים פחות ב״מה״ אוכלים וב״כמה״ אוכלים ומתמקדים יותר ב״איך״ אוכלים ו״מתי״ אוכלים."}
        </p>
        <p className="mt-4 text-base leading-relaxed text-foreground">
          {"כך שלא נפגע לך במה שאת אוהבת, אלא נראה לך איך לשלב, לאזן ויחד עם זאת לרדת במשקל מהר, להצר היקפים ולראות תוצאות בזמן קצר. זה בדיוק מה שקורה כשמעניקים לגוף את התנאים הנכונים. הורדת המשקל והחיטוב זה לא מתוך מאמץ, זה מתוך הרפיה."}
        </p>
      </div>

      {/* ב3 שבועות מרוכזים! */}
      <div className="mt-16">
        <h3 className="text-2xl font-black text-foreground md:text-3xl">
          {"ב3 שבועות מרוכזים!"}
        </h3>
        <p className="mt-2 text-base text-muted-foreground">
          {"הנה מה שהולך לקרות:"}
        </p>

        {/* שבוע 1 */}
        <div className="mt-10 rounded-md border-2 border-border p-6">
          <h4 className="text-xl font-bold text-foreground">
            {"שבוע 1: מרימים את הסוויץ"}
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {"בשבוע הזה שמים דגש על הרמת הסוויץ (איזון האינסולין) מה שיאזן את הגוף ויוריד את רמות הסטרס ויעצור את אגירת השומן. הנה קצת ממה שמצפה לך בשבוע זה:"}
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            {WEEK1_BULLETS.map((b, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm font-bold text-foreground">
            {"איך תרגישי בסוף השבוע הראשון:"}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {WEEK1_FEEL}
          </p>
        </div>

        {/* שבוע 2 */}
        <div className="mt-8 rounded-md border-2 border-border p-6">
          <h4 className="text-xl font-bold text-foreground">
            {"שבוע 2: השומן מתחיל להתנדף מהבטן"}
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {"בשבוע הזה מעמיקים את השינוי ומאפשרים לגוף להמיס את השומן העקשן. הנה קצת ממה שמצפה לך בשבוע זה:"}
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            {WEEK2_BULLETS.map((b, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm font-bold text-foreground">
            {"מה יקרה בסוף השבוע השני:"}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {WEEK2_FEEL}
          </p>
        </div>

        {/* שבוע 3 */}
        <div className="mt-8 rounded-md border-2 border-border p-6">
          <h4 className="text-xl font-bold text-foreground">
            {"שבוע 3: הכל יושב עלייך יותר טוב"}
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {"בזמן שהגוף עדיין בתהליך של שחרור שומן, זה הזמן לאסוף אותו. בשבוע הזה אוספים את הגוף, עובדים על היציבה ובעיקר משפרים את הנראות כלפי חוץ וכלפי פנים. הנה קצת ממה שמצפה לך בשבוע זה:"}
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            {WEEK3_BULLETS.map((b, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm font-bold text-foreground">
            {"מה יקרה בסוף השבוע השלישי:"}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {WEEK3_FEEL}
          </p>
        </div>
      </div>

      {/* Bonuses – וואו! מתנות בהצטרפות */}
      <div className="-mx-6 mt-14 overflow-hidden rounded-2xl bg-gradient-to-b from-amber-50 via-white to-orange-50/30 px-6 py-10 shadow-[0_8px_30px_rgba(0,0,0,0.08)] md:-mx-8 md:px-8 md:py-12">
        <div className="mx-auto max-w-xl">
          <div className="text-center">
            <span className="inline-block rounded-full bg-amber-400/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">
              {"מתנות בהצטרפות"}
            </span>
            <h3 className="mt-4 text-2xl font-black leading-tight text-foreground md:text-3xl">
              {"בהצטרפות היום – זה מה שמחכה לך"}
            </h3>
            <p className="mt-2 text-base text-foreground/80">
              {"בנוסף לקורס, את מקבלת עוד 3 בונוסים שווים"}
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-6">
            <div className="flex gap-4 rounded-2xl border border-amber-200/80 bg-white p-5 shadow-md ring-1 ring-amber-100/50 transition-shadow hover:shadow-lg">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-xl font-black text-white shadow-lg shadow-amber-500/25">
                {"1"}
              </div>
              <div>
                <p className="font-black text-foreground">{"טובי – המאמן האישי 24/7"}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {"מאמן AI שאומן על החומרים שלי ועל רוב המחקרים הקיימים בכדור הארץ ויעמוד לשירותך! בשיחה בהתכתבות הוא יהיה המאמן הצמוד אלייך. הוא יבנה לך תפריט מותאם אישית למה שאת אוהבת אם רק תבקשי ממנו. תוכלי לצלם לו את המקרר והוא ייתן לך מתכונים. תוכלי לשאול שאלות על הקורס, או להתייעץ ברגע קשה. טובי שם בשבילך בלחיצת כפתור מתי שרק תרצי."}
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-2xl border border-amber-200/80 bg-white p-5 shadow-md ring-1 ring-amber-100/50 transition-shadow hover:shadow-lg">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-xl font-black text-white shadow-lg shadow-amber-500/25">
                {"2"}
              </div>
              <div>
                <p className="font-black text-foreground">{"מאגר המתכונים לנשים עסוקות"}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {"מאגר של מתכונים יעיל ואפקטיבי שתוכלי ברגע להכניס לגוף משהו בריא, מזין שייתן לך כוח. פשוט ומהיר. עם התאמות לכל סוגי התזונה. מהיר, יעיל ובלי להתעסק בזה יותר מדי."}
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-2xl border border-amber-200/80 bg-white p-5 shadow-md ring-1 ring-amber-100/50 transition-shadow hover:shadow-lg">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-xl font-black text-white shadow-lg shadow-amber-500/25">
                {"3"}
              </div>
              <div>
                <p className="font-black text-foreground">{"חודש מתנה בקהילת הפרימיום חטובים לחיים"}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {"תקבלי חודש מתנה בקהילה המטורפת שלנו, אתגרים שבועיים, מרצים אורחים, קהילה פעילה. עולם חדש שיפתח בפניך."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
