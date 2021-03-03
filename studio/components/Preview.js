import React from "react"

export default function ProductsOverviewPreview({ document }) {
  const { displayed } = document

  if (!displayed.slug?.current) {
    return <div>The post needs a slug before it can be previewed.</div>
  }

  const slug = encodeURIComponent(displayed?.slug?.current)
  const secret = encodeURIComponent(process.env.SANITY_STUDIO_PREVIEW_SECRET)
  const host =
    process.env.NODE_ENV === "production"
      ? "https://homepage.johnschmidt.vercel.app"
      : "http://localhost:3000"

  const url = `${host}/api/preview?slug=${slug}&secret=${secret}`

  return (
    <div style={{ padding: "1em" }}>
      <iframe
        title="Preview"
        style={{
          border: 0,
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: "100%",
        }}
        src={url}
        frameBorder={"0"}
      />
    </div>
  )
}
