import { groq } from 'next-sanity'

import Layout from 'components/Layout'
import Post from 'components/Post'
import Error from 'components/Error'

import { getClient, usePreviewSubscription } from 'lib/sanity'

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
  const initialData = await getClient(preview).fetch(query, {
    slug: params.slug,
  })
  return {
    props: { initialData, preview },
    revalidate: 1,
  }
}
export default function BlogPost({ initialData, preview }) {
  const { data } = usePreviewSubscription(query, {
    params: { slug: initialData?.slug?.current },
    initialData: initialData,
    enabled: preview,
  })
  return <Layout>{data ? <Post data={data} /> : <Error />}</Layout>
}
