import Image from "next/image"
import { urlFor } from "lib/sanity.client"

type Props = {
  data: {
    alt: string
    asset: any
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
    <div className="overflow-hidden flex md:-mx-4 rounded">
      <Image
        src={urlFor(data.asset)
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
