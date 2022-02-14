import { SiGithub, SiTwitter } from "react-icons/si"

import Container from "./container"
import { Heart } from "phosphor-react"

const Footer: React.FC = () => {
  return (
    <footer className="mt-10 mb-10 text-center font-mono text-xs sm:text-sm lg:mt-16">
      <Container>
        <div className="mb-6 items-center">
          <p className="inline-flex items-center">
            <span>Made in Berlin with</span>
            <Heart
              className="ml-2 text-red-700 dark:text-red-300"
              weight="fill"
            />
          </p>
          <p>2022</p>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <a
            href="http://github.com/jopesh/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex p-2 text-xl text-zinc-400 hover:text-zinc-800 dark:text-zinc-500 dark:hover:text-zinc-100"
          >
            <span className="sr-only">GitHub Profile</span>
            <SiGithub />
          </a>
          <a
            href="http://twitter.com/jope_sh/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex p-2 text-xl text-zinc-400 hover:text-zinc-800 dark:text-zinc-500 dark:hover:text-zinc-100"
          >
            <span className="sr-only">Twitter Profile</span>
            <SiTwitter />
          </a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
