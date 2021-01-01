import Image from 'next/image'
import { CaretRight } from 'phosphor-react'

import Heading from './Heading'
import LinkArrow from './LinkArrow'
import Placeholder from './Placeholder'

import { urlFor } from 'lib/sanity'

const ProjectList = ({ projects }) => {
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
          const imageUrl = urlFor(p.mainImage).width(1024).height(768).url()
          return (
            <li key={p._id}>
              {p.mainImage && (
                <Image
                  src={imageUrl}
                  width={1024}
                  height={768}
                  sizes='(min-width: 640px) 440px'
                  alt={p.mainImage.alt}
                />
              )}
              <h3 className='mt-3 font-bold leading-snug'>{p.title}</h3>
              <p className='block mt-1.5'>{p.summary}</p>
              <LinkArrow href={`/work/${p.slug.current}`} text='Read more' />
            </li>
          )
        })}
        {projects.length < 3 && <Placeholder name='projects' />}
      </ul>
    </section>
  )
}

export default ProjectList
