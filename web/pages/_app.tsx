import "styles/globals.css"

import type { AppProps } from "next/app"
import { DefaultSeo } from "next-seo"
import Script from "next/script"
import { ThemeProvider } from "next-themes"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
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
        src="https://stats.johnschmidt.cloud/js/plausible.js"
      />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
