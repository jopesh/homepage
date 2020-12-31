const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'currentColor',
            h1: {
              color: 'currentColor',
              marginBottom: 0,
            },
            h2: {
              color: 'currentColor',
            },
            h3: {
              color: 'currentColor',
            },
            pre: {
              borderRadius: 0,
              backgroundColor: null,
            },
          },
        },
        lg: {
          css: {
            h1: {
              marginBottom: 0,
            },
            pre: {
              borderRadius: 0,
              backgroundColor: null,
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      backgroundOpacity: ['dark'],
      translate: ['group-hover'],
      ringWidth: ['focus-visible'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
