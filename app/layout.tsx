// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter  } from 'next/font/google'

const geist = Inter ({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Ibarra Co Group - Consultoría Estratégica y Tecnología',
  description: 'Transformación digital con soluciones en Microsoft 365, Power Platform y Azure.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={geist.className}>{children}</body>
    </html>
  )
}