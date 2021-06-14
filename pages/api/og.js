import mql from "@microlink/mql"

async function takeScreenshot(url) {
  const { data } = await mql(url, {
    meta: false,
    screenshot: true,
    type: "jpeg",
    viewport: {
      width: 1200,
      height: 628,
      deviceScaleFactor: 1,
      isMobile: false,
    },
  })
  return data.screenshot
}

export default async (req, res) => {
  const { query } = req
  if (!query.t) {
    const screenshot = await takeScreenshot(`https://johnschmidt.de/og`)
    // return res.status(200).json(screenshot)
    return res.redirect(screenshot.url)
  }
  const screenshot = await takeScreenshot(
    `https://johnschmidt.de/og?title=${query.t}`
  )
  // return res.status(200).json(screenshot)
  return res.redirect(screenshot.url)
}
