const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        amber: colors.amber,
        green: colors.emerald,
        fuchsia: colors.fuchsia,
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "scale(1) translate(0%, 0%)",
          },
          "33%": {
            transform: "scale(1.2) translate(15%, 10%)",
          },
          "66%": {
            transform: "scale(0.8) translate(-10%, -15%)",
          },
          "100%": {
            transform: "scale(1) translate(0%, 0%)",
          },
        },
      },
      transitionTimingFunction: {
        nature: "cubic-bezier(0.77, 0, 0.175, 1)",
      },
      animation: {
        blob: "blob 8s cubic-bezier(0.77, 0, 0.175, 1) infinite",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.900"),
            h1: {
              marginBottom: 0,
              fontWeight: 900,
            },
            "h1, h2, h3, h4, h5, h6": {
              color: theme("colors.black"),
            },
            a: null,
            pre: {
              borderRadius: 0,
              backgroundColor: null,
            },
            strong: {
              color: "currentColor",
            },
            blockquote: {
              color: "currentColor",
              fontWeight: theme("fontWeight.normal"),
              fontStyle: "normal",
            },
            "ul > li::before, ol > li::before": {
              color: theme("colors.gray.500"),
            },
            img: null,
            "figure figcaption": {
              fontSize: theme("fontSize.sm[0]"),
              color: theme("colors.gray.500"),
              textAlign: "center",
            },
            p: {},
          },
        },
        lg: {
          css: {
            h1: {
              marginBottom: 0,
            },
            pre: {
              borderRadius: 0,
              fontSize: theme("fontSize.sm[0]"),
            },
            img: null,
            "figure figcaption": {
              fontSize: theme("fontSize.sm[0]"),
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.100"),
            "h1, h2, h3, h4, h5, h6": {
              color: theme("colors.white"),
            },
            "ul > li::before, ol > li::before": {
              color: theme("colors.gray.400"),
            },
            figcaption: {
              color: theme("colors.gray.400"),
            },
            p: {
              code: {
                color: "theme('colors.gray.200')",
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
