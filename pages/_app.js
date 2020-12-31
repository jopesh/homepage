import GoogleFonts from 'next-google-fonts'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'

import 'styles/globals.css'
import 'focus-visible/dist/focus-visible.min.js'

function HomepageApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <GoogleFonts href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap' />
      <DefaultSeo title='Web developer' titleTemplate='%s - John Schmidt' />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default HomepageApp
