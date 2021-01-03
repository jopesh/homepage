import { Copyright, TwitterLogo } from 'phosphor-react'
import { convert } from 'number-words'

const Footer = () => {
  const currentYear = convert(new Date().getFullYear())
  return (
    <footer className='max-w-screen-lg px-6 mx-auto my-24'>
      <div className='flex items-center justify-center mb-4'>
        <a
          className='p-2'
          href='http://twitter.com/jope_sh'
          target='_blank'
          rel='noopener noreferrer'>
          <TwitterLogo size='24' weight='fill' />
          <span className='sr-only'>Twitter profile</span>
        </a>
      </div>
      <div className='text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
        <p className='inline-flex items-center space-x-1'>
          <Copyright />
          <span>John Schmidt in {currentYear}</span>
        </p>
        <p>Made in Hamburg</p>
      </div>
    </footer>
  )
}

export default Footer
