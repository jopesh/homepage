import Head from 'next/head'
import { groq } from 'next-sanity'

import Layout from 'components/Layout'
import Intro from 'components/Intro'
import PostList from 'components/BlogList'
import ProjectList from 'components/ProjectList'

import { getClient } from 'lib/sanity'
import { NextSeo } from 'next-seo'

export async function getStaticProps(context) {
  const client = getClient()
  const author = await client.fetch(groq`*[_type == "author"][0]{ image }`)
  const posts = await client.fetch(
    groq`*[_type == "post" && category == "blog"][0...3] { 
      _id, 
      publishedAt, 
      slug, 
      title, 
      summary 
    } | order(publishedAt desc)`
  )
  const projects = await client.fetch(
    groq`*[_type == "post" && category == "project"][0..0]`
  )
  return {
    props: {
      author,
      posts,
      projects,
    },
    revalidate: 1,
  }
}

export default function Home({ author, posts, projects }) {
  return (
    <Layout>
      <div className='my-6 space-y-16'>
        <Intro author={author} />
        <div className='space-y-8 divide-gray-400 dark:divide-gray-600 md:divide-x md:grid md:grid-cols-2 md:space-y-0'>
          <PostList posts={posts} />
          <ProjectList projects={projects} />
        </div>
      </div>
    </Layout>
  )
}
