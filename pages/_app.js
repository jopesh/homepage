import GoogleFonts from 'next-google-fonts'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'

import 'styles/globals.css'
import 'focus-visible/dist/focus-visible.min.js'
import Head from 'next/head'

function HomepageApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <GoogleFonts href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap' />
      <DefaultSeo
        canonical='https://johnschmidt.de/'
        title='John Schmidt - Web developer'
      />
      <Head>
        <script
          async
          defer
          data-domain='johnschmidt.de'
          src='https://plausible.flyze.de/js/plausible.js'
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              'window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }',
          }}
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#000000' />
        <meta name='msapplication-TileColor' content='#8c22d0' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default HomepageApp
