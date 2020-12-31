import Image from 'next/image'
import { CaretRight } from 'phosphor-react'

import Heading from './Heading'
import LinkArrow from './LinkArrow'
import { urlFor } from 'lib/sanity'

const WorkList = ({ projects }) => {
  return (
    <section id='work' className='pt-4 md:pl-12'>
      <div className='flex items-center justify-between mb-6'>
        <Heading>Recent work</Heading>
        <a href='/' className='flex items-center py-1 space-x-1'>
          <span>More</span>
          <CaretRight />
        </a>
      </div>
      <ul className='space-y-6'>
        {projects.map((p) => {
          const imageUrl = urlFor(p.mainImage).width(1024).height(768).url()
          return (
            <li key={p._id}>
              <Image src={imageUrl} width={1024} height={768} />
              <h3 className='mt-1.5 font-bold leading-snug'>{p.title}</h3>
              <p className='block mt-1.5'>{p.summary}</p>
              <LinkArrow href='/' text='Read more' />
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default WorkList
