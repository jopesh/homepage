/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
    loader: "custom",
    deviceSizes: [320, 430, 640, 780, 1280, 1920],
    imageSizes: [96],
  },
  async redirects() {
    return [
      {
        source: "/blog/:path",
        destination: "/post/:path",
        permanent: true,
      },
      {
        source: "/work/:path",
        destination: "/post/:path",
        permanent: true,
      },
    ]
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
}

module.exports = nextConfig
