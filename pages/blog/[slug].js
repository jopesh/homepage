import { groq } from 'next-sanity'
import { NextSeo } from 'next-seo'

import BlockCode from 'components/BlockCode'
import Layout from 'components/Layout'

import { getClient, PortableText } from 'lib/sanity'

export async function getStaticPaths() {
  const posts = await getClient().fetch(groq`*[_type == "post"]{slug}`)
  const paths = posts.map((p) => ({
    params: {
      slug: p.slug.current,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const data = await getClient().fetch(
    groq`*[_type == "post" && slug.current == $slug][0]`,
    { slug: context.params.slug }
  )
  return {
    props: { data },
  }
}

export default function Post({ data }) {
  const { title, publishedAt, body } = data
  const date = Intl.DateTimeFormat('en-GB').format(new Date(publishedAt))
  return (
    <Layout>
      <NextSeo title={title} />
      <article className='mx-auto my-6 prose md:prose-lg'>
        <h1>{title}</h1>
        <time
          className='text-gray-500 dark:text-gray-400'
          dateTime={publishedAt}>
          {date}
        </time>
        <PortableText
          blocks={body}
          className='mt-6'
          serializers={{
            types: {
              code: (props) => (
                <BlockCode
                  code={props.node.code}
                  language={props.node.language}
                />
              ),
            },
          }}
        />
      </article>
    </Layout>
  )
}
