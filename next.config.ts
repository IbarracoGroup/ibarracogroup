// next.config.ts

const nextConfig = {
  output: 'standalone', // Importante para serverless build en Azure
  reactStrictMode: true,
  experimental: {
    appDir: true // Habilita App Router oficialmente
  }
};

export default nextConfig;
