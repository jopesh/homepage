import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'
Prism.manual = true

export function getHighlightedCode(code, language) {
  const replaced = language === 'javascript' ? 'jsx' : language
  const payload = Prism.highlight(code, Prism.languages[replaced], replaced)
  return payload
}
