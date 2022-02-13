import Image from "next/image"
import clsx from "clsx"
import { urlFor } from "lib/sanity.client"

type Props = {
  data: {
    alt: string
    asset: any
    bleed?: boolean
    lqip: string
    dimensions: {
      aspectRatio: number
      height: number
      width: number
    }
  }
}

const BlockImage: React.FC<Props> = ({ data }) => {
  return (
    <div
      className={clsx(
        "overflow-hidden leading-none",
        data.bleed && "-mx-4 sm:mx-0 sm:rounded md:-mx-8",
        !data.bleed && "rounded",
      )}
    >
      <Image
        src={urlFor(data)
          .width(data.dimensions.width)
          .height(data.dimensions.height)
          .url()}
        alt={data.alt}
        width={data.dimensions.width}
        height={data.dimensions.height}
        placeholder="blur"
        blurDataURL={data.lqip}
        sizes="(min-width: 640px) 640px, 100vw"
      />
    </div>
  )
}

export default BlockImage
