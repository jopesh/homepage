import { useRouter } from 'next/router'
import Image from 'next/image'

import { getClient, urlFor } from 'lib/sanity'
import { groq } from 'next-sanity'
import Head from 'next/head'

export const getStaticProps = async (ctx) => {
  const author = await getClient().fetch(groq`*[_type=="author"][0]`)
  return {
    props: {
      author,
    },
  }
}

export default function OgImage({ author }) {
  const router = useRouter()
  const { query } = router
  return (
    <div className='relative w-full h-screen bg-gradient-to-br from-indigo-700 to-indigo-500'>
      <Head>
        <meta name='robots' content='noindex, nofollow' />
      </Head>
      <div className='absolute inset-0'>
        <Image src='/images/meta-bg.png' layout='fill' objectFit='cover' />
      </div>
      <div className='absolute z-50 top-12 left-12'>
        <h1 className='font-black leading-tight text-white text-7xl xl:text-8xl'>
          {query.title}
        </h1>
      </div>
      <div className='absolute z-50 flex items-center bottom-12 left-12'>
        <div className='flex overflow-hidden rounded-full ring-8 ring-white border-6'>
          <Image
            src={urlFor(author.image).width(512).height(512).url()}
            width={128}
            height={128}
            className=''
          />
        </div>
        <div className='ml-10 text-white'>
          <h2 className='text-5xl font-bold '>{author.name}</h2>
          <p className='text-4xl '>Freelance web developer</p>
        </div>
      </div>
    </div>
  )
}
