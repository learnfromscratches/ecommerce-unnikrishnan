/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["m.media-amazon.com", "fakestoreapi.com", "assets.ajio.com"],
  },
}

module.exports = nextConfig
