export default async (req, res) => {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (
    req.query.secret !== process.env.SANITY_PREVIEW_SECRET ||
    !req.query.slug
  ) {
    return res.status(401).send("Unauthorized")
  } else {
    res.setPreviewData({})
    res.redirect(`/${req.query.category}/${req.query.slug}`)
  }
  // Fetch the headless CMS to check if the provided `slug` exists
  // getPostBySlug would implement the required fetching logic to the headless CMS
  // const post = await getClient().fetch(
  //   groq`*[_type == "post" && slug.current == $slug][0]`,
  //   {
  //     slug: req.query.slug,
  //   }
  // )

  // If the slug doesn't exist prevent preview mode from being enabled
  // if (!post) {
  //   return res.status(401).json({ message: 'Invalid slug' })
  // }

  // Enable Preview Mode by setting the cookies

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
}
