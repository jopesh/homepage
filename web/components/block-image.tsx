import Image from "next/image"
import { PortableTextTypeComponentProps } from "@portabletext/react"
import { PropsWithChildren } from "react"
import clsx from "clsx"
import { urlFor } from "lib/sanity.client"

const BlockImage: React.FC<
  PropsWithChildren<PortableTextTypeComponentProps<any>>
> = (props) => {
  const { alt, bleed, dimensions, lqip, hasBorder } = props.value
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
        src={urlFor(props.value)
          .width(dimensions.width)
          .height(dimensions.height)
          .url()}
        alt={alt}
        width={dimensions.width}
        height={dimensions.height}
        placeholder="blur"
        blurDataURL={lqip}
        sizes="(min-width: 640px) 640px, 100vw"
      />
    </div>
  )
}

export default BlockImage
