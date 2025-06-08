'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white text-gray-900 shadow-md border-b border-gray-200' : 'bg-black text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/assets/images/logo.png"
            alt="Logo Ibarra Co Group"
            className="h-10 w-auto"
          />
          <span className="font-bold text-lg md:text-xl tracking-wide">Ibarra Co Group</span>
        </Link>

        {/* Menú escritorio */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
          <a href="#inicio" className="hover:text-secondary transition">Inicio</a>
          <a href="#servicios" className="hover:text-secondary transition">Servicios</a>
          <a href="#portafolio" className="hover:text-secondary transition">Portafolio</a>
          <a href="#formulario" className="hover:text-secondary transition">Contáctanos</a>
        </nav>

        {/* Redes sociales */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f hover:text-secondary transition text-lg"></i>
          </a>
          <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram hover:text-secondary transition text-lg"></i>
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in hover:text-secondary transition text-lg"></i>
          </a>
        </div>

        {/* Botón móvil */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-xl focus:outline-none"
          aria-label="Menú"
        >
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <nav className="md:hidden bg-black text-white px-6 pb-4 space-y-3 text-center font-medium">
          <a href="#inicio" className="block hover:text-secondary">Inicio</a>
          <a href="#servicios" className="block hover:text-secondary">Servicios</a>
          <a href="#portafolio" className="block hover:text-secondary">Portafolio</a>
          <a href="#formulario" className="block hover:text-secondary">Contáctanos</a>
        </nav>
      )}
    </header>
  )
}
