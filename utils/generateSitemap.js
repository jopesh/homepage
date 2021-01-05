const fs = require('fs')
const prettier = require('prettier')

;(async () => {
  const query = `*[_type == "post"]{slug,category}`
  const req = await fetch(
    `https://${
      process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    }.api.sanity.io/v1/data/query/${
      process.env.NEXT_PUBLIC_SANITY_DATASET
    }?query=${encodeURIComponent(query)}`
  )
  const { result: posts } = await req.json()
  const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://johnschmidt.de/</loc>
    </url>
    ${posts
      .map((p) => {
        const {
          category,
          slug: { current: slug },
        } = p
        return `<url>
                    <loc>${`https://johnschmidt.de/${category}/${slug}`}</loc>
                </url>`
      })
      .join('')}
  </urlset>
  `
  const format = prettier.format(sitemap, {
    parser: 'html',
  })
  fs.writeFileSync('public/sitemap.xml', format)
})()
