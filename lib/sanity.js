import { createImageUrlBuilder, createPortableTextComponent } from "next-sanity"
import markdown from "@sanity/block-content-to-markdown"
import { config } from "./config"

export const urlFor = (source) => createImageUrlBuilder(config).image(source)

export const PortableText = createPortableTextComponent({
  ...config,
  serializers: {},
})

export function toMarkdown(blocks) {
  return markdown(blocks, {
    serializers: {
      types: {
        image: () => null,
        meta: () => null,
        code: (props) =>
          "```" + props.node.language + "\n" + props.node.code + "\n```",
      },
    },
  })
}
