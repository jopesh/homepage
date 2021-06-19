import Image from "next/image"

import imageHelper from "utils/imageHelper"

const BlockImage = ({ image = null }) => {
  if (image.node?.asset) {
    const { width, height, imageUrl } = imageHelper(image.node)
    const {
      node: { alt, caption, layout, shadow },
    } = image
    const bleed = layout === "bleed"
    return (
      <figure>
        <div
          className={`relative overflow-hidden ${shadow ? "shadow-lg" : ""} ${
            bleed ? "-mx-6 lg:-mx-12 md:rounded-lg" : "rounded-lg"
          }`}
        >
          <Image
            src={imageUrl}
            width={width}
            height={height}
            alt={alt}
            quality={80}
            sizes={`(min-width: 1024px) ${
              bleed ? "828px" : "756px"
            }, (min-width: 768px) 756px, 100vw`}
            blurDataURL={image.node?.asset?.metadata?.lqip}
            placeholder="blur"
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
