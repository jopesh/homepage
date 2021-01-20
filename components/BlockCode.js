import Highlight, { defaultProps } from 'prism-react-renderer'
import prismTheme from 'lib/prismTheme'

const BlockCode = ({ code = '', language = 'javascript' }) => {
  return (
    <Highlight
      {...defaultProps}
      theme={prismTheme}
      language={language}
      code={code}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className + ' shadow-lg'} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default BlockCode
