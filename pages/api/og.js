import puppeteer from "puppeteer-core"
import chromium from "chrome-aws-lambda"

const isDev = process.env.NODE_ENV === "development"

export default async (req, res) => {
  const { query } = req
  let browser = null
  try {
    browser = await chromium.puppeteer.launch({
      executablePath: isDev
        ? puppeteer.executablePath()
        : await chromium.executablePath,
      headless: isDev ? true : chromium.headless,
      args: isDev ? [] : chromium.args,
      defaultViewport: chromium.defaultViewport,
      ignoreHTTPSErrors: true,
    })

    const page = await browser.newPage()
    await page.setViewport({
      width: 1200,
      height: 628,
    })
    await page.goto(
      query.t
        ? `http://${req.headers.host}/og?title=${encodeURIComponent(query.t)}`
        : `http://${req.headers.host}/og`
    )
    const screenshot = await page.screenshot({ encoding: "binary" })
    res.setHeader("content-type", "image/png")
    res.setHeader("cache-control", "public, max-age=31536000, immutable")
    res.status(200).send(screenshot)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error })
  } finally {
    if (browser) {
      await browser.close()
    }
  }
}
