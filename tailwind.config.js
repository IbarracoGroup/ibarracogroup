/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/layout.tsx" // 👈 agregado explícito útil en algunos entornos
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#bfa173",
        accent: "#c1ff3d"
      },
    },
  },
  plugins: [],
}
