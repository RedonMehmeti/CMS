import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Turbopack to avoid issues
  experimental: {
    turbopack: false,
  },
};

export default nextConfig;
