/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 430, 640, 1280],
    imageSizes: [96],
  },
}

module.exports = nextConfig
