import BlockCode from 'components/BlockCode'
import BlockImage from 'components/BlockImage'
import BlockStack from 'components/BlockStack'

import { PortableText } from 'lib/sanity'
import formatDate from 'utils/formatDate'

const Post = ({ data }) => {
  const { title, publishedAt, body, summary, slug, mainImage, category } = data
  const date = formatDate(publishedAt)
  return (
    <article className='mx-auto my-6 prose md:prose-lg dark:prose-dark'>
      <h1>{title}</h1>
      {category === 'blog' && (
        <time
          className='inline-block mt-3 text-gray-500 md:mt-6 dark:text-gray-400'
          dateTime={publishedAt}>
          {date}
        </time>
      )}
      {body && (
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
              image: (props) => <BlockImage image={props} width={812} />,
              meta: (props) => <BlockStack node={props.node} />,
            },
            marks: {
              link: (props) => (
                <a
                  href={props.mark.href}
                  target='_blank'
                  rel='noopener noreferrer'>
                  {props.children}
                </a>
              ),
            },
          }}
        />
      )}
    </article>
  )
}

export default Post
