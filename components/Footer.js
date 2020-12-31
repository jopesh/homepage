import { Copyright } from 'phosphor-react'
import { convert } from 'number-words'

const Footer = () => {
  const currentYear = convert(new Date().getFullYear())
  return (
    <footer className='max-w-screen-lg px-6 mx-auto mt-12 mb-8'>
      <div className='text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
        <p className='inline-flex items-center space-x-1'>
          <Copyright />
          <span>John Schmidt in {currentYear}</span>
        </p>
        <p>
          Built with{' '}
          <a href='http://nextjs.org' target='_blank' rel='noopener noreferrer'>
            Next.js
          </a>{' '}
          and hosted on{' '}
          <a href='http://vercel.com' target='_blank' rel='noopener noreferrer'>
            Vercel
          </a>
        </p>
        <p>Made in Hamburg</p>
      </div>
    </footer>
  )
}

export default Footer
