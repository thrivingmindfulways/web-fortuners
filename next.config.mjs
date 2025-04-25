/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // This is needed for static export to work properly with GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/web-fortuners' : '',
  trailingSlash: true,
};

export default nextConfig;