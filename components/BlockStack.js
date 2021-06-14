import { Link } from "phosphor-react"
import LinkPreview from "./LinkPreview"

const BlockStack = ({ node }) => {
  return (
    <div className="grid gap-6 my-6 sm:my-8 sm:grid-cols-3">
      <dl>
        <dt className="block mb-3 text-sm font-bold uppercase">Project type</dt>
        <dd>{node.type}</dd>
      </dl>
      <dl>
        <dt className="block mb-3 text-sm font-bold uppercase">
          Technology stack
        </dt>
        {node.tech?.map((i) => {
          return (
            <dd key={i} className="block">
              {i}
            </dd>
          )
        })}
      </dl>
      <dl>
        <dt className="block mb-3 text-sm font-bold uppercase">Live preview</dt>
        {node.live?.map((i) => (
          <dd key={i.title}>
            <LinkPreview
              href={i.url}
              screenshot={i.screenshot}
              className="inline-flex items-center space-x-2"
            >
              <Link />
              <span>{i.title}</span>
            </LinkPreview>
          </dd>
        ))}
      </dl>
    </div>
  )
}

export default BlockStack
