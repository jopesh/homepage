interface ClientConfig {
  projectId: string
  dataset: string
  apiVersion?: string
  token?: string
  useCdn?: boolean
  withCredentials?: boolean
}

export const sanityConfig: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: "production",
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2022-02-12",
}
