import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import { Moon, Sun } from 'phosphor-react'

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  return (
    <div>
      <button
        className='relative flex items-center justify-center w-12 h-12 p-3 -my-4 -ml-4 -mr-2 appearance-none group focus:outline-none focus-visible:ring ring-indigo-500'
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        <span className='sr-only'>
          Switch theme to: {theme === 'light' ? 'Dark theme' : 'Light theme'}
        </span>
        <div
          className={`right-0 p-3 top-0 absolute transform transition duration-300 ease-in-out ${
            theme === 'dark'
              ? 'translate-x-0'
              : 'opacity-0 -translate-x-12 group-hover:-translate-x-9 group-hover:opacity-50'
          }`}>
          <Sun size='24' />
        </div>
        <div
          className={`top-0 p-3 right-0 absolute transform transition duration-300 ease-in-out ${
            theme === 'light'
              ? 'translate-x-0'
              : 'opacity-0 -translate-x-12 group-hover:-translate-x-9 group-hover:opacity-50'
          }`}>
          <Moon size='24' />
        </div>
      </button>
    </div>
  )
}

export default ThemeSwitch
