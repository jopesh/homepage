import { PortableText } from "@portabletext/react"
import type { PortableTextTypeComponentProps } from "@portabletext/react"
import { PropsWithChildren } from "react"
import { Warning } from "phosphor-react"

const BlockCallout: React.FC<
  PropsWithChildren<PortableTextTypeComponentProps<any>>
> = (props) => {
  const { title, body } = props.value
  return (
    <div className="not-prose rounded border border-amber-200 bg-amber-50 p-3 text-amber-900 dark:border-amber-900/50 dark:bg-amber-900/20 dark:text-amber-200 sm:p-4">
      <p className="flex items-center">
        <Warning weight="bold" className="mr-2" />
        <strong>{title}</strong>
      </p>
      <PortableText value={body} />
    </div>
  )
}

export default BlockCallout
