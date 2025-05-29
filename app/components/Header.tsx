// app/components/Header.tsx
'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-black text-white py-4 px-6 flex justify-between items-center shadow-md fixed top-0 w-full z-50">
      <Link href="/" className="text-xl font-bold tracking-wide">
        Ibarra Co Group
      </Link>

      <nav className="space-x-6 hidden md:flex">
        <a href="#inicio" className="hover:text-[#bfa173]">Inicio</a>
        <a href="#servicios" className="hover:text-[#bfa173]">Servicios</a>
        <a href="#portafolio" className="hover:text-[#bfa173]">Portafolio</a>
        <a href="#formulario" className="hover:text-[#bfa173]">Contáctanos</a>
      </nav>

      {/* ✅ Redes sociales */}
      <div className="hidden md:flex items-center space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <i className="fab fa-facebook-f text-white hover:text-[#bfa173] text-lg"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i className="fab fa-instagram text-white hover:text-[#bfa173] text-lg"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in text-white hover:text-[#bfa173] text-lg"></i>
        </a>
      </div>
    </header>
  )
}
