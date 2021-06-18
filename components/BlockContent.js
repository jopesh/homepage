import { createElement } from "react"
import { Link } from "phosphor-react"
import slugify from "slugify"
import { PortableText } from "lib/sanity"

import BlockCode from "components/BlockCode"
import BlockImage from "components/BlockImage"
import BlockStack from "components/BlockStack"
import LinkPreview from "components/LinkPreview"

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
            return createElement(props.node.style, {
              id: slug,
              style: {
                scrollMarginTop: "5rem",
              },
              children: [
                <a href={`#${slug}`} key="anchor" className="group">
                  <span className="mr-3">{props.children}</span>
                  <span>
                    <Link
                      className="hidden sm:group-hover:inline"
                      size=".75em"
                      weight="bold"
                    />
                  </span>
                </a>,
              ],
            })
          } else if (props.node.style === "blockquote") {
            return <blockquote>{props.children}</blockquote>
          } else return <p>{props.children}</p>
        },
        code: function RenderCode(props) {
          return (
            <BlockCode
              code={props.node.code}
              language={props.node.language}
              filename={props.node.filename}
            />
          )
        },
        image: function RenderImage(props) {
          return <BlockImage image={props} />
        },
        meta: function RenderMeta(props) {
          return <BlockStack node={props.node} />
        },
      },
      marks: {
        link: function RenderLink(props) {
          return (
            <LinkPreview
              href={props.mark.href}
              screenshot={props.mark.screenshot}
            >
              {props.children}
            </LinkPreview>
          )
        },
      },
    }}
  />
)

export default BlockContent
