/* global plausible */
import Image from "next/image"
import { TwitterLogo, PaperPlaneTilt } from "phosphor-react"

const Intro = () => {
  const handleClick = (e) => {
    e.preventDefault()
    typeof plausible !== "undefined" && plausible("Lead")
    window.location.href = "mailto:mail@johnschmidt.de"
  }
  return (
    <section id="author" className="relative">
      <div className="opacity-[12%] dark:opacity-[17%]">
        <div className="absolute w-64 h-64 bg-indigo-500 rounded-full sm:w-96 sm:h-96 -top-16 right-10 filter mix-blend-multiply animate-blob blur-2xl dark:blur-3xl" />
        <div className="absolute top-0 w-64 h-64 bg-yellow-500 rounded-full sm:w-96 sm:h-96 right-40 filter mix-blend-multiply animate-blob blur-2xl dark:blur-3xl animation-delay-4000" />
        <div className="absolute w-64 h-64 rounded-full sm:w-96 sm:h-96 bg-fuchsia-500 right-10 top-48 filter mix-blend-multiply animate-blob blur-2xl dark:blur-3xl animation-delay-2000" />
      </div>
      <div className="relative space-y-6">
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
        <div className="space-y-4 text-gray-700 dark:text-gray-300 max-w-prose sm:text-lg md:text-xl lg:text-2xl">
          <p>
            Health Professionals Educator, Paramedic and front-end web
            developer.
          </p>
          <p>
            My goal is to create fast, simple and accessible web experiences for
            everyone to use and enjoy. I currently focus on{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Next.js
            </a>{" "}
            and{" "}
            <a
              href="https://www.bigcommerce.com/articles/headless-commerce/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              headless e-commerce
            </a>
            .
          </p>
          <p>
            I am currently{" "}
            <span className="bg-green-400 bg-opacity-10 dark:bg-opacity-20">
              available
            </span>{" "}
            for freelance and contract work.
          </p>
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">
          <a
            onClick={handleClick}
            href="mailto:mail@johnschmidt.de"
            className="inline-flex items-center px-5 py-4 space-x-2 font-semibold text-gray-900 bg-amber-300 sm:text-lg hover:bg-amber-200 active:bg-amber-100 focus-visible:ring focus-visible:ring-amber-500 focus:outline-none"
          >
            <PaperPlaneTilt weight="bold" />
            <span>Get in touch</span>
          </a>
          <a
            href="https://twitter.com/jope_sh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-4 space-x-2 font-semibold text-gray-900 sm:text-lg hover:bg-gray-100 active:bg-gray-200 focus-visible:ring focus-visible:ring-gray-500 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-900 dark:active:bg-gray-800 dark:focus-visible:ring-gray-300"
          >
            <TwitterLogo weight="bold" />
            <span>Follow</span>
          </a>
        </div>
        <p className="sr-only">Scroll down to view more</p>
      </div>
    </section>
  )
}

export default Intro
