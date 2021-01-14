import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'
import 'styles/globals.css'
import 'focus-visible/dist/focus-visible.min.js'
import Layout from 'components/Layout'

function HomepageApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='light' enableSystem={false}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <DefaultSeo
        title='John Schmidt - Front-end developer'
        canonical='https://johnschmidt.de/'
        description='Self-taught front-end developer. Aiming to build fast, simple and accessible experiences for everyone to use and enjoy.'
        openGraph={{
          type: 'website',
          description:
            'Self-taught front-end developer. Aiming to build fast, simple and accessible experiences for everyone to use and enjoy.',
          locale: 'en_GB',
          url: 'https://www.johnschmidt.de/',
          site_name: 'John Schmidt',
        }}
        twitter={{
          handle: '@jope_sh',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default HomepageApp
