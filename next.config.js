/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'http://shopingammar.c1.biz/api',
  },
  env: {
    appName: 'Larect',
    apiUrl: 'http://shopingammar.c1.biz/api',
  },
  // basePath:'/',
  // assentPrefix:'/'
}

module.exports = nextConfig
