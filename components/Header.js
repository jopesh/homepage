import Link from 'next/link'
import { useRouter } from 'next/router'
import { Transition } from '@headlessui/react'
import { ArrowLeft, CaretLeft } from 'phosphor-react'

import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  const router = useRouter()
  const root = router.asPath === '/'
  return (
    <header className='sticky top-0 z-40 bg-white bg-opacity-75 blur dark:bg-black dark:bg-opacity-75'>
      <div className='flex items-center justify-between max-w-screen-lg px-6 mx-auto'>
        <div>
          <Link href='/'>
            <a className='flex items-center p-4 -ml-4 space-x-6'>
              <svg
                width={24}
                height={35}
                viewBox='0 0 24 35'
                fill='none'
                className='w-6 text-black dark:text-white'>
                <path
                  d='M13.149 10.915V0H0v2.299h10.851v20.57h2.297v-9.642c4.812.571 8.555 4.674 8.555 9.643a9.718 9.718 0 01-5.99 8.971 9.697 9.697 0 01-12.677-5.255 9.717 9.717 0 01-.74-3.716H0c0 6.622 5.383 12.01 12 12.01s12-5.388 12-12.01c0-6.235-4.771-11.376-10.851-11.955z'
                  fill='currentColor'
                />
              </svg>
              <span className='sr-only'>Go to the homepage</span>
              {!root && (
                <span className='flex items-center font-bold'>Go back</span>
              )}
            </a>
          </Link>
        </div>
        <ThemeSwitch />
      </div>
    </header>
  )
}

export default Header
