import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Umar | Game Developer & Unity Engineer',
  description:
    'Portfolio of Umar — Unity game developer specialising in hyper-casual, idle, puzzle and mobile games for publishers like Voodoo and Supersonic.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        We load Google Fonts in globals.css via @import.
        The <head> here is kept minimal.
      */}
      <body style={{ fontFamily: "'DM Sans', sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
