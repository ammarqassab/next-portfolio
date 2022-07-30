/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'http://shopingammar.c1.biz/api',
  },
  env: {
    appName: 'Larect',
    appUrl: 'http://shopingammar.c1.biz',
    apiUrl: 'http://shopingammar.c1.biz/api',
  },
  // basePath:'/larect',
  // assentPrefix:'/larect'
}

module.exports = nextConfig

//'http://shopingammar.c1.biz/api'
//"http://127.0.0.1:8000/api"