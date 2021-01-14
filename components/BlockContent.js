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
        block: (props) => {
          const regex = /h\d$/ms
          const match = regex.test(props.node.style)
          const slug = slugify(props.children.toString(), {
            lower: true,
          })
          if (match) {
            return (
              <div className='relative'>
                <div id={slug} className='w-0 h-0 transform -translate-y-20' />
                {createElement(props.node.style, {
                  children: [
                    props.children,
                    <div key='spacer' className='inline-block w-0.5 h-0' />,
                    <a
                      className='inline-flex items-center justify-center p-1.5'
                      href={`#${slug}`}
                      key='anchor'>
                      <span className='sr-only'>
                        Anchor link for: {props.children.toString()}
                      </span>
                      <Hash size={14} weight='bold' />
                    </a>,
                  ],
                })}
              </div>
            )
          } else if (props.node.style === 'blockquote') {
            return <blockquote>{props.children}</blockquote>
          } else return <p>{props.children}</p>
        },
        code: (props) => (
          <BlockCode code={props.node.code} language={props.node.language} />
        ),
        image: (props) => <BlockImage image={props} width={812} />,
        meta: (props) => <BlockStack node={props.node} />,
      },
      marks: {
        link: (props) => (
          <a href={props.mark.href} target='_blank' rel='noopener noreferrer'>
            {props.children}
          </a>
        ),
      },
    }}
  />
)

export default BlockContent
