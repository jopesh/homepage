import { useRouter } from "next/router"
import { NextSeo } from "next-seo"
import Image from "next/image"
import { FaGithub, FaTwitter } from "react-icons/fa"

export default function OgImageTemplate() {
  const router = useRouter()
  const { query } = router
  return (
    <div className="relative w-full h-screen bg-white">
      <NextSeo nofollow noindex />
      {/* <div className="absolute inset-0 overflow-hidden opacity-25">
        <div className="absolute transform scale-150 bg-blue-500 rounded-full -top-12 right-5 h-96 w-96 filter blur-2xl mix-blend-multiply" />
        <div className="absolute transform scale-125 rounded-full bg-fuchsia-500 bottom-6 right-1/3 h-96 w-96 filter blur-2xl mix-blend-multiply" />
        <div className="absolute transform scale-150 rounded-full bg-amber-500 -bottom-10 right-12 h-96 w-96 filter blur-2xl mix-blend-multiply" />
      </div> */}
      <div className="absolute inset-0 opacity-40">
        <Image
          src="/images/meta-bg.png"
          layout="fill"
          objectFit="cover"
          loading="eager"
          alt="Mockup of webpages made by John"
          priority
        />
      </div>
      {query.title ? (
        <>
          <div className="absolute z-50 top-12 inset-x-16">
            <h1
              className={`font-black tracking-tight leading-tight ${
                query.title.length > 25 ? "text-8xl" : "text-9xl"
              }`}
            >
              {query.title}
            </h1>
          </div>
          <div className="absolute z-50 flex items-center justify-between bottom-12 inset-x-16">
            <div className="flex items-center">
              <div className="flex overflow-hidden rounded-full shadow-lg">
                <Image
                  src="/images/portrait.jpg"
                  width={84}
                  height={84}
                  layout="fixed"
                  loading="eager"
                  alt="Portrait of John"
                />
              </div>
              <div className="ml-8 text-4xl">
                <h2 className="font-semibold tracking-tight">John Schmidt</h2>
                <p className="text-2xl">@jope_sh</p>
              </div>
            </div>
            <div></div>
          </div>
        </>
      ) : (
        <>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="flex overflow-hidden rounded-full shadow-lg">
              <Image
                src="/images/portrait.jpg"
                width={126}
                height={126}
                loading="eager"
                layout="fixed"
                alt="Portrait of John"
              />
            </div>
            <div className="mt-8 text-center">
              <h1 className="font-bold text-7xl">John Schmidt</h1>
              <p className="mt-2 text-4xl opacity-70">
                Educator, paramedic and web developer
              </p>
              <div className="flex items-center justify-center mt-10 space-x-8">
                <div className="flex items-center justify-center space-x-4 text-3xl">
                  <FaTwitter weight="fill" />
                  <span>jope_sh</span>
                </div>
                <div className="flex items-center justify-center space-x-4 text-3xl">
                  <FaGithub />
                  <span>jopesh</span>
                </div>
              </div>
              <p className="mt-12 text-4xl font-semibold ">johnschmidt.de</p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
