/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      'gold': '#FFD700',
      'beige': '#F5F5DC',
      'light-gray': '#E0E0E0',
      'champagne': '#F7E7CE',
      'charcoal-gray': '#333333'
    }},
  },
  plugins: [],
}