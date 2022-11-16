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
  env: {
    BACKEND_API_END_POINT: 'https://fs-army-teamf-clockstore.herokuapp.com/graphql',
  },

}

module.exports = nextConfig