export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Marca */}
        <div>
          <img src="/assets/images/logo.png" alt="Ibarra Co Group" className="h-10 mb-4" />
          <p className="text-sm text-gray-400">
            Consultoría + Tecnología + Resultados
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Navegación</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#inicio" className="hover:text-lime-400">Inicio</a></li>
            <li><a href="#servicios" className="hover:text-lime-400">Servicios</a></li>
            <li><a href="#portafolio" className="hover:text-lime-400">Portafolio</a></li>
            <li><a href="#contacto" className="hover:text-lime-400">Contáctanos</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Contacto</h4>
          <p className="text-sm text-gray-400">contacto@ibarracogroup.com</p>
          <p className="text-sm text-gray-400 mt-1">Lima, Perú</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" aria-label="Facebook">
              <i className="fab fa-facebook-f hover:text-lime-400"></i>
            </a>
            <a href="https://instagram.com" target="_blank" aria-label="Instagram">
              <i className="fab fa-instagram hover:text-lime-400"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in hover:text-lime-400"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Ibarra Co Group. Todos los derechos reservados.
      </div>
    </footer>
  )
}
