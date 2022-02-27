import type { NextApiRequest, NextApiResponse } from "next"

import { fetcher } from "lib/fetcher"

async function getPlausibleViews(slug: string) {
  const now = new Date()
  const [date] = now.toISOString().split("T")
  const url = `https://stats.johnschmidt.cloud/api/v1/stats/aggregate?site_id=johnschmidt.de&period=custom&date=2020-12-29,${date}&filters=event:page==/blog/${slug}|/work/${slug}|/post/${slug}`
  return fetcher(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.PLAUSIBLE_API_KEY}`,
      Accept: "application/json",
    },
  })
}

const viewsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query
  if (!slug) {
    return res.status(400).send("Bad request")
  }
  try {
    const data = await getPlausibleViews(String(slug))
    if (data.error) {
      console.error(data.error)
      return res.status(500).json({ message: data.error, type: "api-error" })
    }
    return res.status(200).json({
      requestedSlug: slug,
      views: data.results.visitors.value,
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}

export default viewsHandler
