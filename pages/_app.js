import Head from "next/head"
import { ThemeProvider } from "next-themes"

import "styles/tailwind.css"
import "styles/globals.css"
import "focus-visible/dist/focus-visible.min.js"

function HomepageApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default HomepageApp
