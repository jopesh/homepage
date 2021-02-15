import { createElement } from 'react'
import { Hash } from 'phosphor-react'
import slugify from 'slugify'

import BlockCode from 'components/BlockCode'
import BlockImage from 'components/BlockImage'
import BlockStack from 'components/BlockStack'
import { PortableText } from 'lib/sanity'

const BlockContent = ({ ...args }) => (
  <PortableText
    {...args}
    serializers={{
      types: {
        block: props => {
          const regex = /h\d$/ms
          const match = regex.test(props.node.style)
          const slug = slugify(props.children.toString(), {
            lower: true
          })
          if (match) {
            return createElement(props.node.style, {
              id: slug,
              style: {
                scrollMarginTop: '6rem'
              },
              children: [
                <div className='flex items-start'>
                  <a
                    className='px-1 py-2.5 -ml-5 xl:py-3 md:px-2 md:-ml-7'
                    href={`#${slug}`}
                    key='anchor'
                  >
                    <span className='sr-only'>
                      Anchor link for: {props.children.toString()}
                    </span>
                    <Hash className='w-3 h-3' weight='bold' />
                  </a>
                  {props.children}
                </div>
              ]
            })
          } else if (props.node.style === 'blockquote') {
            return <blockquote>{props.children}</blockquote>
          } else return <p>{props.children}</p>
        },
        code: props => (
          <BlockCode
            code={props.node.code}
            language={props.node.language}
            filename={props.node.filename}
          />
        ),
        image: props => <BlockImage image={props} width={812} />,
        meta: props => <BlockStack node={props.node} />
      },
      marks: {
        link: props => (
          <a href={props.mark.href} target='_blank' rel='noopener noreferrer'>
            {props.children}
          </a>
        )
      }
    }}
  />
)

export default BlockContent
