module.exports = {
  images: {
    domains: ["cdn.sanity.io", "iad.microlink.io"],
    deviceSizes: [325, 439, 632, 756, 828, 1080, 1512],
    imageSizes: [200],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./utils/generateSitemap")
    }
    return config
  },
  async redirects() {
    return [
      {
        source: "/project/:slug",
        destination: "/work/:slug",
        permanent: true,
      },
    ]
  },
}
