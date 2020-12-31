import Image from 'next/image'
import { urlFor } from 'lib/sanity'
import { getImageDimensions } from '@sanity/asset-utils'

const BlockImage = ({ image, width = 1440 }) => {
  const { width: srcWidth, height: srcHeight } = getImageDimensions(image.node)
  const { crop } = image.node
  const debugCrop = (crop) => {
    if (crop > 0 && crop < 1) return crop
    else return 0
  }
  const cropX = parseInt(
    srcWidth * (debugCrop(crop.right) + debugCrop(crop.left))
  )
  const cropY = parseInt(
    srcHeight * (debugCrop(crop.top) + debugCrop(crop.bottom))
  )
  const croppedDimensions = {
    width: srcWidth - cropX,
    height: srcHeight - cropY,
  }
  const aspectRatio = croppedDimensions.height / croppedDimensions.width
  const height = parseInt(width * aspectRatio)
  const imageUrl = urlFor(image.node).width(width).height(height).url()
  return <Image src={imageUrl} width={width} height={height} sizes='756px' />
}

export default BlockImage
