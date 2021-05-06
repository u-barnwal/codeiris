const withTM = require('next-transpile-modules')([]);
const nodeExternals = require('webpack-node-externals');

module.exports = {
  future: {
    webpack5: false,
  },
  // For Testing only
  images: {
    domains: ['images.unsplash.com'],
  }
}
