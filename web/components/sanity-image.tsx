import React, { useCallback } from "react"
import NextImage, {
  ImageProps as NextImageProps,
  ImageLoader,
} from "next/image"
import { urlFor } from "lib/sanity.client"
import type { SanityImage as SanityImageType } from "sanity-codegen"

// Needed to mostly copy ImageProps from next/image as otherwise Typescript types were all messy
export type ImageProps = Omit<
  JSX.IntrinsicElements["img"],
  "src" | "srcSet" | "ref" | "width" | "height" | "loading" | "style"
> & {
  src: SanityImageType & {
    alt?: string
    lqip?: string
  }
  quality?: number | string
  priority?: boolean
  loading?: NextImageProps["loading"]
  unoptimized?: boolean
  objectFit?: NextImageProps["objectFit"]
  objectPosition?: NextImageProps["objectPosition"]
} & (
    | {
        width?: never
        height?: never
        /** @deprecated Use `layout="fill"` instead */
        unsized: true
      }
    | {
        width?: never
        height?: never
        layout: "fill"
      }
    | {
        width: number | string
        height: number | string
        layout?: "fixed" | "intrinsic" | "responsive"
      }
  )

/**
 * Basic component displaying an Image coming from Sanity using next/image.
 *
 * Supports Crop/Hotspot if height and width are specified (if using a `layout` prop different of "fill")
 *
 * @see https://nextjs.org/docs/api-reference/next/image
 */
const SanityImage: React.FC<ImageProps> = ({ src, ...props }) => {
  // Loader for Sanity. Unfortunately, as we need crop/hotspot properties here, along with the height provided,
  // We need to have this function defined in the component.
  const sanityLoader = useCallback<ImageLoader>(
    ({ width, quality = 75 }) => {
      const renderWidthInt = _getInt(props.width)
      const renderHeightInt = _getInt(props.height)
      const imageRatio =
        renderWidthInt && renderHeightInt
          ? renderWidthInt / renderHeightInt
          : undefined

      let urlBuilder = urlFor(src)
        .auto("format") // Load webp if supported by browser
        .fit("max") // Don't scale up images of lower resolutions
        .width(width)
        .quality(quality)

      if (renderHeightInt && imageRatio) {
        urlBuilder = urlBuilder.height(Math.floor(width / imageRatio))
      }

      return urlBuilder.url() || ""
    },
    [src, props.width, props.height],
  )

  return (
    <NextImage
      {...props}
      alt={src.alt || ""}
      src={urlFor(src).fit("max").url()}
      placeholder={src?.lqip ? "blur" : "empty"}
      blurDataURL={src?.lqip}
      loader={sanityLoader}
    />
  )
}

const _getInt = (x: string | number | undefined): number | undefined => {
  if (typeof x === "number") {
    return x
  }
  if (typeof x === "string") {
    return parseInt(x, 10)
  }
  return undefined
}

export default SanityImage
