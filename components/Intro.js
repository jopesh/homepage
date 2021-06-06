/* global plausible */
import Image from "next/image"
import { At, TwitterLogo } from "phosphor-react"

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
            Health Professionals Educator, Paramedic and Front-end web
            developer.
          </p>
          <p>
            My goal is to create fast, simple and accessible web experiences for
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
          <p>I am currently available for freelance and contract work.</p>
        </div>

        <div className="flex space-x-4 md:space-x-6">
          <a
            onClick={handleClick}
            href="mailto:mail@johnschmidt.de"
            className="inline-flex items-center px-5 py-3 space-x-3 text-lg font-semibold text-indigo-900 bg-indigo-100 md:px-7 md:py-4 md:text-xl hover:bg-indigo-200 ring-indigo-500 ring-offset-2 hover:no-underline dark:bg-indigo-900 dark:text-indigo-100 dark:hover:bg-indigo-800"
          >
            <span>E-Mail</span>
            <At weight="bold" />
          </a>
          <a
            href="https://twitter.com/jope_sh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-3 space-x-3 text-lg font-semibold text-green-900 bg-green-100 md:px-7 md:py-4 md:text-xl hover:bg-green-200 ring-green-500 ring-offset-2 hover:no-underline dark:bg-green-900 dark:text-green-100 dark:hover:bg-green-800"
          >
            <span>Twitter</span>
            <TwitterLogo weight="fill" />
          </a>
        </div>
        <p className="sr-only">Scroll down to view more</p>
      </div>
    </section>
  )
}

export default Intro
