import { useRef } from 'react'
import Image from 'next/image'
import useReadingTime from 'use-reading-time'
import formatDate from 'utils/formatDate'
import BlockContent from './BlockContent'

const Post = ({ data }) => {
  const text = useRef()
  const { readingTime } = useReadingTime(text)
  const { title, publishedAt, body, summary, slug, mainImage, category } = data
  const date = formatDate(publishedAt)
  return (
    <article
      className='mx-auto my-6 prose lg:my-8 md:prose-lg dark:prose-dark'
      ref={text}>
      <h1>{title}</h1>
      <div className='flex items-center my-8 space-x-3 text-sm'>
        <div className='flex flex-grow-0 flex-shrink-0 overflow-hidden rounded-full'>
          <Image
            src='/images/portrait.jpg'
            height='36'
            width='36'
            layout='fixed'
            alt='Portrait of John'
          />
        </div>
        <div className='flex flex-col flex-grow sm:flex-row sm:justify-between'>
          <span className='font-medium'>by John Schmidt</span>
          <div>
            <span>{readingTime} min read</span>
            <span className='mx-2'>–</span>
            <time dateTime={publishedAt}>{date}</time>
          </div>
        </div>
      </div>
      {body && <BlockContent blocks={body} className='mt-6' />}
    </article>
  )
}

export default Post
