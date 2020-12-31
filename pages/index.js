import Head from 'next/head'
import { groq } from 'next-sanity'

import Layout from 'components/Layout'
import Intro from 'components/Intro'
import PostList from 'components/PostList'
import WorkList from 'components/WorkList'

import { getClient } from 'lib/sanity'

export async function getStaticProps(context) {
  const client = getClient()
  const author = await client.fetch(groq`*[_type == "author"][0]{ image }`)
  const posts = await client.fetch(
    groq`*[_type == "post"][0...3] { 
      _id, 
      publishedAt, 
      slug, 
      title, 
      summary 
    } | order(publishedAt desc)`
  )
  const projects = await client.fetch(groq`*[_type == "project"]`)
  return {
    props: {
      author,
      posts,
      projects,
    },
  }
}

export default function Home({ author, posts, projects }) {
  return (
    <Layout>
      <div className='my-6 space-y-16'>
        <Intro author={author} />
        <div className='space-y-8 divide-gray-400 dark:divide-gray-600 md:divide-x md:grid md:grid-cols-2 md:space-y-0'>
          <PostList posts={posts} />
          <WorkList projects={projects} />
        </div>
      </div>
    </Layout>
  )
}
