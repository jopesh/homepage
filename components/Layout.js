import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div>
      <a
        href="#main"
        className="absolute p-3 bg-white opacity-0 focus-visible:z-50 focus-visible:opacity-100 top-3 left-4 dark:bg-black base-link"
      >
        Skip to main content
      </a>
      <Header />
      <main
        id="main"
        className="max-w-screen-lg px-6 mx-auto mt-6 md:mt-8 lg:mt-10"
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
