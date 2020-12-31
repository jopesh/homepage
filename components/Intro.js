import Image from 'next/image'

import { urlFor } from 'lib/sanity'
import { ArrowDown, ChatCenteredText } from 'phosphor-react'

const Intro = ({ author }) => {
  const imageUrl = urlFor(author.image).width(256).height(256).url()
  return (
    <section id='author'>
      <div className='flex flex-col items-center'>
        <Image
          src={imageUrl}
          width='96'
          height='96'
          layout='fixed'
          className='rounded-full'
          alt='Portrait photo of John'
        />
        <div className='mt-6 space-y-8 text-center sm:mt-8 md:mt-10 sm:space-y-12'>
          <h1 className='text-4xl font-black tracking-tighter sm:text-6xl'>
            Hi. I'm John.
            <br />
            Web developer.
          </h1>
          <p className='max-w-2xl text-xl sm:text-2xl'>
            I aim to create fast, simple and accessible web experiences for
            everyone to use and enjoy.
          </p>
          <a
            href='mailto:mail@johnschmidt.de'
            className='inline-flex items-center px-6 py-4 space-x-3 text-xl font-medium text-white bg-indigo-700 dark:text-white hover:bg-indigo-600 hover:text-white focus-visible::ring ring-indigo-500 ring-offset-2 hover:no-underline'>
            <span>Get in touch</span>
            <ChatCenteredText focusable='false' weight='bold' size='24' />
          </a>
          <div className='flex flex-col items-center space-y-3 tracking-tight text-gray-500 dark:text-gray-400'>
            <p>Explore my thoughts &amp; work</p>
            <ArrowDown size='24' />
            <p className='sr-only'>Scroll down</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
