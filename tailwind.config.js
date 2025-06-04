/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/layout.tsx"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#bfa173",
        accent: '#ccff00'
      },
      fontFamily: {
        inter: ['Inter', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
