import type { SanityImageSource } from "@sanity/image-url/lib/types/types"
import imageUrlBuilder from "@sanity/image-url"
import { sanityConfig } from "./sanity.config"

// Helpers

export const urlFor = (source: SanityImageSource) =>
  imageUrlBuilder(sanityConfig).image(source)
