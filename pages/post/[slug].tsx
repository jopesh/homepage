import type { GetStaticPaths, GetStaticProps, NextPage } from "next"

import BlockCode from "components/block-code"
import BlockImage from "components/block-image"
import Container from "components/container"
import Layout from "components/layout"
import { PortableText } from "@portabletext/react"
import type { Post } from "lib/sanity.models"
import { sanityClient } from "lib/sanity.server"

export const getStaticPaths: GetStaticPaths = async () => {
  const data: Post[] = await sanityClient.fetch(
    /* groq */ `*[_type == "post"]{slug}`,
  )
  const paths = data.map((post) => ({ params: { slug: post.slug?.current } }))
  return {
    paths,
    fallback: false,
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
          "lqip": asset->metadata.lqip,
          "dimensions": asset->metadata.dimensions,
        },
      },
    }`,
    { slug: params?.slug },
  )
  return {
    props: {
      data,
    },
    revalidate: 60,
  }
}

type Props = {
  data: Post
}

const PostPage: NextPage<Props> = ({ data }) => {
  return (
    <Layout>
      <Container>
        <article className="prose prose-zinc prose-indigo prose-pre:-mx-4 prose-pre:rounded-none prose-pre:border prose-pre:border-zinc-100 prose-pre:bg-zinc-50 prose-pre:text-sm prose-pre:text-zinc-900 dark:prose-invert dark:prose-pre:border-zinc-800 dark:prose-pre:bg-zinc-800/30 dark:prose-pre:text-zinc-100 sm:prose-pre:mx-0 sm:prose-pre:rounded md:prose-pre:-mx-8">
          <h1>{data.title}</h1>
          <PortableText
            value={data.body}
            components={{
              types: {
                code: (props) => (
                  <BlockCode
                    language={props.value.language}
                    code={props.value.code}
                  />
                ),
                image: (props) => <BlockImage data={props.value} />,
              },
            }}
          />
        </article>
      </Container>
    </Layout>
  )
}

export default PostPage
