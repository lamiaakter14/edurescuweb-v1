import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EduRescue - 24/7 Academic Emergency Platform',
  description: 'Instant AI-powered academic help for Bangladeshi students',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
