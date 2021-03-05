import Prism from "prismjs"
Prism.manual = true

const BlockCode = ({ code = "", language = "javascript", filename }) => {
  const html = Prism.highlight(code, Prism.languages[language], language)
  return (
    <div>
      <pre className={`language-${language}`}>
        <code
          className={`language-${language}`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </pre>
      {filename && (
        <span className="flex justify-center -mt-4 font-mono text-sm font-bold">
          {filename}
        </span>
      )}
    </div>
  )
}

export default BlockCode
