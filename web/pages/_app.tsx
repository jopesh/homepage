import "styles/globals.css"

import type { AppProps } from "next/app"
import { DefaultSeo } from "next-seo"
import Head from "next/head"
import Script from "next/script"
import { ThemeProvider } from "next-themes"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="preload"
          href="/fonts/inter-var-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png?v=oLnz5kRpkO"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?v=oLnz5kRpkO"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?v=oLnz5kRpkO"
        />
        <link rel="manifest" href="/site.webmanifest?v=oLnz5kRpkO" />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg?v=oLnz5kRpkO"
          color="#000000"
        />
        <meta name="msapplication-TileColor" content="#8c22d0" />
        <meta
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#18181b"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
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
      <Script
        id="plausible"
        data-domain="johnschmidt.de"
        src="https://stats.johnschmidt.cloud/js/script.js"
      />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
