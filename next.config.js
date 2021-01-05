module.exports = {
  images: {
    domains: ['cdn.sanity.io'],
    deviceSizes: [412, 524, 632, 731, 812, 1024, 1640, 1920],
  },
  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      require('./utils/generateSitemap')
    }

    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }

    return config
  },
}
