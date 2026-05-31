/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#FACC15', // Erős sárga
        'brand-red': '#DC2626', // Erős piros a logó "RP" feliratához
        dark: '#121212',
        darker: '#0a0a0a',
      }
    },
  },
  plugins: [],
}