import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-json'

const BlockCode = ({ code = '', language = 'javascript' }) => {
  const html = Prism.highlight(code, Prism.languages[language], language)
  return (
    <pre className={`language-${language}`}>
      <code dangerouslySetInnerHTML={{ __html: html }} />
    </pre>
  )
}

export default BlockCode
