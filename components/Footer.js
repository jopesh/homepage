import { Copyright } from 'phosphor-react'
import { FaDev, FaGithub, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='max-w-screen-lg px-6 mx-auto my-24'>
      <div className='flex items-center mb-4 space-x-1.5 sm:justify-center -ml-2 sm:ml-0'>
        <a
          className='p-2'
          href='https://twitter.com/jope_sh'
          target='_blank'
          rel='noopener noreferrer'>
          <FaTwitter size='1.5em' aria-label='Twitter' />
          <span className='sr-only'>Twitter profile</span>
        </a>
        <a
          className='p-2'
          href='https://github.com/jopesh'
          target='_blank'
          rel='noopener noreferrer'>
          <FaGithub size='1.5em' aria-label='GitHub' />
          <span className='sr-only'>Github profile</span>
        </a>
        <a
          className='p-2'
          href='https://dev.to/jopesch'
          target='_blank'
          rel='noopener noreferrer'>
          <FaDev size='1.5em' aria-label='Dev.to' />
          <span className='sr-only'>Dev.to profile</span>
        </a>
      </div>
      <div className='text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
        <p className='inline-flex items-center space-x-1'>
          <span>Made by John Schmidt in {new Date().getFullYear()}</span>
        </p>
        <p>in Hamburg</p>
      </div>
    </footer>
  )
}

export default Footer
