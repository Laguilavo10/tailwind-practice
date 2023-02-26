/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      montserrat: ['Montserrat', 'sans-serif']
    },

    textColor: (theme) => ({
      ...theme('colors'),
      redBrand: "#CC2D4A"
    }),

    extend: {},
  },
  plugins: [],
}
