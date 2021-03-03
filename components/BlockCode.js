import Highlight, { defaultProps } from "prism-react-renderer"
import prismTheme from "lib/prismTheme"

const BlockCode = ({ code = "", language = "javascript", filename }) => {
  return (
    <Highlight
      {...defaultProps}
      theme={prismTheme}
      language={language}
      code={code}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <>
          <pre className={className + " -mx-6 sm:mx-0"} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
          {filename && (
            <span className="block -mt-4 font-mono text-sm font-semibold text-center">
              `{filename}`
            </span>
          )}
        </>
      )}
    </Highlight>
  )
}

export default BlockCode
