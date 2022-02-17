import type { NextApiRequest, NextApiResponse } from "next"

import { isValidRequest } from "@sanity/webhook"

const secret = process.env.SANITY_WEBHOOK_SECRET!

const revalidateHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req

  if (!isValidRequest(req, secret)) {
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
    console.error(err)
    return res.status(500).send(err)
  }
}

export default revalidateHandler
