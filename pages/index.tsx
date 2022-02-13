import type { GetStaticProps, NextPage } from "next"

import Container from "components/container"
import Image from "next/image"
import Layout from "components/layout"
import { PaperPlaneTilt } from "phosphor-react"
import type { Post } from "lib/sanity.models"
import PostList from "components/post-list"
import portrait from "public/img/portrait.jpeg"
import { sanityClient } from "lib/sanity.server"

export const getStaticProps: GetStaticProps = async () => {
  const data = await sanityClient.fetch(/* groq */ `*[_type == "post"]{
    ...,
    "tags": tags[]->{title},
  }`)
  return {
    props: {
      data,
    },
  }
}

type HomeProps = {
  data: Post[]
}

const Home: NextPage<HomeProps> = ({ data }) => {
  return (
    <Layout>
      <Container>
        <section className="mb-10 flex flex-col-reverse items-start sm:mb-16 sm:flex-row">
          <div className="mt-4 sm:mt-0 sm:pr-8">
            <h1 className="mb-2 text-2xl font-extrabold md:text-3xl">
              John Schmidt
            </h1>
            <p className="text-zinc-700 dark:text-zinc-300 sm:text-base md:text-lg">
              Freelance web developer, educator, and paramedic. Thriving to make
              the web a more accessible, enjoyable place. Currently based in
              Berlin.
            </p>
            <a
              href="mailto:mail@johnschmidt.de"
              className="mt-4 inline-flex items-center space-x-2 rounded bg-indigo-700 px-4 py-3 font-bold text-white ring-offset-2 hover:bg-indigo-800 focus:outline-none focus-visible:ring dark:ring-offset-zinc-900"
            >
              <PaperPlaneTilt weight="bold" />
              <span>Get in touch</span>
            </a>
          </div>
          <div className="flex shrink-0 overflow-hidden rounded sm:mt-2">
            <Image
              src={portrait}
              alt="Portrait"
              placeholder="blur"
              width="96"
              height="96"
            />
          </div>
        </section>
        <section></section>
        <section>
          <h2 className="mb-4 font-bold">Writing</h2>
          <PostList data={data} />
        </section>
      </Container>
    </Layout>
  )
}

export default Home
