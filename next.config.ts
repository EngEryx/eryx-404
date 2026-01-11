import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/eryx-404",
  images: { unoptimized: true },
};

export default nextConfig;
