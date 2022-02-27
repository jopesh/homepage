const defaultTheme = require("tailwindcss/defaultTheme")
const typography = require("@tailwindcss/typography")

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [typography],
}
