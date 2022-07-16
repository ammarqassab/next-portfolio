/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://larecta99.000webhostapp.com/api',
  },
  env: {
    appName: 'Larect',
    apiUrl:'https://larecta99.000webhostapp.com/api',
  },
  // basePath:'/larect',
  // assentPrefix:'/larect'
}

module.exports = nextConfig
