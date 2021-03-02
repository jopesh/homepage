import Link from "next/link"
import { useRouter } from "next/router"

import ThemeSwitch from "./ThemeSwitch"
import Logo from "./Logo"

const Header = () => {
  const router = useRouter()
  const category = router.query.category
    ? router.query.category
        .charAt(0)
        .toUpperCase()
        .concat(router.query.category.substr(1))
    : router.asPath
        .substr(1)
        .charAt(0)
        .toUpperCase()
        .concat(router.asPath.substr(2))
  const root = router.asPath === "/"
  return (
    <header className="sticky top-0 z-40 bg-white bg-opacity-75 blur dark:bg-black dark:bg-opacity-75">
      <div className="flex items-center justify-between max-w-screen-lg px-6 mx-auto">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <a className="py-4 pl-4 pr-1 -ml-4 base-link">
              <Logo className="w-4 text-black dark:text-white" />
              <span className="sr-only">Go to the homepage</span>
            </a>
          </Link>
          {!root && (
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
