import { PortableText } from "@portabletext/react"
import type { PortableTextTypeComponentProps } from "@portabletext/react"
import { PropsWithChildren } from "react"
import { Warning } from "phosphor-react"

const BlockCallout: React.FC<
  PropsWithChildren<PortableTextTypeComponentProps<any>>
> = (props) => {
  const { title, body } = props.value
  return (
    <div className="not-prose rounded border border-crimson-6 bg-crimson-1 p-3 text-crimson-11 dark:border-crimsonDark-6 dark:bg-crimsonDark-1 dark:text-crimsonDark-11 sm:p-4">
      <p className="flex items-center">
        <Warning weight="bold" className="mr-2" />
        <strong>{title}</strong>
      </p>
      <PortableText value={body} />
    </div>
  )
}

export default BlockCallout
