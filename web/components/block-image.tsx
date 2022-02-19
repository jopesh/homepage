import Image from "next/image"
import { PortableTextTypeComponentProps } from "@portabletext/react"
import { PropsWithChildren } from "react"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import clsx from "clsx"
import { sanityClient } from "lib/sanity.server"
import { useNextSanityImage } from "next-sanity-image"

const BlockImage: React.FC<
  PropsWithChildren<
    PortableTextTypeComponentProps<
      SanityImageSource & {
        lqip: string
        alt: string
        bleed: boolean
        hasBorder: boolean
      }
    >
  >
> = (props) => {
  const { alt, bleed, hasBorder, lqip } = props.value
  const imageProps = useNextSanityImage(sanityClient, props.value)
  return (
    <div
      className={clsx(
        "overflow-hidden leading-none",
        bleed && "-mx-4 sm:mx-0 sm:rounded md:-mx-8",
        !bleed && "rounded",
        hasBorder && "border border-zinc-100 dark:border-zinc-800",
      )}
    >
      <Image
        alt={alt}
        src={imageProps.src}
        height={imageProps.height}
        width={imageProps.width}
        blurDataURL={lqip}
        placeholder="blur"
        loader={imageProps.loader}
        sizes="(min-width: 640px) 640px, 100vw"
      />
    </div>
  )
}

export default BlockImage
