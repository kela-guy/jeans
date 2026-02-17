import Link from "next/link"

export const metadata = {
  title: "התשלום הצליח! | אביב",
  description: "התשלום בוצע בהצלחה, ברוכה הבאה לתוכנית",
}

export default function PaymentSuccessPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-6 py-20 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-foreground">
        <svg
          className="h-8 w-8 text-foreground"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 className="mt-8 text-3xl font-black text-foreground md:text-4xl">
        {"!התשלום בוצע בהצלחה"}
      </h1>

      <p className="mt-4 text-lg leading-relaxed text-foreground">
        {"ברוכה הבאה לתוכנית!"}
      </p>

      <p className="mt-2 text-base leading-relaxed text-muted-foreground">
        {"שלחנו לך אימייל עם כל הפרטים וההוראות להתחלת התוכנית. בדקי את תיבת המייל שלך (כולל ספאם)."}
      </p>

      <div className="mt-10 flex flex-col gap-3">
        <Link
          href="/"
          className="rounded bg-foreground px-8 py-3 text-base font-bold text-primary-foreground transition-opacity hover:opacity-90"
        >
          {"חזרה לעמוד הראשי"}
        </Link>
      </div>
    </main>
  )
}
