/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "github-readme-stats.vercel.app",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "ugc.production.linktr.ee",
      },
      {
        protocol: "https",
        hostname: "assets.production.linktr.ee",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizeCss: false,
  },
};

module.exports = nextConfig;
