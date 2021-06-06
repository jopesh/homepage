import { useRouter } from "next/router"
import { NextSeo } from "next-seo"
import Image from "next/image"

export default function OgImageTemplate() {
  const router = useRouter()
  const { query } = router
  return (
    <div className="relative w-full h-screen bg-gradient-to-br to-green-500 from-indigo-700">
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
            <div className="flex overflow-hidden rounded-full shadow-xl ring-4 ring-white border-6">
              <Image
                src="/images/portrait.jpg"
                width={100}
                height={100}
                loading="eager"
              />
            </div>
            <div className="ml-10 text-5xl text-white">
              <h2 className="font-semibold">John Schmidt</h2>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="flex overflow-hidden rounded-full shadow-xl ring-4 ring-white">
              <Image
                src="/images/portrait.jpg"
                width={196}
                height={196}
                loading="eager"
              />
            </div>
            <div className="mt-8 text-center text-white text-7xl">
              <h1 className="font-bold text-">John Schmidt</h1>
              <p className="mt-4 text-5xl">Front-end web developer</p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
