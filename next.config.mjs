/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "rsv-ink-images-production.s3.sa-east-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
