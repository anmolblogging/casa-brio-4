import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build as plain HTML/CSS/JS files so the site can be uploaded to
  // standard (non-Node.js) hosting such as Hostinger Premium.
  output: "export",
  // Each page becomes folder/index.html, which Apache hosting serves cleanly.
  trailingSlash: true,
  images: {
    // No image optimization server on static hosting.
    unoptimized: true,
  },
};

export default nextConfig;
