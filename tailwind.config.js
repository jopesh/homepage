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
              marginBottom: 0,
            },
            'h1, h2, h3, h4, h5, h6': {
              color: 'currentColor',
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
            'ol > li::before': {
              color: 'currentColor',
            },
            img: null,
            'figure figcaption': {
              fontSize: theme('fontSize.sm[0]'),
              color: theme('colors.gray.500'),
              textAlign: 'center',
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
              fontSize: theme('fontSize.base'),
            },
            img: null,
            'figure figcaption': {
              fontSize: theme('fontSize.sm[0]'),
            },
          },
        },
        xl: {
          css: {
            h1: {
              marginBottom: 0,
            },
            pre: {
              borderRadius: 0,
              backgroundColor: null,
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
            figcaption: {
              color: theme('colors.gray.400'),
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
