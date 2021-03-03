/* global plausible */
import Image from "next/image"
import { PaperPlaneTilt, TwitterLogo } from "phosphor-react"

const Intro = () => {
  const handleClick = (e) => {
    e.preventDefault()
    typeof plausible !== "undefined" && plausible("Lead")
    window.location.href = "mailto:mail@johnschmidt.de"
  }
  return (
    <section id="author">
      <div className="space-y-6 sm:space-y-8">
        <div className="inline-flex overflow-hidden rounded-full">
          <Image
            src="/images/portrait.jpg"
            width="64"
            height="64"
            layout="fixed"
            alt="Portrait photo of John"
            priority
          />
        </div>
        <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Hey, I&apos;m John.
        </h1>
        <div className="space-y-3 text-gray-700 dark:text-gray-200 max-w-prose sm:text-lg md:text-xl lg:text-2xl">
          <p>
            at daytime I am a full-time paramedic and educator with a passion
            for web development and computer sciences living in Hamburg.
          </p>
          <p>
            My goal is creating fast, simple and accessible web experiences for
            everyone to use and enjoy. I currently focus on{" "}
            <span className="line-through">WordPress</span>{" "}
            <a
              href="https://www.bigcommerce.com/articles/headless-commerce/"
              target="_blank"
              rel="noopener noreferrer"
            >
              headless e-commerce
            </a>{" "}
            and{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </a>
            .
          </p>
        </div>

        <div className="flex space-x-4 md:space-x-6">
          <a
            onClick={handleClick}
            href="mailto:mail@johnschmidt.de"
            className="inline-flex items-center px-5 py-3 space-x-3 text-lg font-semibold text-white bg-indigo-600 md:px-7 md:py-4 md:text-xl hover:bg-indigo-700 ring-indigo-500 ring-offset-2 hover:no-underline"
          >
            <span>E-Mail</span>
            <PaperPlaneTilt weight="fill" />
          </a>
          <a
            href="https://twitter.com/jope_sh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-3 space-x-3 text-lg font-semibold text-white bg-blue-500 md:px-7 md:py-4 md:text-xl hover:bg-blue-600 ring-blue-500 ring-offset-2 hover:no-underline"
          >
            <span>Twitter</span>
            <TwitterLogo weight="fill" />
          </a>
        </div>
        <p className="sr-only">Scroll down</p>
      </div>
    </section>
  )
}

export default Intro
