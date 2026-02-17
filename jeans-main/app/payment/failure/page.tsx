import Link from "next/link"

export const metadata = {
  title: "שגיאה בתשלום | אביב",
  description: "התשלום לא הצליח, ניתן לנסות שוב",
}

export default function PaymentFailurePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-6 py-20 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-destructive">
        <svg
          className="h-8 w-8 text-destructive"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>

      <h1 className="mt-8 text-3xl font-black text-foreground md:text-4xl">
        {"התשלום לא הצליח"}
      </h1>

      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        {"משהו לא עבד בתהליך התשלום. אל דאגה, לא חויבת."}
      </p>

      <p className="mt-2 text-base leading-relaxed text-muted-foreground">
        {"את מוזמנת לנסות שוב או לפנות אלינו אם את צריכה עזרה."}
      </p>

      <div className="mt-10 flex flex-col gap-3">
        <Link
          href="/#signup"
          className="rounded bg-foreground px-8 py-3 text-base font-bold text-primary-foreground transition-opacity hover:opacity-90"
        >
          {"לנסות שוב"}
        </Link>
        <Link
          href="/"
          className="rounded border border-border px-8 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
        >
          {"חזרה לעמוד הראשי"}
        </Link>
      </div>
    </main>
  )
}
