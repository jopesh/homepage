import { FaDev, FaGithub, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="max-w-screen-lg px-6 mx-auto my-24">
      <div className="flex items-center mb-4 space-x-1.5 sm:justify-center -ml-2 sm:ml-0 text-lg md:text-2xl">
        <a
          className="p-2 hover:text-indigo-600 dark:hover:text-indigo-300"
          href="https://twitter.com/jope_sh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter focusable="false" />
          <span className="sr-only">Twitter profile</span>
        </a>
        <a
          className="p-2 hover:text-indigo-600 dark:hover:text-indigo-300"
          href="https://github.com/jopesh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub focusable="false" />
          <span className="sr-only">GitHub profile</span>
        </a>
        <a
          className="p-2 hover:text-indigo-600 dark:hover:text-indigo-300"
          href="https://dev.to/jopesch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDev focusable="false" />
          <span className="sr-only">Dev.to profile</span>
        </a>
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
        <p className="inline-flex items-center space-x-1">
          <span>Made by John Schmidt in {new Date().getFullYear()}</span>
        </p>
        <p>in Hamburg (soon Berlin)</p>
      </div>
    </footer>
  )
}

export default Footer
