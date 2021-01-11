import { createElement } from 'react'
import { HashStraight } from 'phosphor-react'
import slugify from 'slugify'

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
              block: (props) => {
                const regex = /h\d$/ms
                const match = regex.test(props.node.style)
                const slug = slugify(props.children.toString(), {
                  lower: true,
                })
                if (match) {
                  return (
                    <div className='relative'>
                      <div
                        id={slug}
                        className='w-0 h-0 transform -translate-y-20'
                      />
                      <a
                        className='absolute px-1.5 py-2.5 transform -translate-y-1/2 top-1/2 -left-6 lg:-left-8 focus-visible:ring-inset'
                        href={`#${slug}`}>
                        <HashStraight size={14} />
                        <span className='sr-only'>
                          Anchor link for: {props.children.toString()}
                        </span>
                      </a>
                      {createElement(props.node.style, {
                        children: props.children,
                      })}
                    </div>
                  )
                } else return <p>{props.children}</p>
              },
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
