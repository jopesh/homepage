import type { PropsWithChildren } from "react"
import Footer from "./footer"
import Header from "./header"

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
