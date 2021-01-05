import {
  groq,
  createClient,
  createImageUrlBuilder,
  createPortableTextComponent,
  // createPreviewSubscriptionHook,
  // createCurrentUserHook,
} from 'next-sanity'

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
}

export const urlFor = (source) => createImageUrlBuilder(config).image(source)

export const PortableText = createPortableTextComponent({
  ...config,
  serializers: {},
})

export const sanityClient = createClient(config)
export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.SANITY_PREVIEW_API_TOKEN,
})

export const getClient = (usePreview) =>
  usePreview ? previewClient : sanityClient

// Helper function for using the current logged in user account
// export const useCurrentUser = createCurrentUserHook(config)
