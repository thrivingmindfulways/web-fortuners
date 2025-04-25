/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  
  // GitHub Pages configuration
  basePath: '/web-fortuners',
  assetPrefix: '/web-fortuners/',
  trailingSlash: true,
  
  // Disable server-side features for static export
  reactStrictMode: true,
  
  // Configure source maps
  productionBrowserSourceMaps: true,
  
  // Required for static site generation
  typescript: {
    // Allow production builds to successfully complete even if your project has type errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // Allow production builds to successfully complete even if your project has ESLint errors
    ignoreDuringBuilds: true,
  },
  
  // Environment variables will be replaced at build time
  env: {
    NEXT_PUBLIC_BASE_PATH: '/web-fortuners',
    NEXT_PUBLIC_SITE_URL: 'https://thrivingmindfulways.github.io',
  },
};

export default nextConfig;