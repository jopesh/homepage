const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")
const tailwindRadix = require("tailwind-radix-colors")

const typography = require("@tailwindcss/typography")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      indigo: tailwindRadix.colors.indigo,
      indigoDark: tailwindRadix.colors.indigoDark,
      crimson: tailwindRadix.colors.crimson,
      crimsonDark: tailwindRadix.colors.crimsonDark,
      grass: tailwindRadix.colors.grass,
      grassDark: tailwindRadix.colors.grassDark,
      blue: tailwindRadix.colors.blue,
      blueDark: tailwindRadix.colors.blueDark,
      orange: tailwindRadix.colors.orange,
      orangeDark: tailwindRadix.colors.orangeDark,
      slate: tailwindRadix.colors.slate,
      slateDark: tailwindRadix.colors.slateDark,
      black: colors.black,
      white: colors.white,
      transparent: colors.transparent,
    },
    extend: {
      fontFamily: {
        sans: ["Inter", defaultTheme.fontFamily.sans],
      },
      transitionTimingFunction: {
        nature: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
    },
  },
  plugins: [typography],
}
