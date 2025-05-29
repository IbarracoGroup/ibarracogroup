// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Ibarra Co Group - Consultoría Estratégica y Tecnología',
  description: 'Transformación digital con soluciones en Microsoft 365, Power Platform y Azure.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* FontAwesome CDN para íconos */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-papQTOwCjTwVqgN91Y7C9hOBzQeDcQ0dK3w0WqJZmZbQyGpQlXjv6kNsEu0OeT6rklHg7QhCvlkD6TUZ1J4mkw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
