import { createClient } from "next-sanity"
import { config, sanityConfig } from "./config"

export const sanityClient = createClient(config)
export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.SANITY_PREVIEW_API_TOKEN,
})

export const getClient = (usePreview) =>
  usePreview ? previewClient : sanityClient
