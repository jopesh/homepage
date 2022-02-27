import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
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
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="bg-white text-black antialiased dark:bg-zinc-900 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
