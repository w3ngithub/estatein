import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/estatein",
  assetPrefix: "/estatein",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com"],
  },
};

export default nextConfig;
