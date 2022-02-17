import { Card, Heading, Stack, Text } from "@sanity/ui"

import React from "react"

const Preview = ({ value }) => {
  const { title, body, tone } = value
  console.log("Value: ", value)
  return (
    <Card tone={String(tone).toLowerCase()} padding={4} radius={2} shadow={1}>
      <Stack space={4}>
        <Heading as="h5" size={1}>
          {title}
        </Heading>
        <Text>{body}</Text>
      </Stack>
    </Card>
  )
}

export default {
  name: "callout",
  title: "Callout",
  type: "object",
  preview: {
    select: {
      title: "title",
      tone: "tone",
      body: "body",
    },
    component: Preview,
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "tone",
      title: "Tone",
      type: "string",
      initialValue: "default",
      options: {
        list: [
          { title: "Default", value: "default" },
          { title: "Positive", value: "positive" },
          { title: "Caution", value: "caution" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
          },
          lists: [],
          styles: [],
        },
      ],
    },
  ],
}
