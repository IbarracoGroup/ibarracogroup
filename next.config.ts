/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 👈 fuerza la generación de archivos estáticos para rutas como /planes
  experimental: {
    appDir: true,
  },
};

export default nextConfig;