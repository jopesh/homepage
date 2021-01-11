import { CaretRight } from 'phosphor-react'

import Heading from './Heading'
import LinkArrow from './LinkArrow'

import formatDate from 'utils/formatDate'
import Placeholder from './Placeholder'
import Link from 'next/link'

const BlogList = ({ posts }) => {
  return (
    <section id='posts' className='pt-4 md:pr-12'>
      <div className='flex items-center justify-between mb-6'>
        <Heading>Thoughts</Heading>
        {/* <a href='#' className='flex items-center py-1 space-x-1'>
          <span>More</span>
          <CaretRight />
        </a> */}
      </div>
      <ul className='space-y-6'>
        {posts.map((p) => {
          const date = formatDate(p.publishedAt)
          return (
            <li key={p._id}>
              <Link href={`/blog/${p.slug.current}`}>
                <a className='block group hover:no-underline'>
                  <h3 className='mb-1.5 font-bold leading-snug group-hover:underline'>
                    {p.title}
                  </h3>
                  <time
                    dateTime={p.publishedAt}
                    className='block text-sm text-gray-500 dark:text-gray-400'>
                    {date}
                  </time>
                  <p className='block mt-1.5 text-black dark:text-white'>
                    {p.summary}
                  </p>
                </a>
              </Link>
            </li>
          )
        })}
        {posts.length < 3 && <Placeholder name='thoughts' />}
      </ul>
    </section>
  )
}

export default BlogList
