import Image from 'next/image'
import { CaretRight } from 'phosphor-react'

import Heading from './Heading'
import LinkArrow from './LinkArrow'
import Placeholder from './Placeholder'

import { urlFor } from 'lib/sanity'
import Link from 'next/link'

const WorkList = ({ projects }) => {
  return (
    <section id='work' className='pt-4 md:pl-12'>
      <div className='flex items-center justify-between mb-6'>
        <Heading>Recent work</Heading>
        {/* <a href='/' className='flex items-center py-1 space-x-1'>
          <span>More</span>
          <CaretRight />
        </a> */}
      </div>
      <ul className='space-y-6'>
        {projects.map((p) => {
          const imageUrl = urlFor(p.mainImage).width(1440).height(900).url()
          return (
            <li key={p._id}>
              {p.mainImage && (
                <Image
                  src={imageUrl}
                  width={1440}
                  height={900}
                  sizes='(min-width: 768px) 439px'
                  alt={p.mainImage.alt}
                />
              )}
              <Link href={`/work/${p.slug.current}`}>
                <a className='block py-1 mt-2 mb-0.5'>
                  <h3 className='font-bold leading-snug'>{p.title}</h3>
                </a>
              </Link>
              <p className='block'>{p.summary}</p>
            </li>
          )
        })}
        {projects.length < 1 && <Placeholder name='projects' />}
      </ul>
    </section>
  )
}

export default WorkList
