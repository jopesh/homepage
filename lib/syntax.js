import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'
Prism.manual = true

export function getHighlightedCode(code, language) {
  const payload = Prism.highlight(code, Prism.languages[language], language)
  return payload
}
