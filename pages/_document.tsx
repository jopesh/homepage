import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="antialiased text-black bg-white dark:bg-zinc-900 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
