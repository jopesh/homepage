import Prism from "prismjs"
Prism.manual = true

export default async function digestCode(body) {
  return await Promise.all(
    body.map(async (node) => {
      if (!node.code) return node
      const codeHtml = Prism.highlight(
        node.code,
        Prism.languages[node.language],
        node.language
      )
      return {
        codeHtml,
        ...node,
      }
    })
  )
}
