import { groq } from "next-sanity"
import { NextSeo } from "next-seo"

import Intro from "components/Intro"
import PostList from "components/BlogList"
import WorkList from "components/WorkList"

import { getClient } from "lib/sanity"
import Layout from "components/Layout"

export async function getStaticProps({ preview }) {
  const client = getClient(preview)
  const { blog, work } = await client.fetch(
    groq`{
      "blog": *[_type == "post" && references(*[_type == "category" && slug.current == "blog"][0]._id)] | order(publishedAt desc),
      "work": *[_type == "post" && references(*[_type == "category" && slug.current == "work"][0]._id)] | order(publishedAt desc)
    }`
  )
  return {
    props: {
      blog,
      work,
    },
    revalidate: 60,
  }
}

export default function Home({ blog, work }) {
  return (
    <Layout>
      <div className="space-y-16">
        <NextSeo
          openGraph={{
            type: "website",
            description:
              "Self-taught front-end developer. Aiming to build fast, simple and accessible experiences for everyone to use and enjoy.",
            locale: "en_GB",
            url: "https://www.johnschmidt.de/",
            site_name: "John Schmidt",
            images: [
              {
                url: "https://johnschmidt.de/api/og",
                width: 1200,
                height: 628,
                alt: "John Schmidt",
              },
            ],
          }}
        />

        <Intro />
        <div className="space-y-8 divide-gray-300 dark:divide-gray-700 md:divide-x md:grid md:grid-cols-2 md:space-y-0">
          <PostList posts={blog} />
          <WorkList projects={work} />
        </div>
      </div>
    </Layout>
  )
}
