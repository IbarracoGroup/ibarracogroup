// app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-8 text-center">
      <p className="text-sm md:text-base">
        &copy; {new Date().getFullYear()} <strong className="text-lime-400">Ibarra Co Group</strong> — Consultoría + Tecnología + Resultados
      </p>
    </footer>
  )
}
