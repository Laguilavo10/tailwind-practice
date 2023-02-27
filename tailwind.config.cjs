/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },

    textColor: (theme) => ({
      ...theme("colors"),
      primary: "#CC2D4A",
    }),

    backgroundColor: (theme) => ({
      ...theme("colors"),
      greenBrand: "#8FA206",
    }),

    extend: {},

  },
}
