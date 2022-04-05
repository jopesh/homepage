import type { NextApiRequest, NextApiResponse } from "next"
import { isValidRequest } from "@sanity/webhook"

export default async function revalidateHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (!isValidRequest(req, process.env.SANITY_WEBHOOK_SECRET!)) {
    return res.status(401).json({ error: "Unauthorized request" })
  }
  const { slug, tagsSlugs } = req.body
  if (!slug) {
    return res.status(400).json({ error: "Invalid request" })
  }
  try {
    console.log(`[API] Revalidating: /`)
    console.log(`[API] Revalidation: /post/${slug}`)
    await res.unstable_revalidate(`/post/${slug}`)
    if (tagsSlugs?.length) {
      await Promise.all(
        tagsSlugs.map(async (tagSlug: string) => {
          console.log(`[API] Revalidating: /tag/${tagSlug}`)
          return await res.unstable_revalidate(`/tag/${tagSlug}`)
        }),
      )
    }
    return res.status(200).json({ message: "OK" })
  } catch (error) {
    console.error("[API] ", error)
    return res.status(500).json({ error })
  }
}
