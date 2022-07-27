import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import type { Post, Tag } from "lib/sanity.types"

import Container from "components/container"
import DisplayViews from "components/display-views"
import Layout from "components/layout"
import { NextSeo } from "next-seo"
import PortableText from "components/portable-text"
import TagList from "components/tag-list"
import { sanityClient } from "lib/sanity.server"
import { urlFor } from "lib/sanity.client"

export const getStaticPaths: GetStaticPaths = async () => {
  const data: Post[] = await sanityClient.fetch(
    /* groq */ `*[_type == "post"] { slug }`,
  )
  const paths = data.map((post) => ({ params: { slug: post.slug?.current } }))
  return {
    paths,
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data: Post = await sanityClient.fetch(
    /* groq */ `*[_type == "post" && slug.current == $slug][0] {
      ...,
      body[] {
        ...,
        _type == "image" => {
          ...,
          ...(asset -> {
            "lqip": metadata.lqip,
            "dimensions": metadata.dimensions,
          })
        },
      },
      tags[]->{ title, slug }
    }`,
    { slug: params?.slug },
  )
  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      data,
    },
  }
}

type Props = {
  data: Post
}

const PostPage: NextPage<Props> = ({ data }) => {
  const seoImage = data.seo?.image
    ? urlFor(data.seo?.image).url()
    : data.image
    ? urlFor(data.image).width(1200).height(628).url()
    : "https://johnschmidt.de/img/default-seo.jpg"
  return (
    <Layout>
      <NextSeo
        titleTemplate="%s - John Schmidt"
        title={data.seo?.title || data.title}
        description={data.seo?.description || data.description}
        canonical={`https://johnschmidt.de/post/${data.slug?.current}`}
        openGraph={{
          images: [
            {
              url: seoImage,
              width: 1200,
              height: 628,
            },
          ],
        }}
      />
      <Container>
        <article className="prose prose-sm prose-pre:-mx-4 prose-pre:rounded-none prose-pre:border prose-pre:border-slate-6 prose-pre:bg-slate-1 prose-pre:text-sm prose-pre:text-slate-12 dark:prose-invert dark:prose-pre:border-slateDark-6 dark:prose-pre:bg-slateDark-2 dark:prose-pre:text-slateDark-12 sm:prose-base sm:prose-pre:mx-0 sm:prose-pre:rounded md:prose-pre:-mx-8 md:prose-pre:text-base">
          <div className="not-prose mb-2 text-xs md:text-sm">
            <DisplayViews slug={data.slug?.current || ""} />
          </div>
          <h1 className="mb-4 font-black">{data.title}</h1>
          <div className="not-prose mb-8 text-xs md:text-sm">
            <TagList data={data.tags as unknown as Tag[]} />
          </div>
          <PortableText value={data.body} />
        </article>
      </Container>
    </Layout>
  )
}

export default PostPage
