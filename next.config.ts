import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray package-lock.json in the home folder confuses root detection.
  turbopack: { root: __dirname },
  async redirects() {
    // Old MVP routes now point at their replacements (Nov 2026).
    return [
      { source: "/labs", destination: "/projects", permanent: false },
      { source: "/labs/:slug*", destination: "/projects", permanent: false },
      { source: "/guides/linux-foundations", destination: "/learning-paths/systems", permanent: false },
      { source: "/guides/cloud-architecture", destination: "/learning-paths/cloud-foundations", permanent: false },
      { source: "/guides/git-delivery", destination: "/learning-paths/git-cicd", permanent: false },
      { source: "/guides/:slug*", destination: "/learning-paths", permanent: false },
      { source: "/courses", destination: "/learning-paths", permanent: false },
      { source: "/roadmaps", destination: "/careers", permanent: false },
      { source: "/blog", destination: "/updates", permanent: false },
    ];
  },
};

export default nextConfig;
