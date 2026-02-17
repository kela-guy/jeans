import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import '../globals.css'

const _rubik = Rubik({
  subsets: ['hebrew', 'latin'],
  variable: '--font-rubik',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'הורידי 2 מידות בג׳ינס תוך 21 יום | אביב',
  description: 'קורס דיגיטלי להורדת 2 מידות בג׳ינס תוך 21 יום',
  robots: 'noindex, nofollow',
}

export default function EmbedLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${_rubik.variable} font-sans antialiased`}>
        {children}
        {/* Auto-resize: sends height to parent window for iframe resizing */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function sendHeight() {
                  var h = document.documentElement.scrollHeight;
                  window.parent.postMessage({ type: 'sp-resize', height: h }, '*');
                }
                window.addEventListener('load', sendHeight);
                window.addEventListener('resize', sendHeight);
                new MutationObserver(sendHeight).observe(document.body, { childList: true, subtree: true, attributes: true });
                setInterval(sendHeight, 500);
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
