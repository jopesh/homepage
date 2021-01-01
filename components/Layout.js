import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className='max-w-screen-lg px-6 pt-20 mx-auto'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
