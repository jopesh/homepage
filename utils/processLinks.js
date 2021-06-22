import mql from "@microlink/mql"

export async function fullyScreenshot(url, opts) {
  const { data } = await mql(url, {
    meta: false,
    screenshot: true,
    ...opts,
  })
  return data.screenshot
}

export default async function processLinks(body) {
  const payload = await Promise.all(
    // First map through each node of the body
    body.map(async (node) => {
      // If the node has no markDefs or live skip and return the original node
      if (!node.markDefs && !node.live) return node
      // Define empty arrays as placeholders
      let updatedMarkDefs = []
      let updatedLive = []
      // If node has markdefs, update them
      if (node.markDefs) {
        updatedMarkDefs = await Promise.all(
          node.markDefs.map(async (node) => {
            const screenshot = await fullyScreenshot(node.href)
            return {
              ...node,
              screenshot,
            }
          })
        )
        // Now, if there are no live nodes return immediately
        if (!node.live) {
          return {
            ...node,
            markDefs: updatedMarkDefs,
          }
        }
      }
      // If there is however a live, update them
      updatedLive = await Promise.all(
        node.live.map(async (node) => {
          const screenshot = await fullyScreenshot(node.url)
          return {
            ...node,
            screenshot,
          }
        })
      )
      // No markdefs, return only the updated live
      if (!node.markDefs) {
        return {
          ...node,
          live: updatedLive,
        }
      }
      // If both are present, update both
      return {
        ...node,
        markDefs: updatedMarkDefs,
        live: updatedLive,
      }
    })
  )
  return payload
}
