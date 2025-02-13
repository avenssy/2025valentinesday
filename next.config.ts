import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Required for GitHub Pages (static export)
  images: {
    unoptimized: true, // Disable Next.js image optimization (GitHub Pages does not support it)
  },
  basePath: "/2025valentinesday", // Change this to your GitHub repository name
  assetPrefix: "/your-repo-name/",
};

export default nextConfig;
