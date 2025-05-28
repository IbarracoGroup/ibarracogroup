// app/components/Header.tsx
'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <img src="/assets/logo.png" alt="Ibarra Co Group" className="logo" />
        <nav className="navbar">
          <Link href="#inicio">Inicio</Link>
          <Link href="#servicios">Servicios</Link>
          <Link href="#portafolio">Portafolio</Link>
          <Link href="#contacto">Contáctanos</Link>
        </nav>
      </div>
    </header>
  )
}
