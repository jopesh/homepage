import type { NextApiRequest, NextApiResponse } from "next"

async function getPlausibleViews(slug: string) {
  const [date] = new Date().toISOString().split("T")
  const url = `https://stats.johnschmidt.cloud/api/v1/stats/aggregate?site_id=johnschmidt.de&period=custom&date=2020-12-29,${date}&filters=event:page==/blog/${slug}|/work/${slug}|/post/${slug}`
  const data = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.PLAUSIBLE_API_KEY}`,
      Accept: "application/json",
    },
  })
  return data.json()
}

const viewsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req
  const data = await getPlausibleViews(query.slug as string)
  await new Promise((res) => setTimeout(res, 2000))
  return res.status(200).json({
    slug: query.slug,
    views: data.results.visitors.value,
  })
}

export default viewsHandler
