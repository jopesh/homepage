import { groq } from 'next-sanity'

import Layout from 'components/Layout'
import Post from 'components/Post'
import Error from 'components/Error'
import PostSeo from 'components/PostSeo'

import { getClient } from 'lib/sanity'
import { useRouter } from 'next/router'

export async function getStaticPaths() {
  const posts = await getClient().fetch(
    groq`*[_type == "post"]{slug, category}`
  )
  const paths = posts?.map((p) => ({
    params: {
      slug: p.slug.current,
      category: p.category,
    },
  }))
  return {
    paths,
    fallback: true,
  }
}

const query = groq`*[_type == "post" && slug.current == $slug][0]`

export async function getStaticProps({ params, preview = false }) {
  const data = await getClient(preview).fetch(query, {
    slug: params.slug,
  })
  return {
    props: { data },
    revalidate: 1,
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
