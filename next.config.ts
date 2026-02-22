import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* static export configuration for S3 hosting */
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
