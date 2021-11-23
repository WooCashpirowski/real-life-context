const nextTranslate = require('next-translate')

module.exports = {
  reactStrictMode: true,
  ...nextTranslate(),
  images: {
    domains: ['images.ctfassets.net'],
  },
}
