/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  // nftTracing: true
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        // port: '',
        // pathname: 'dbqy8khxq/image/upload/v1667055896',
      },
    ],
  },
}

module.exports = nextConfig
