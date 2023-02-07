/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'raw.githubusercontent.com'
      // add any other domains you need here
    ]
  }
}

module.exports = nextConfig
