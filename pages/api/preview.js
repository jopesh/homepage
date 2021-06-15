import groq from "groq"
import { getClient } from "lib/sanity"

export default async function previewHandler(req, res) {
  if (req.query.secret !== process.env.SANITY_PREVIEW_SECRET) {
    return res.status(401).send("Unauthorized")
  }
  const post = await getClient(true).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{slug, category->{slug}}`,
    {
      slug: req.query.slug,
    }
  )
  if (!post) {
    return res.status(401).json({ message: "Invalid slug" })
  }
  res.setPreviewData({})
  res.redirect(`/${post.category.slug.current}/${post.slug.current}`)
}
