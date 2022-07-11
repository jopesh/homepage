import type { NextApiRequest, NextApiResponse } from "next"
import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook"

const secret = process.env.SANITY_WEBHOOK_SECRET!

export default async function revalidateHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const signature = req.headers[SIGNATURE_HEADER_NAME] as string
  const body = await readBody(req)
  if (!isValidSignature(body, signature, secret)) {
    return res.status(401).json({ error: "Unauthorized request" })
  }
  const jsonBody = JSON.parse(body)
  const { slug, tagsSlugs } = jsonBody
  if (!slug) {
    return res.status(400).json({ error: "Invalid request" })
  }
  try {
    console.log(`[API] Revalidating: /`)
    await res.revalidate("/")
    console.log(`[API] Revalidation: /post/${slug}`)
    await res.revalidate(`/post/${slug}`)
    if (tagsSlugs?.length) {
      await Promise.all(
        tagsSlugs.map(async (tagSlug: string) => {
          console.log(`[API] Revalidating: /tag/${tagSlug}`)
          return await res.revalidate(`/tag/${tagSlug}`)
        }),
      )
    }
    return res.status(200).json({ message: "OK" })
  } catch (error) {
    console.error("[API] ", error)
    return res.status(500).json({ error })
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
}

async function readBody(readable: any) {
  const chunks = []
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk)
  }
  return Buffer.concat(chunks).toString("utf8")
}
