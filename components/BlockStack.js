import { Link } from 'phosphor-react'

const BlockStack = ({ node }) => {
  return (
    <div className='grid gap-6 my-12 sm:grid-cols-3'>
      <dl>
        <dt className='block mb-3 text-sm font-bold uppercase'>Project type</dt>
        <dd>{node.type}</dd>
      </dl>
      <dl>
        <dt className='block mb-3 text-sm font-bold uppercase'>
          Technology stack
        </dt>
        {node.tech?.map((i) => {
          return (
            <dd key={i} className='block'>
              {i}
            </dd>
          )
        })}
      </dl>
      <dl>
        <dt className='block mb-3 text-sm font-bold uppercase'>Live preview</dt>
        {node.live?.map((i) => (
          <dd key={i.title}>
            <a
              href={i.url}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center space-x-2'>
              <Link />
              <span>{i.title}</span>
            </a>
          </dd>
        ))}
      </dl>
    </div>
  )
}

export default BlockStack
