/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://larecta99.000webhostapp.com/api',
  },
  httpAgentOptions: {
    keepAlive: true,
  },
  // basePath:'/larect',
  // assentPrefix:'/larect'
}

module.exports = nextConfig
