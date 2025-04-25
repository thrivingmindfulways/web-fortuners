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
  experimental: {
    // Ensure we're using features compatible with static export
    appDir: true,
  },
};

export default nextConfig;