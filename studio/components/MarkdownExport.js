import React from 'react'
import toMarkdown from '@sanity/block-content-to-markdown'

import { Code, Card, Button, Box, TextArea } from '@sanity/ui'
import imageUrlBuilder from '@sanity/image-url'
import { Clipboard } from 'phosphor-react'

const builder = imageUrlBuilder({
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_API_DATASET
})

const serializers = {
  types: {
    code: props =>
      '```' + props.node.language + '\n' + props.node.code + '\n```',
    image: props => {
      console.log(props)
      return `![${props.node.alt}](${builder.image(props.node.asset).url()})`
    },
    meta: props => ''
  }
}

export default function MarkdownExport ({ document }) {
  const { displayed } = document
  if (displayed?.category === 'project') return null
  const input = toMarkdown(displayed.body, { serializers })
  const copy = async () => await navigator.clipboard.writeText(input)
  return (
    <Card padding='4' width='2'>
      <Box paddingBottom='4'>
        <Button text='Copy' icon={Clipboard} tone='primary' onClick={copy} />
      </Box>
      <TextArea
        contentEditable='false'
        style={{ whiteSpace: 'pre-wrap', height: '75vh' }}
      >
        {input}
      </TextArea>
    </Card>
  )
}
