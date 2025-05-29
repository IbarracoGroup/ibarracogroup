// ✅ app/components/Header.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-black text-white py-4 px-6 fixed w-full z-50 shadow-md">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-wide">
          Ibarra Co Group
        </Link>

        {/* Menú en pantallas grandes */}
        <nav className="hidden md:flex space-x-6">
          <a href="#inicio" className="hover:text-[#bfa173]">Inicio</a>
          <a href="#servicios" className="hover:text-[#bfa173]">Servicios</a>
          <a href="#portafolio" className="hover:text-[#bfa173]">Portafolio</a>
          <a href="#formulario" className="hover:text-[#bfa173]">Contáctanos</a>
        </nav>

        {/* Iconos redes sociales */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://facebook.com" target="_blank" aria-label="Facebook">
            <i className="fab fa-facebook-f text-white hover:text-[#bfa173] text-lg"></i>
          </a>
          <a href="https://instagram.com" target="_blank" aria-label="Instagram">
            <i className="fab fa-instagram text-white hover:text-[#bfa173] text-lg"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in text-white hover:text-[#bfa173] text-lg"></i>
          </a>
        </div>

        {/* Botón hamburguesa */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          <i className="fas fa-bars text-white text-xl"></i>
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <nav className="md:hidden mt-4 space-y-3 text-center">
          <a href="#inicio" className="block hover:text-[#bfa173]">Inicio</a>
          <a href="#servicios" className="block hover:text-[#bfa173]">Servicios</a>
          <a href="#portafolio" className="block hover:text-[#bfa173]">Portafolio</a>
          <a href="#formulario" className="block hover:text-[#bfa173]">Contáctanos</a>
        </nav>
      )}
    </header>
  )
}
