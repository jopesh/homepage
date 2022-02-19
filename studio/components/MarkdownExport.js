/* eslint-disable react/prop-types */
import { Card, TextArea } from "@sanity/ui"

import React from "react"
import imageUrlBuilder from "@sanity/image-url"
import toMarkdown from "@sanity/block-content-to-markdown"

const builder = imageUrlBuilder({
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_API_DATASET,
})

const serializers = {
  types: {
    code: (props) =>
      "```" + props.node.language + "\n" + props.node.code + "\n```",
    image: (props) => {
      return `![${props.node.alt}](${builder.image(props.node.asset).url()})`
    },
    callout: (props) =>
      `**${props.node.title}**\n${toMarkdown(props.node.body)}`,
  },
}

export default function MarkdownExport({ document }) {
  const { displayed } = document
  if (displayed?.category === "project") return null
  const input = toMarkdown(displayed.body, { serializers })
  return (
    <Card padding="4" width="2">
      <TextArea
        contentEditable="false"
        style={{ whiteSpace: "pre-wrap", height: "75vh" }}
      >
        {input}
      </TextArea>
    </Card>
  )
}
