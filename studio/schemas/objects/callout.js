import { Card, Heading, Stack, Text } from "@sanity/ui"

import React from "react"

const Preview = ({ value }) => {
  const { title, body } = value
  console.log("Value: ", value)
  return (
    <Card tone="caution" padding={4} radius={2} shadow={1}>
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
