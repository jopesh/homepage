import Link from "next/link"
import { useRouter } from "next/router"

import ThemeSwitch from "./ThemeSwitch"
import Logo from "./Logo"

const Header = () => {
  const router = useRouter()
  const category = router.asPath.match(/blog/i)
    ? "Blog"
    : router.asPath.match(/work/i)
    ? "Work"
    : false
  return (
    <header className="sticky top-0 z-40 bg-white bg-opacity-60 backdrop-filter backdrop-blur-xl dark:bg-black dark:bg-opacity-60 backdrop-saturate-100">
      <div className="flex items-center justify-between max-w-screen-lg px-6 mx-auto">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <a className="py-4 pl-4 pr-1 -ml-4 base-link">
              <Logo className="w-4 text-black dark:text-white" />
              <span className="sr-only">Go to the homepage</span>
            </a>
          </Link>
          {category && (
            <div className="flex items-center space-x-2 font-medium">
              <span>/</span>
              <span>{category}</span>
            </div>
          )}
        </div>
        <ThemeSwitch />
      </div>
    </header>
  )
}

export default Header
