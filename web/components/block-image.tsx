import { PropsWithChildren } from "react"
import clsx from "clsx"
import { PortableTextTypeComponentProps } from "@portabletext/react"

import SanityImage from "./sanity-image"
import type { Image } from "lib/sanity.types"

const BlockImage: React.FC<
  PropsWithChildren<PortableTextTypeComponentProps<Image>>
> = (props) => {
  const { bleed, hasBorder } = props.value
  return (
    <div
      className={clsx(
        "overflow-hidden leading-none",
        bleed && "-mx-4 sm:mx-0 sm:rounded md:-mx-8",
        !bleed && "rounded",
        hasBorder && "border border-zinc-100 dark:border-zinc-800",
      )}
    >
      {/* <Image
        alt={alt}
        src={imageProps.src}
        height={imageProps.height}
        width={imageProps.width}
        blurDataURL={lqip}
        placeholder="blur"
        loader={imageProps.loader}
        sizes="(min-width: 640px) 640px, 100vw"
      /> */}
      <SanityImage
        src={props.value}
        width={props.value.dimensions!.width}
        height={props.value.dimensions!.height}
        sizes="(min-width: 640px) 640px, 100vw"
      />
    </div>
  )
}

export default BlockImage
