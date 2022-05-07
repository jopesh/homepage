import type { PropsWithChildren } from "react"

const Container: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <div className="mx-auto max-w-2xl px-4">{children}</div>
)

export default Container
