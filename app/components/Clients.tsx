// app/components/Clients.tsx

export default function Clients() {
  return (
    <section id="clientes" className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Confían en nosotros</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <img src="/assets/images/logo1.png" alt="Marca 1" className="h-16 mx-auto grayscale hover:grayscale-0 transition duration-300" />
          <img src="/assets/images/logo2.png" alt="Marca 2" className="h-16 mx-auto grayscale hover:grayscale-0 transition duration-300" />
          <img src="/assets/images/logo3.png" alt="Marca 3" className="h-16 mx-auto grayscale hover:grayscale-0 transition duration-300" />
          <img src="/assets/images/logo4.png" alt="Marca 4" className="h-16 mx-auto grayscale hover:grayscale-0 transition duration-300" />
        </div>
      </div>
    </section>
  );
}
