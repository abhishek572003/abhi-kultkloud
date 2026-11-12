import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray package-lock.json in the home folder confuses root detection.
  turbopack: { root: __dirname },
  async redirects() {
    // The labs catalogue was replaced by the toolkit (Nov 2026).
    return [{ source: "/labs", destination: "/tools", permanent: false }];
  },
};

export default nextConfig;
