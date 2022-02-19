/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],
    loader: "custom",
    deviceSizes: [320, 430, 640, 1280, 1920],
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
}

module.exports = nextConfig
