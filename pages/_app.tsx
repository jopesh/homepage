import "styles/globals.css"

import type { AppProps } from "next/app"
import Container from "components/container"
import { Heart } from "phosphor-react"
import Link from "next/link"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className="mb-16 mt-10">
        <Container>
          <Link href="/">
            <a className="flex">
              <svg
                width="222"
                height="322"
                viewBox="0 0 222 322"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-auto"
              >
                <path
                  d="M121.623 100.766V0H0V21.2214H100.377V211.125H121.623V122.108C166.128 127.378 200.753 165.258 200.753 211.125C200.753 222.898 198.432 234.555 193.921 245.431C189.411 256.308 182.8 266.19 174.465 274.515C166.131 282.839 156.236 289.442 145.347 293.948C134.458 298.453 122.787 300.771 111 300.771C99.2134 300.771 87.5423 298.453 76.6529 293.948C65.7635 289.442 55.8692 282.839 47.5349 274.515C39.2005 266.19 32.5893 256.308 28.0788 245.431C23.5683 234.555 21.2467 222.898 21.2467 211.125H0C0 272.264 49.7952 322 111 322C172.205 322 222 272.264 222 211.125C222 153.572 177.863 106.107 121.623 100.766Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </Link>
        </Container>
      </header>
      <Component {...pageProps} />
      <footer className="mt-16 mb-10 text-center font-mono text-sm">
        <Container>
          <p className="inline-flex items-center">
            <span>Made in Berlin with</span>
            <Heart
              className="ml-2 text-red-700 dark:text-red-300"
              weight="fill"
            />
            <span>, 2022</span>
          </p>
        </Container>
      </footer>
    </>
  )
}

export default MyApp
