import { groq } from "next-sanity"
import { NextSeo } from "next-seo"

import Intro from "components/Intro"
import BlogList from "components/BlogList"
import WorkList from "components/WorkList"

import { getClient } from "lib/sanity"
import Layout from "components/Layout"
import formatDate from "utils/formatDate"

export async function getStaticProps({ preview }) {
  const client = getClient(preview)
  let { blog, work } = await client.fetch(
    groq`{
      "blog": *[_type == "post" && references(*[_type == "category" && slug.current == "blog"][0]._id) && publishedAt < now()] | order(publishedAt desc),
      "work": *[_type == "post" && references(*[_type == "category" && slug.current == "work"][0]._id) && publishedAt < now()] | order(publishedAt desc) {
        ...,
        mainImage {
          alt,
          asset->{
            _id,
            _type,
            metadata {
              lqip
            }
          }
        }
      }
    }`
  )
  blog = blog.map((post) => {
    const date = formatDate(post.publishedAt)
    return {
      ...post,
      prettyDate: date,
    }
  })
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
          title="John Schmidt - Educator, paramedic and web developer"
          description="Self-taught web developer. Aiming to build fast, simple and accessible experiences for everyone to use and enjoy."
          canonical="https://johnschmidt.de"
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
          twitter={{
            handle: "@jope_sh",
            cardType: "summary_large_image",
          }}
        />

        <Intro />
        <div className="space-y-8 md:grid md:grid-cols-2 md:space-y-0">
          <BlogList posts={blog} />
          <WorkList projects={work} />
        </div>
      </div>
    </Layout>
  )
}
