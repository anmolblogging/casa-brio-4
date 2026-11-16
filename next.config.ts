import type { NextConfig } from "next";

// Normal builds (Vercel) run as a regular Next.js app.
// Set STATIC_EXPORT=1 to build plain HTML/CSS/JS files into `out/`
// for upload to standard (non-Node.js) hosting such as Hostinger Premium:
//   STATIC_EXPORT=1 npm run build
const staticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = staticExport
  ? {
      output: "export",
      // Each page becomes folder/index.html, which Apache hosting serves cleanly.
      trailingSlash: true,
      // No image optimization server on static hosting.
      images: { unoptimized: true },
    }
  : {};

export default nextConfig;
