import { groq } from "next-sanity"

import Layout from "components/Layout"
import Post from "components/Post"
import Error from "components/Error"
import PostSeo from "components/PostSeo"

import { getClient } from "lib/sanity"
import { useRouter } from "next/router"

export async function getStaticPaths() {
  const posts = await getClient().fetch(
    groq`*[_type == "post"]{slug, category->{slug}}`
  )
  const paths = posts?.map((p) => ({
    params: {
      slug: p.slug.current,
      category: p.category.slug.current,
    },
  }))
  return {
    paths,
    fallback: true,
  }
}

const query = groq`*[_type == "post" && slug.current == $slug && references(*[_type == "category" && slug.current == $category][0]._id)][0]`

export async function getStaticProps({ params, preview = false }) {
  const data = await getClient(preview).fetch(query, {
    slug: params.slug,
    category: params.category,
  })
  return {
    props: { data },
    revalidate: 30,
  }
}

export default function BlogPost({ data }) {
  const router = useRouter()
  if (router.isFallback || !data) {
    return <Error />
  } else {
    return (
      <Layout>
        <PostSeo data={data} />
        <Post data={data} />
      </Layout>
    )
  }
}
