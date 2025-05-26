// app/not-found.tsx

export default function NotFound() {
  return (
    <main style={{ padding: '4rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem' }}>Página no encontrada</h1>
      <p style={{ marginTop: '1rem', color: '#666' }}>
        La ruta que estás buscando no existe o ha sido movida.
      </p>
      <a href="/" style={{ color: '#0070f3', textDecoration: 'underline', marginTop: '2rem', display: 'inline-block' }}>
        Volver al inicio
      </a>
    </main>
  );
}
