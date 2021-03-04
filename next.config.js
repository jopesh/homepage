module.exports = {
  images: {
    domains: ["cdn.sanity.io"],
    deviceSizes: [439, 632, 756, 828, 1080, 1512],
  },
  future: {
    webpack5: true,
  },
  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      require("./utils/generateSitemap")
    }
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      })
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
