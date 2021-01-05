import { ArticleJsonLd, NextSeo } from 'next-seo'
import { urlFor } from 'lib/sanity'

const PostSeo = ({ data }) => {
  const { mainImage, summary, title, publishedAt, category, slug } = data
  const url = `https://johnschmidt.de/${category}/${slug.current}`
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
        title={`${title} - John Schmidt`}
        description={summary}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: publishedAt,
          },
          url,
          title,
          description: summary,
          images: seoImages,
        }}
      />
      <ArticleJsonLd
        authorName='John Schmidt'
        dateModified={publishedAt}
        datePublished={publishedAt}
        description={summary}
        images={[seoImages[0]?.url]}
        publisherLogo='https://johnschmidt.de/android-chrome-192x192.png'
        publisherName='John Schmidt'
        title={title}
        url={url}
      />
    </>
  )
}

export default PostSeo
