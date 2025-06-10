import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // match any remote image host if needed
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
