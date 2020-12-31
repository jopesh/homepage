import { CaretRight } from 'phosphor-react'
import Heading from './Heading'
import LinkArrow from './LinkArrow'

const PostList = ({ posts }) => {
  return (
    <section id='posts' className='pt-4 md:pr-12'>
      <div className='flex items-center justify-between mb-6'>
        <Heading>Thoughts</Heading>
        <a href='#' className='flex items-center py-1 space-x-1'>
          <span>More</span>
          <CaretRight />
        </a>
      </div>
      <ul className='space-y-6'>
        {posts.map((p) => {
          const formatDate = Intl.DateTimeFormat('en-GB').format(
            new Date(p.publishedAt)
          )
          return (
            <li key={p._id}>
              <h3 className='mb-1.5 font-bold leading-snug'>{p.title}</h3>
              <time
                dateTime={p.publishedAt}
                className='block text-sm text-gray-500 dark:text-gray-400'>
                {formatDate}
              </time>
              <p className='block mt-1.5'>{p.summary}</p>
              <LinkArrow href={`/blog/${p.slug.current}`} text='Read more' />
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default PostList
