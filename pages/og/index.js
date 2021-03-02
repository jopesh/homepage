import { useRouter } from "next/router"
import { NextSeo } from "next-seo"
import Image from "next/image"

export default function OgImageTemplate() {
  const router = useRouter()
  const { query } = router
  return (
    <div className="relative w-full h-screen bg-gradient-to-br to-indigo-500 from-purple-900">
      <NextSeo nofollow noindex />
      <div className="absolute inset-0">
        <Image
          src="/images/meta-bg.png"
          layout="fill"
          objectFit="cover"
          loading="eager"
          priority
        />
      </div>
      {query.title ? (
        <>
          <div className="absolute z-50 top-12 left-12 right-12">
            <h1
              className={`font-black text-white tracking-tight ${
                query.title.length > 25 ? "text-8xl" : "text-9xl"
              }`}
            >
              {query.title}
            </h1>
          </div>
          <div className="absolute z-50 flex items-center bottom-12 left-12">
            <div className="flex overflow-hidden rounded-full ring-4 ring-white border-6">
              <Image
                src="/images/portrait.jpg"
                width={100}
                height={100}
                loading="eager"
              />
            </div>
            <div className="ml-8 text-4xl text-white">
              <h2 className="font-bold">John Schmidt</h2>
              <p>Front-end developer</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="flex overflow-hidden rounded-full ring-4 ring-white">
              <Image
                src="/images/portrait.jpg"
                width={200}
                height={200}
                loading="eager"
              />
            </div>
            <div className="mt-8 text-6xl leading-tight text-center text-white">
              <h1 className="font-bold">John Schmidt</h1>
              <p>Front-end developer</p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
