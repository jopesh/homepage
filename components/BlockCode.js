const BlockCode = ({ codeHtml = "", language = "javascript", filename }) => {
  return (
    <div>
      <pre className={`language-${language}`}>
        <code
          className={`language-${language}`}
          dangerouslySetInnerHTML={{ __html: codeHtml }}
        />
      </pre>
      {filename && (
        <span className="flex justify-center -mt-4 font-mono text-xs text-gray-500">
          {filename}
        </span>
      )}
    </div>
  )
}

export default BlockCode
