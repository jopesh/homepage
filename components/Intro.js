/* global plausible */
import Image from "next/image"
import { TwitterLogo, PaperPlaneTilt } from "phosphor-react"
import me from "public/images/portrait.jpg"

const IntroLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative inline-flex group"
  >
    <span className="absolute bottom-0 h-2 bg-indigo-100 group-hover:bg-indigo-200 inset-x-1 dark:bg-indigo-400 dark:bg-opacity-30 dark:group-hover:bg-opacity-50" />
    <span className="relative">{children}</span>
  </a>
)

const Intro = () => {
  const handleClick = (e) => {
    e.preventDefault()
    typeof plausible !== "undefined" && plausible("Lead")
    window.location.href = "mailto:mail@johnschmidt.de"
  }
  return (
    <section id="author" className="relative isolate">
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
          <p>
            Health professionals educator, paramedic and freelance web
            developer.
          </p>
          <p>
            My goal is to create fast, simple and accessible web experiences for
            everyone to use and enjoy. I currently focus on{" "}
            <IntroLink href="https://nextjs.org">Next.js</IntroLink>,{" "}
            <IntroLink href="https://sanity.io">Sanity</IntroLink> and{" "}
            <IntroLink href="https://www.bigcommerce.com/articles/headless-commerce/">
              headless e-commerce
            </IntroLink>{" "}
            with <IntroLink href="https://shopify.com">Shopify</IntroLink>.
          </p>
          <p>
            I am currently{" "}
            <span className="relative">
              <span className="absolute bottom-0 h-2 bg-green-100 inset-x-1 dark:bg-green-400 dark:bg-opacity-20" />
              <span className="relative">available</span>
            </span>{" "}
            for freelance and contract work.
          </p>
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">
          <a
            onClick={handleClick}
            href="mailto:mail@johnschmidt.de"
            className="inline-flex items-center px-5 py-4 space-x-2 font-semibold text-gray-900 rounded-lg bg-amber-300 sm:text-lg hover:bg-amber-200 active:bg-amber-100 focus-visible:ring focus-visible:ring-amber-100 focus:outline-none"
          >
            <PaperPlaneTilt weight="bold" />
            <span>Get in touch</span>
          </a>
          <a
            href="https://twitter.com/jope_sh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-4 space-x-2 font-semibold text-gray-900 rounded-lg sm:text-lg hover:bg-gray-100 active:bg-gray-200 focus-visible:ring focus-visible:ring-gray-500 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-900 dark:active:bg-gray-800 dark:focus-visible:ring-gray-300"
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
