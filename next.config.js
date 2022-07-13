/** @type {import('next').NextConfig} */

const path = require('path')

const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withFonts = require('nextjs-fonts');
const webpack = require("webpack");

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'http://shopingammar.c1.biz/api',
  },
  // basePath:'/larect',
  // assentPrefix:'/larect'
}

module.exports = nextConfig

module.exports = withCSS( withSass( withImages( withFonts ({
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://shopingammar.c1.biz/:path*',
            },
        ]
    },
}))));