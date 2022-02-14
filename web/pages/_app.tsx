import "styles/globals.css"

import type { AppProps } from "next/app"
import { DefaultSeo } from "next-seo"
import Head from "next/head"
import Script from "next/script"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="msapplication-TileColor" content="#8c22d0" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#000000"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <Script
        id="plausible"
        data-domain="johnschmidt.de"
        src="https://stats.johnschmidt.cloud/js/plausible.js"
      />
      <DefaultSeo
        title="John Schmidt - Freelancer, educator, paramedic"
        description="Freelance web developer, educator, and paramedic. Thriving to make the web a more accessible, enjoyable place."
        canonical="https://johnschmidt.de"
        openGraph={{
          type: "website",
          images: [
            {
              url: "https://johnschmidt.de/img/default-seo.jpg",
              alt: "John Schmidt - Freelancer, educator, paramedic",
              width: 1200,
              height: 628,
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
