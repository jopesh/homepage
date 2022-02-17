import type { NextApiRequest, NextApiResponse } from "next"

import { isValidRequest } from "@sanity/webhook"

const revalidateHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req
  const secret = process.env.SANITY_WEBHOOK_SECRET!

  if (!isValidRequest(body, secret)) {
    return res.status(401).send("Unauthorized")
  }
  if (!body) {
    return res.status(400).send("Invalid request")
  }

  const { _type, slug } = body
  try {
    await res.unstable_revalidate(`/${_type}/${slug}`)
    console.log(`[API] Revalidated: /${_type}/${slug}`)
    await res.unstable_revalidate(`/`)
    console.log(`[API] Revalidated: /`)
    return res.status(200).send("OK")
  } catch (err) {
    return res.status(500).send(err)
  }
}

export default revalidateHandler
