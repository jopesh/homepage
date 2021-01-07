import Link from 'next/link'
import { useRouter } from 'next/router'
import { Transition } from '@headlessui/react'
import { ArrowLeft, CaretLeft, HouseLine, HouseSimple } from 'phosphor-react'

import ThemeSwitch from './ThemeSwitch'
import Logo from './Logo'

const Header = () => {
  const router = useRouter()
  const root = router.asPath === '/'
  return (
    <header className='sticky top-0 z-40 mt-4 bg-white bg-opacity-75 blur dark:bg-black dark:bg-opacity-75'>
      <div className='flex items-center justify-between max-w-screen-lg px-6 mx-auto'>
        <div className='flex items-center space-x-2'>
          <Link href='/'>
            <a className='p-4 -ml-4'>
              <Logo className='w-5 text-black dark:text-white' />
              <span className='sr-only'>Go to the homepage</span>
            </a>
          </Link>
          {!root ? (
            <div className='flex items-center space-x-2 font-medium'>
              <Link href='/'>
                <a>John Schmidt</a>
              </Link>
              <span>/</span>
              <span>
                {router.asPath.includes('blog') ? 'Blog' : 'Projects'}
              </span>
            </div>
          ) : (
            <span className='font-medium'>John Schmidt</span>
          )}
        </div>
        <ThemeSwitch />
      </div>
    </header>
  )
}

export default Header
