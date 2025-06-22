import type { Metadata } from 'next'
import { ReactNode } from 'react'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

type RootLayoutProps = {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'DevTools Helper',
  description: 'for everything devs need',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}