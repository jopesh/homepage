import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div>
      <a
        href='#main'
        className='absolute p-3 bg-white opacity-0 focus-visible:z-50 focus-visible:opacity-100 top-6 left-4 dark:bg-black'>
        Skip to main content
      </a>
      <Header />
      <main id='main' className='max-w-screen-lg px-6 mx-auto'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
