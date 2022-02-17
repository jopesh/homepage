import type { NextApiRequest, NextApiResponse } from "next"

import { fetcher } from "lib/fetcher"

const now = new Date()
const [date] = now.toISOString().split("T")

async function getPlausibleViews(slug: string) {
  const url = `https://stats.johnschmidt.cloud/api/v1/stats/aggregate?site_id=johnschmidt.de&period=custom&date=2020-12-29,${date}&filters=event:page==/blog/${slug}|/work/${slug}|/post/${slug}`
  return fetcher(url, {
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
    return res.status(200).json({
      requestedSlug: slug,
      date: now.toUTCString(),
      views: data.results.visitors.value,
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}

export default viewsHandler
