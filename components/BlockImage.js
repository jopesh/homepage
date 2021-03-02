import Image from "next/image"

import imageHelper from "utils/imageHelper"

const BlockImage = ({ image = null }) => {
  if (image.node?.asset) {
    const { width, height, imageUrl } = imageHelper(image.node)
    const {
      node: { alt, caption, layout, shadow },
    } = image
    return (
      <figure>
        <div
          className={`${shadow ? "shadow-lg" : ""} ${
            layout === "bleed" ? "-mx-6 lg:-mx-12" : ""
          }`}
        >
          <Image
            src={imageUrl}
            width={width}
            height={height}
            alt={alt}
            quality={80}
            sizes="(min-width: 1280px) 756px"
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
