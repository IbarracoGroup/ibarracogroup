// app/components/Testimonials.tsx
export default function Testimonials() {
  const testimonios = [
    {
      nombre: 'Carlos .....',
      cargo: 'Gerente General, .... .... SAC',
      mensaje:
        'Gracias al equipo de Ibarra Co Group hemos automatizado procesos críticos en RRHH y ventas. ¡Gran acompañamiento y resultados!',
    },
    {
      nombre: 'Ana ...',
      cargo: 'CEO, ....',
      mensaje:
        'Nos ayudaron desde la planificación digital hasta la puesta en producción de nuestras aplicaciones. 100% recomendados.',
    },
    {
      nombre: 'Fernando ....',
      cargo: 'Director TI, ..... Perú',
      mensaje:
        'La integración con Microsoft 365 y Power Platform fue clave para nuestra evolución digital. Profesionales serios y apasionados.',
    },
  ]

  return (
    <section className="section testimonials" id="testimonios">
      <h2>Testimonios</h2>
      <div className="testimonial-cards">
        {testimonios.map((t, i) => (
          <div key={i} className="testimonial-card">
            <p>"{t.mensaje}"</p>
            <h4>{t.nombre}</h4>
            <small>{t.cargo}</small>
          </div>
        ))}
      </div>
    </section>
  )
}
