/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://larect.000webhostapp.com/api',
  },
  // basePath:'/larect',
  // assentPrefix:'/larect'
}

module.exports = nextConfig
