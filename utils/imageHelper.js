import { getImageDimensions } from '@sanity/asset-utils'
import { urlFor } from 'lib/sanity'

export default function imageHelper(asset, width = 1920) {
  // get original image dimensions from sanity
  const { width: srcWidth, height: srcHeight } = getImageDimensions(asset)
  let dms = {
    x: srcWidth,
    y: srcHeight,
  }
  if (asset.crop) {
    // calculate the crop
    const {
      crop: { top, right, bottom, left },
    } = asset
    // helper function to avoid cropping errors and get the calculated cropped dimension
    const getCrop = (dimension, a, b) => {
      const ab = [a, b].map((i) => (i < 0 ? 0 : i > 1 ? 0 : i))
      const [c, d] = ab
      const cropped = dimension * (c + d)
      return parseInt(cropped)
    }
    // calculated cropped dimensions
    const cropX = getCrop(srcWidth, right, left)
    const cropY = getCrop(srcHeight, top, bottom)
    // calculate new dimensions (based on original dimensions)
    dms = {
      x: srcWidth - cropX,
      y: srcHeight - cropY,
    }
  }
  // calculate aspect ratio
  const aspectRatio = dms.y / dms.x
  // with the aspect ratio we can get the height to our desired width
  const height = parseInt(width * aspectRatio)
  // fetch the imageUrl from sanity cdn
  const imageUrl = urlFor(asset).width(width).height(height).url()
  return {
    width,
    height,
    aspectRatio,
    imageUrl,
  }
}
