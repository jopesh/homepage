import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className='max-w-screen-lg px-6 mx-auto'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
