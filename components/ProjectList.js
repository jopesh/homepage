import Image from 'next/image'
import { CaretRight } from 'phosphor-react'

import Heading from './Heading'
import LinkArrow from './LinkArrow'
import Placeholder from './Placeholder'

import { urlFor } from 'lib/sanity'
import Link from 'next/link'

const ProjectList = ({ projects }) => {
  return (
    <section id='work' className='pt-4 md:pl-12'>
      <div className='flex items-center justify-between mb-6'>
        <Heading>Recent project</Heading>
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
              <Link href={`/work/${p.slug.current}`}>
                <a className='block group hover:no-underline'>
                  {p.mainImage && (
                    <Image
                      src={imageUrl}
                      width={1440}
                      height={900}
                      sizes='(min-width: 640px) 440px, 592px'
                      alt={p.mainImage.alt}
                    />
                  )}
                  <h3 className='mt-3 font-bold leading-snug group-hover:underline'>
                    {p.title}
                  </h3>
                  <p className='block mt-1.5 text-black dark:text-white'>
                    {p.summary}
                  </p>
                </a>
              </Link>
            </li>
          )
        })}
        {projects.length < 1 && <Placeholder name='projects' />}
      </ul>
    </section>
  )
}

export default ProjectList
