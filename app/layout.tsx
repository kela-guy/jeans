import type { Metadata } from 'next'
import { Assistant, Frank_Ruhl_Libre } from 'next/font/google'

import './globals.css'

const _assistant = Assistant({ subsets: ['hebrew', 'latin'], variable: '--font-assistant' })
const _frankRuhl = Frank_Ruhl_Libre({ subsets: ['hebrew', 'latin'], variable: '--font-frank', weight: ['400', '500', '700', '900'] })

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
      <body className={`${_assistant.variable} ${_frankRuhl.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
