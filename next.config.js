/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['henri-potier.xebia.fr']
  },
  distDir: 'dist',
  'fontawesome-svg-core': {
    license: 'free'
  }

}

module.exports = nextConfig
