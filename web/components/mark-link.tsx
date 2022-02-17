import { ArrowSquareOut } from "phosphor-react"
import type { PortableTextMarkComponentProps } from "@portabletext/react"
import type { PropsWithChildren } from "react"

const MarkLink: React.FC<PropsWithChildren<PortableTextMarkComponentProps>> = (
  props,
) => {
  return (
    <a
      href={props.value?.href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center space-x-[0.2em] rounded underline focus:outline-none focus-visible:ring"
    >
      <span>{props.children}</span>
      <ArrowSquareOut />
    </a>
  )
}

export default MarkLink
