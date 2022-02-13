import "styles/globals.css"

import type { AppProps } from "next/app"
import { DefaultSeo } from "next-seo"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="John Schmidt - Freelancer, educator, paramedic"
        description="Freelance web developer, educator, and paramedic. Thriving to make the web a more accessible, enjoyable place."
        canonical="https://johnschmidt.de"
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
