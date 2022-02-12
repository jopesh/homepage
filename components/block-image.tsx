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
      className={clsx("flex overflow-hidden rounded", data.bleed && "md:-mx-8")}
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
      />
    </div>
  )
}

export default BlockImage
