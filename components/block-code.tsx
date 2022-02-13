import Refractor from "react-refractor"
import json from "refractor/lang/json"
import jsx from "refractor/lang/jsx"

Refractor.registerLanguage(jsx)
Refractor.registerLanguage(json)

type Props = {
  language: string
  code: string
}

const BlockCode: React.FC<Props> = ({ language, code }) => {
  return <Refractor language={language} value={code} />
}
export default BlockCode
