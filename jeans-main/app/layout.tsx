import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'

import './globals.css'

const _rubik = Rubik({ subsets: ['hebrew', 'latin'], variable: '--font-rubik', weight: ['300', '400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  title: 'הורידי 2 מידות בג׳ינס תוך 21 יום | אביב',
  description: 'אחרי שהוכיח ל100 אלף ישראלים איך לרדת 5 קילו בשבועיים בצורה שפויה, אביב מראה לך איך להוריד 2 מידות בג׳ינס תוך 21 יום',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${_rubik.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
