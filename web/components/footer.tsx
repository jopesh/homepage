import { SiDevdotto, SiGithub, SiTwitter } from "react-icons/si"

import Container from "./container"
import { Heart } from "phosphor-react"

type SocialItemProps = {
  icon: React.FC
  href: string
  label: string
}

const SocialItem: React.FC<SocialItemProps> = ({ icon, href, label }) => {
  const Icon = icon
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex rounded p-2 text-slate-11 hover:text-slate-12 focus:outline-none focus-visible:text-slate-12 focus-visible:ring focus-visible:ring-indigo-7 dark:text-slateDark-11 dark:hover:text-slateDark-12 dark:focus-visible:text-slateDark-12 dark:focus-visible:ring-indigoDark-7"
    >
      <span className="sr-only">{label}</span>
      <Icon />
    </a>
  )
}

const Footer: React.FC = () => {
  return (
    <footer className="mt-10 mb-10 text-center font-mono text-xs sm:text-sm lg:mt-16">
      <Container>
        <div className="mb-6 items-center">
          <p className="inline-flex items-center">
            <span>Made in Berlin with</span>
            <Heart
              className="ml-2 text-indigo-9 dark:text-indigoDark-9"
              weight="fill"
            />
          </p>
          <p>2022</p>
        </div>
        <div className="flex items-center justify-center space-x-2 text-xl md:text-2xl">
          <SocialItem
            href="https://github.com/jopesh"
            label="GitHub profile"
            icon={SiGithub}
          />
          <SocialItem
            href="https://twitter.com/jope_sh"
            label="Twitter profile"
            icon={SiTwitter}
          />
          <SocialItem
            href="https://dev.to/jopesh"
            label="Dev.to Profile"
            icon={SiDevdotto}
          />
        </div>
      </Container>
    </footer>
  )
}

export default Footer
