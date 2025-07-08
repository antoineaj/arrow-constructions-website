/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true, // Enable CSS optimization
  },
  // Enable compression
  compress: true,
  // Optimize images
  images: {
    formats: ["image/webp", "image/avif"],
  },
};

module.exports = nextConfig;
