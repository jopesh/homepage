const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  purge: {
    layers: ["components", "utilities"],
    content: [
      "./components/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
    ],
  },
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: colors.blueGray,
        amber: colors.amber,
        fuchsia: colors.fuchsia,
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
  variants: {
    extend: {
      display: ["group-hover"],
      backgroundOpacity: ["dark"],
      translate: ["group-hover"],
      ringWidth: ["focus-visible"],
      typography: ["dark"],
      boxShadow: ["dark"],
      opacity: ["focus-visible"],
      zIndex: ["focus-visible"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
