import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white text-slate-12 antialiased dark:bg-slateDark-1 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
