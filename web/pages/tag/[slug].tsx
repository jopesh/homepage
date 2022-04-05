import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import type { Post, Tag } from "lib/sanity.types"

import Container from "components/container"
import Layout from "components/layout"
import { NextSeo } from "next-seo"
import PortableText from "components/portable-text"
import PostList from "components/post-list"
import { Tag as TagIcon } from "phosphor-react"
import { sanityClient } from "lib/sanity.server"

export const getStaticPaths: GetStaticPaths = async () => {
  const data: Tag[] = await sanityClient.fetch(
    /* groq */ `*[_type == "tag"] { slug }`,
  )
  const paths = data.map((tag) => ({ params: { slug: tag.slug?.current } }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await sanityClient.fetch(
    /* groq */ `*[_type == "tag" && slug.current == $slug][0] {
      ...,
      "seoDescription": pt::text(description),
      "posts": *[_type == "post" && references(^._id)] { title, description, slug, tags[]->{title, slug} }
    }`,
    { slug: params?.slug },
  )
  return {
    props: {
      data,
    },
  }
}

type TagPageProps = {
  data: Tag & { posts: Post[]; seoDescription: string }
}

const TagPage: NextPage<TagPageProps> = ({ data }) => {
  return (
    <Layout>
      <NextSeo
        titleTemplate="%s - John Schmidt"
        title={data.title}
        description={data.seoDescription}
      />
      <Container>
        <section className="mb-8">
          <div className="mb-4 flex items-center space-x-2 text-2xl font-bold">
            <TagIcon weight="bold" />
            <h1>{data.title}</h1>
          </div>
          <div className="prose prose-a:text-indigo-700 dark:prose-invert dark:prose-a:text-indigo-300 sm:prose-base">
            {data.description && <PortableText value={data.description} />}
            <p>
              I wrote {data.posts.length}{" "}
              {data.posts.length === 1 ? "post" : "posts"} about{" "}
              <strong>{data.title}</strong>.
            </p>
          </div>
        </section>
        <section>
          <h2 className="sr-only">Results</h2>
          <PostList data={data.posts} />
        </section>
      </Container>
    </Layout>
  )
}

export default TagPage
