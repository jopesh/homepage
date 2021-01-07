import React from 'react'
import toMarkdown from '@sanity/block-content-to-markdown'

import { Code, Card, Button, Box } from '@sanity/ui'
import { Clipboard } from 'phosphor-react'

const serializers = {
  types: {
    code: (props) =>
      '```' + props.node.language + '\n' + props.node.code + '\n```',
  },
}

export default function MarkdownExport({ document }) {
  const { displayed } = document
  if (displayed?.category === 'project') return null
  const input = toMarkdown(displayed.body, { serializers })
  const copy = async () => await navigator.clipboard.writeText(input)
  return (
    <Card padding='4' width='2'>
      <Box paddingBottom='4'>
        <Button text='Copy' icon={Clipboard} tone='primary' onClick={copy} />
      </Box>
      <Code style={{ whiteSpace: 'pre-wrap' }}>{input}</Code>
    </Card>
  )
}
