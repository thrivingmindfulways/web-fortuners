/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // This is needed for GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/web-fortuners' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/web-fortuners/' : '',
  trailingSlash: true,
  
  // Disable server-side features
  reactStrictMode: true,
  
  // Configure source maps
  productionBrowserSourceMaps: true,
};

export default nextConfig;