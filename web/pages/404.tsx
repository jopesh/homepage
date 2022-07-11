import { NextPage } from "next"
import Link from "next/link"
import { NextSeo } from "next-seo"

import Container from "components/container"
import Layout from "components/layout"

const NotFoundPage: NextPage = () => {
  return (
    <Layout>
      <NextSeo title="Page not found – John Schmidt" />
      <Container>
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
          <p className="font-bold text-indigo-700 dark:text-indigo-300">404</p>
          <h1 className="text-2xl font-bold mb-4">Page not found</h1>
          <p>
            The page you were looking for does not seem to exist (yet).
            Apologies!
          </p>
          <Link href="/">
            <a className="mt-6 inline-flex items-center space-x-2 rounded bg-indigo-700 px-4 py-3 font-bold text-white ring-offset-2 hover:bg-indigo-800 focus:outline-none focus-visible:ring dark:ring-offset-zinc-900">
              Go back
            </a>
          </Link>
        </div>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
