import Head from "next/head"
import { ThemeProvider } from "next-themes"
import Script from "next/script"

import "styles/globals.css"
import "focus-visible/dist/focus-visible.min.js"
import { IdProvider } from "@radix-ui/react-id"

function HomepageApp({ Component, pageProps }) {
  return (
    <IdProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
      >
        <Script
          id="plausible"
          data-domain="johnschmidt.de"
          src="https://stats.johnschmidt.cloud/js/plausible.js"
        />
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </IdProvider>
  )
}

export default HomepageApp
