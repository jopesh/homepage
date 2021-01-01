import Image from 'next/image'

import imageHelper from 'lib/imageHelper'

const BlockImage = ({ image }) => {
  const { width, height, imageUrl } = imageHelper(image.node)
  const {
    node: { alt, caption, layout },
  } = image
  return (
    <figure>
      <div
        className={`shadow-md ${layout === 'bleed' ? '-mx-6 lg:-mx-12' : ''}`}>
        <Image
          src={imageUrl}
          width={width}
          height={height}
          alt={alt}
          sizes='(min-width: 768px) 732px, (min-width: 1024px) 812px'
        />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

export default BlockImage
