/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // This is needed for GitHub Pages deployment
  basePath: '/web-fortuners',
  assetPrefix: '/web-fortuners/',
  trailingSlash: true,
  
  // Disable server-side features
  reactStrictMode: true,
  
  // Configure source maps
  productionBrowserSourceMaps: true,
  
  // Required for static site generation
  typescript: {
    // Dangerously allow production builds to successfully complete even if your project has type errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // Allow production builds to successfully complete even if your project has ESLint errors
    ignoreDuringBuilds: true,
  },

  // Environment variables for client-side usage
  env: {
    NEXT_PUBLIC_BASE_PATH: '/web-fortuners',
    NEXT_PUBLIC_SITE_URL: 'https://thrivingmindfulways.github.io',
  },
};

export default nextConfig;