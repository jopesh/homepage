import { getHighlightedCode } from 'lib/syntax'

const BlockCode = ({ code, language }) => {
  const syntax = code && getHighlightedCode(code, language)
  const preClass = `language-${language}`
  return (
    <pre className={preClass}>
      <code dangerouslySetInnerHTML={{ __html: syntax }} />
    </pre>
  )
}

export default BlockCode
