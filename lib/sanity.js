import {
  createClient,
  createImageUrlBuilder,
  createPortableTextComponent,
} from "next-sanity"
import markdown from "@sanity/block-content-to-markdown"
import { useNextSanityImage } from "next-sanity-image"

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2021-03-26",
}

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

export const sanityClient = createClient(config)
export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.SANITY_PREVIEW_API_TOKEN,
})

export const useSanityImage = (image) => useNextSanityImage(sanityClient, image)

export const getClient = (usePreview) =>
  usePreview ? previewClient : sanityClient
