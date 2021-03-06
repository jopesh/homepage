import { groq } from "next-sanity"

import Layout from "components/Layout"
import Post from "components/Post"
import Error from "components/Error"
import PostSeo from "components/PostSeo"

import { getClient } from "lib/sanity"
import { useRouter } from "next/router"
import { getReadingTime } from "utils/getReadingTime"
import formatDate from "utils/formatDate"

export async function getStaticPaths() {
  const posts = await getClient().fetch(
    groq`*[_type == "post"]{slug, category->{slug}}`
  )
  const paths = posts?.map((p) => ({
    params: {
      slug: p.slug?.current,
      category: p.category?.slug.current,
    },
  }))
  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params, preview = false }) {
  const query = groq`*[_type == "post" && slug.current == $slug && references(*[_type == "category" && slug.current == $category][0]._id)][0]{..., category->{slug}}`
  const data = await getClient(preview).fetch(query, {
    slug: params.slug,
    category: params.category,
  })
  const time = getReadingTime(data?.body)
  const date = formatDate(data?.publishedAt)
  return {
    props: {
      data: {
        ...data,
        readingTime: time,
        prettyDate: date,
      },
    },
    revalidate: 30,
  }
}
export default function BlogPost({ data }) {
  const router = useRouter()
  if (!data?.slug || router.isFallback) {
    return <Error code="404" />
  }
  return (
    <Layout>
      <PostSeo data={data} />
      <Post data={data} />
    </Layout>
  )
}
