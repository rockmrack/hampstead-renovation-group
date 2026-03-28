import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/property_maintenance/local-property-repairs-hampstead.html",
        destination: "/property_maintenance/local-property-repairs-hampstead",
      },
    ];
  },
};

export default nextConfig;
