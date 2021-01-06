const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            h1: {
              marginBottom: 0,
            },
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.black'),
            },
            pre: {
              borderRadius: 0,
              backgroundColor: null,
            },
            strong: {
              color: 'currentColor',
            },
            a: null,
            blockquote: {
              color: 'currentColor',
              fontWeight: theme('fontWeight.normal'),
              fontStyle: 'normal',
            },
            'ul > li::before, ol > li::before': {
              color: theme('colors.gray.500'),
            },
            img: null,
            'figure figcaption': {
              fontSize: theme('fontSize.sm[0]'),
              color: theme('colors.gray.500'),
              textAlign: 'center',
            },
            p: {
              code: {
                backgroundColor: theme('colors.gray.100'),
              },
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
              fontSize: theme('fontSize.base'),
            },
            img: null,
            'figure figcaption': {
              fontSize: theme('fontSize.sm[0]'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.200'),
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.white'),
            },
            'ul > li::before, ol > li::before': {
              color: theme('colors.gray.400'),
            },
            figcaption: {
              color: theme('colors.gray.400'),
            },
            p: {
              code: {
                color: theme('colors.gray.200'),
                backgroundColor: theme('colors.gray.900'),
              },
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
      typography: ['dark'],
      boxShadow: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
