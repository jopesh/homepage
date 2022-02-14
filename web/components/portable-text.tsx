import { PortableText as BasePortableText } from "@portabletext/react"
import BlockCode from "./block-code"
import BlockImage from "./block-image"
import MarkLink from "./mark-link"

type Props = {
  value: any
}

const PortableText: React.FC<Props> = ({ value }) => {
  return (
    <BasePortableText
      value={value}
      components={{
        types: {
          code: (props) => <BlockCode {...props} />,
          image: (props) => <BlockImage {...props} />,
        },
        marks: {
          link: (props) => <MarkLink {...props} />,
        },
      }}
    />
  )
}

export default PortableText
