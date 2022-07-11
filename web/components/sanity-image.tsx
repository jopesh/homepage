import type { Image } from "lib/sanity.types"
import NextImage, { ImageLoader, ImageProps } from "next/future/image"
import { urlFor } from "lib/sanity.client"

const sanityImageLoader: ImageLoader = ({ src, width, quality = 75 }) => {
  return `${src}?w=${width}&q=${quality}&auto=format`
}

interface SanityImageProps extends Omit<ImageProps, "src"> {
  src: Image
}

const SanityImage: React.FC<SanityImageProps> = (props) => {
  const { src, alt } = props
  const { alt: originAlt, lqip, dimensions } = src
  const url = urlFor(src).url()
  return (
    <NextImage
      {...props}
      src={url}
      alt={alt ?? (originAlt || "")}
      placeholder={lqip ? "blur" : "empty"}
      blurDataURL={lqip}
      loader={sanityImageLoader}
      width={props.width ?? dimensions?.width}
      height={props.height ?? dimensions?.height}
    />
  )
}

export default SanityImage
