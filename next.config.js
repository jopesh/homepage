module.exports = {
  future: {
    webpack5: true,
  },
  images: {
    domains: ['cdn.sanity.io'],
    deviceSizes: [439, 632, 756, 828, 1080, 1512],
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
  async redirects() {
    return [
      {
        source: '/project/:slug',
        destination: '/work/:slug',
        permanent: true,
      },
    ]
  },
}
