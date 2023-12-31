import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeProvider'


export const metadata: Metadata = {
  title: 'SASS Clone',
  description: 'For educational and portfolio purposes only.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          defaultTheme="system"
          enableSystem
          attribute="class"
          disableTransitionOnChange
        >
          <Header/>
          {children}
        </ThemeProvider>

        </body>
    </html>
  )
}
