import Image from 'next/image'
import { ArrowDown, ChatCenteredText } from 'phosphor-react'

import { urlFor } from 'lib/sanity'

const Intro = ({ author }) => {
  const imageUrl = urlFor(author.image).width(256).height(256).url()
  const handleClick = (e) => {
    e.preventDefault()
    plausible('Lead')
    window.location.href = 'mailto:mail@johnschmidt.de'
  }
  return (
    <section id='author'>
      <div className='flex flex-col items-center justify-between space-y-8 text-center md:space-y-10'>
        {author.image && (
          <div className='flex overflow-hidden rounded-full'>
            <Image
              src={imageUrl}
              width='96'
              height='96'
              layout='fixed'
              alt='Portrait photo of John'
              priority
            />
          </div>
        )}
        <h1 className='text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl'>
          Hi. I'm John.
          <br />
          Front-end developer.
        </h1>
        <p className='max-w-xl text-lg lg:max-w-2xl md:text-xl lg:text-2xl'>
          I aim to create fast, simple and accessible web experiences for
          everyone to use and enjoy.
        </p>
        <div>
          <a
            onClick={handleClick}
            href='mailto:mail@johnschmidt.de'
            className='inline-flex items-center px-6 py-4 space-x-3 text-xl font-semibold text-white bg-indigo-700 dark:text-white hover:bg-indigo-600 hover:text-white ring-offset-2 hover:no-underline'>
            <span>Get in touch</span>
            <ChatCenteredText focusable='false' weight='bold' size='24' />
          </a>
        </div>
        <p className='flex flex-col items-center tracking-tight text-center text-gray-500 dark:text-gray-400'>
          <span className='mb-4'>Explore my thoughts &amp; work</span>
          <ArrowDown size='24' />
        </p>
        <p className='sr-only'>Scroll down</p>
      </div>
    </section>
  )
}

export default Intro
