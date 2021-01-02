import { ArticleJsonLd, NextSeo } from 'next-seo'

import BlockCode from 'components/BlockCode'
import BlockImage from 'components/BlockImage'
import BlockStack from 'components/BlockStack'

import { PortableText, urlFor } from 'lib/sanity'
import formatDate from 'lib/formatDate'

const Post = ({ data }) => {
  const { title, publishedAt, body, summary, slug, mainImage, category } = data
  const date = formatDate(publishedAt)
  const url = `https://johnschmidt.de/${category}/${slug.current}`
  const seoImages = mainImage?.asset
    ? [
        {
          url: urlFor(mainImage).width(1024).height(640).url(),
          width: 1024,
          height: 640,
          alt: mainImage.alt,
        },
      ]
    : []
  return (
    <article className='mx-auto my-6 prose md:prose-lg lg:prose-xl dark:prose-dark'>
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
        publisherLogo='https://homepage.jopesch.vercel.app/android-chrome-192x192.png'
        publisherName='John Schmidt'
        title={title}
        url={url}
      />
      <h1>{title}</h1>
      {category === 'blog' && (
        <time
          className='inline-block mt-2 text-gray-500 md:mt-3 dark:text-gray-400'
          dateTime={publishedAt}>
          {date}
        </time>
      )}
      {body && (
        <PortableText
          blocks={body}
          className='mt-6'
          serializers={{
            types: {
              code: (props) => (
                <BlockCode
                  code={props.node.code}
                  language={props.node.language}
                />
              ),
              image: (props) => <BlockImage image={props} width={812} />,
              meta: (props) => <BlockStack node={props.node} />,
            },
          }}
        />
      )}
    </article>
  )
}

export default Post
