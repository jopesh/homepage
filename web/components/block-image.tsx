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
    <figure
      className={clsx(
        "overflow-hidden",
        bleed && "-mx-4 sm:mx-0 sm:rounded md:-mx-8",
        !bleed && "rounded",
        hasBorder && "border border-zinc-100 dark:border-zinc-800",
      )}
    >
      <SanityImage src={props.value} sizes="(min-width: 640px) 640px, 100vw" />
    </figure>
  )
}

export default BlockImage
