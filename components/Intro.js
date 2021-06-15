/* global plausible */
import Image from "next/image"
import { TwitterLogo, PaperPlaneTilt } from "phosphor-react"
import me from "public/images/portrait.jpg"

const Intro = () => {
  const handleClick = (e) => {
    e.preventDefault()
    typeof plausible !== "undefined" && plausible("Lead")
    window.location.href = "mailto:mail@johnschmidt.de"
  }
  return (
    <section id="author" className="relative isolate">
      <div className="opacity-10 dark:opacity-[15%]">
        <div className="absolute right-0 w-64 h-64 bg-indigo-500 rounded-full sm:w-96 sm:h-96 -top-16 filter mix-blend-multiply animate-blob blur-2xl" />
        <div className="absolute top-0 w-64 h-64 rounded-full bg-amber-500 sm:w-96 sm:h-96 right-64 filter mix-blend-multiply animate-blob blur-2xl animation-delay-4000" />
        <div className="absolute w-64 h-64 rounded-full bg-fuchsia-500 sm:w-96 sm:h-96 right-10 top-48 filter mix-blend-multiply animate-blob blur-2xl animation-delay-8000" />
      </div>
      <div className="relative space-y-6">
        <div className="inline-flex overflow-hidden rounded-full">
          <Image
            src={me}
            width="64"
            height="64"
            layout="fixed"
            alt="Portrait photo of John"
            placeholder="blur"
            priority
          />
        </div>
        <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Hey, I&apos;m John.
        </h1>
        <div className="space-y-4 text-gray-700 dark:text-gray-200 max-w-prose sm:text-lg md:text-xl">
          <p>Health Professionals Educator, paramedic and web developer.</p>
          <p>
            My goal is to create fast, simple and accessible web experiences for
            everyone to use and enjoy. I currently focus on{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <span className="absolute h-3 -bottom-1 inset-x-1 bg-amber-100 dark:bg-amber-500 dark:bg-opacity-20 group-hover:bg-amber-200 dark:group-hover:bg-opacity-25" />
              <span className="relative">Next.js</span>
            </a>{" "}
            and{" "}
            <a
              href="https://www.bigcommerce.com/articles/headless-commerce/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group whitespace-nowrap"
            >
              <span className="absolute h-3 -bottom-1 inset-x-1 bg-amber-100 dark:bg-amber-500 dark:bg-opacity-20 group-hover:bg-amber-200 dark:group-hover:bg-opacity-25" />
              <span className="relative">headless e-commerce</span>
            </a>
            .
          </p>
          <p>
            I am currently{" "}
            <span className="relative">
              <span className="absolute h-3 bg-green-100 -bottom-1 inset-x-1 dark:bg-green-500 dark:bg-opacity-20" />
              <span className="relative">available</span>
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
