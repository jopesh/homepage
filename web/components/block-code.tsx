import { PortableTextTypeComponentProps } from "@portabletext/react"
import { PropsWithChildren } from "react"
import Refractor from "react-refractor"
import json from "refractor/lang/json"
import jsx from "refractor/lang/jsx"
import tsx from "refractor/lang/tsx"
import typescript from "refractor/lang/typescript"

Refractor.registerLanguage(jsx)
Refractor.registerLanguage(tsx)
Refractor.registerLanguage(typescript)
Refractor.registerLanguage(json)

const BlockCode: React.FC<
  PropsWithChildren<PortableTextTypeComponentProps<any>>
> = (props) => {
  const { language, code } = props.value
  return <Refractor language={language} value={code} />
}
export default BlockCode
