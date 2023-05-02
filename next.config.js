/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  output: 'standalone',

  // out/test/index.html のように出力するために必要
  trailingSlash: true,

  // next/image が next export に対応していないので、下記で対応
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
