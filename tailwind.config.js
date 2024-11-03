/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pri': '#DCEFD8',
        'sec':'#97D28B',
        'ter':'#43554B',
        'box-pri':'#97D28B',
        'box-sec':'#35413A'
      }
    },
  },
  plugins: [],
}