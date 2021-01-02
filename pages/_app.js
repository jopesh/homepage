import { useEffect } from 'react'
import { useRouter } from 'next/router'
import GoogleFonts from 'next-google-fonts'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'
import * as Fathom from 'fathom-client'

import 'styles/globals.css'
import 'focus-visible/dist/focus-visible.min.js'
import Head from 'next/head'

function HomepageApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    Fathom.load(process.env.NEXT_PUBLIC_FATHOM_ID, {
      includedDomains: ['johnschmidt.de'],
      url: 'https://shark.johnschmidt.de',
    })
    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }
    router.events.on('routeChangeComplete', onRouteChangeComplete)
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])

  return (
    <ThemeProvider attribute='class'>
      <GoogleFonts href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap' />
      <DefaultSeo
        canonical='https://johnschmidt.de/'
        title='John Schmidt - Web developer'
        description='Freelance web developer based in Hamburg. Aiming to build fast, simple and accessible experiences for everyone to use and enjoy.'
        openGraph={{
          type: 'website',
          description:
            'Freelance web developer based in Hamburg. Aiming to build fast, simple and accessible experiences for everyone to use and enjoy.',
          locale: 'en_GB',
          url: 'https://www.johnschmidt.de/',
          site_name: 'John Schmidt',
          images: [
            {
              url: 'https://homepage.jopesch.vercel.app/images/meta.jpg',
              width: 1024,
              height: 640,
              alt: 'John Schmidt',
            },
          ],
        }}
        twitter={{
          handle: '@jope_sh',
          cardType: 'summary_large_image',
        }}
      />
      <Head>
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
