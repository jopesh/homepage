import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { groq } from 'next-sanity'
import Image from 'next/image'
import Head from 'next/head'

import { getClient, urlFor } from 'lib/sanity'

export async function getStaticProps() {
  const author = await getClient().fetch(groq`*[_type=="author"][0]`)
  return {
    props: {
      author,
    },
  }
}

export default function OgImageTemplate({ author }) {
  const router = useRouter()
  const avatar = urlFor(author.image).width(500).height(500).url()
  const { query } = router
  return (
    <div className='relative w-full h-screen bg-gradient-to-br to-indigo-500 from-purple-900'>
      <NextSeo nofollow noindex />
      <div className='absolute inset-0'>
        <Image
          src='/images/meta-bg.png'
          layout='fill'
          objectFit='cover'
          loading='eager'
          priority
        />
      </div>
      {query.title ? (
        <>
          <div className='absolute z-50 top-12 left-12 right-12'>
            <h1
              className={`font-black text-white tracking-tight ${
                query.title.length > 25 ? 'text-8xl' : 'text-9xl'
              }`}>
              {query.title}
            </h1>
          </div>
          <div className='absolute z-50 flex items-center bottom-12 left-12'>
            <div className='flex overflow-hidden rounded-full ring-4 ring-white border-6'>
              <Image src={avatar} width={100} height={100} loading='eager' />
            </div>
            <div className='ml-8 text-4xl text-white'>
              <h2 className='font-bold'>{author.name}</h2>
              <p>Front-end developer</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='absolute inset-0 flex flex-col items-center justify-center'>
            <div className='flex overflow-hidden rounded-full ring-4 ring-white'>
              <Image src={avatar} width={200} height={200} loading='eager' />
            </div>
            <div className='mt-8 text-6xl leading-tight text-center text-white'>
              <h1 className='font-bold'>{author.name}</h1>
              <p>Front-end developer</p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
