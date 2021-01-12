import formatDate from 'utils/formatDate'
import BlockContent from './BlockContent'

const Post = ({ data }) => {
  const { title, publishedAt, body, summary, slug, mainImage, category } = data
  const date = formatDate(publishedAt)
  return (
    <article className='mx-auto my-6 prose lg:mt-8 md:prose-lg dark:prose-dark'>
      <h1>{title}</h1>
      {category === 'blog' && (
        <time
          className='inline-block mt-3 text-gray-500 md:mt-6 dark:text-gray-400'
          dateTime={publishedAt}>
          {date}
        </time>
      )}
      {body && <BlockContent blocks={body} className='mt-6' />}
    </article>
  )
}

export default Post
