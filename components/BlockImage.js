import Image from 'next/image'

import imageHelper from 'lib/imageHelper'

const BlockImage = ({ image }) => {
  if (image?.node?.asset) {
    const { width, height, imageUrl } = imageHelper(image.node)
    const {
      node: { alt, caption, layout, shadow },
    } = image
    return (
      <figure>
        <div
          className={`${shadow ? 'shadow-lg dark:shadow-lg-dark' : ''} ${
            layout === 'bleed' ? '-mx-6 lg:-mx-12' : ''
          }`}>
          <Image
            src={imageUrl}
            width={width}
            height={height}
            alt={alt}
            quality={85}
            sizes='(min-width: 1024px) 812px, (min-width: 768px) 731px'
          />
        </div>
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    )
  } else {
    return null
  }
}

export default BlockImage
