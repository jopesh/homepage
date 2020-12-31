import { getHighlightedCode } from 'lib/prisma'

const BlockCode = ({ code, language }) => {
  const highlight = getHighlightedCode(code, language)
  const preClass = `language-${language}`
  return (
    <pre className={preClass}>
      <code dangerouslySetInnerHTML={{ __html: highlight }} />
    </pre>
  )
}

export default BlockCode
