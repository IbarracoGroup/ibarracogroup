// app/components/ContactForm.tsx
'use client'

export default function ContactForm() {
  return (
    <section className="contact-form" id="contacto">
      <h2>Lleva tu negocio al futuro</h2>
      <form action="https://formsubmit.co/1bfd78b70e61ed1e947bfff2a085011e" method="POST">
        <div className="form-group">
          <input type="text" name="nombre" placeholder="Nombre" required />
          <input type="text" name="apellido" placeholder="Apellido" required />
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="empresa" placeholder="Empresa" required />
        </div>
        <div className="form-group full">
          <select name="pais" required>
            <option value="">Selecciona tu país...</option>
            <option value="Perú">Perú</option>
            <option value="México">México</option>
            <option value="Colombia">Colombia</option>
            <option value="Argentina">Argentina</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
        <div className="form-group full">
          <textarea name="mensaje" placeholder="Mensaje" required></textarea>
        </div>
        <div className="form-check">
          <input type="checkbox" name="boletin" id="boletin" />
          <label htmlFor="boletin">
            Me gustaría registrarme con mi dirección de correo electrónico para recibir el boletín.
          </label>
        </div>
        <p className="politica">
          Al completar este formulario, aceptas nuestra{' '}
          <a href="/politica.html" target="_blank">Política de Confidencialidad</a>.
        </p>
        <button type="submit" className="btn">Enviar</button>
        <input type="hidden" name="_next" value="https://www.ibarracogroup.com/agradecimiento.html" />
        <input type="hidden" name="_captcha" value="false" />
      </form>
    </section>
  )
}
