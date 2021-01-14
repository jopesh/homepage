import { ArticleJsonLd, NextSeo } from 'next-seo'
import { urlFor } from 'lib/sanity'

const PostSeo = ({ data }) => {
  const { mainImage, summary, title, publishedAt, category, slug, tags } = data
  const url = `https://johnschmidt.de/${category}/${slug.current}`
  const date = new Date(publishedAt).toISOString()
  const seoImages = mainImage?.asset
    ? [
        {
          url: urlFor(mainImage).width(1200).height(628).url(),
          width: 1200,
          height: 628,
          alt: mainImage.alt,
        },
      ]
    : [
        {
          url: `https://johnschmidt.de/api/og?t=${encodeURIComponent(title)}`,
          width: 1200,
          height: 628,
          alt: summary,
        },
      ]
  return (
    <>
      <NextSeo
        title={`${title} - by John Schmidt`}
        description={summary}
        canonical={url}
        openGraph={{
          title: `${title} - by John Schmidt`,
          type: 'article',
          description: summary,
          url,
          article: {
            publishedTime: date,
            modifiedTime: date,
            tags: tags,
          },
          images: seoImages,
        }}
      />
      <ArticleJsonLd
        authorName='John Schmidt'
        dateModified={date}
        datePublished={date}
        description={summary}
        images={[seoImages[0]?.url]}
        publisherLogo='https://johnschmidt.de/android-chrome-192x192.png'
        publisherName='John Schmidt'
        title={`${title} - by John Schmidt`}
        url={url}
      />
    </>
  )
}

export default PostSeo
