/** @type {import('next').NextConfig} */
const nextConfig = process.env.NODE_ENV === "production" ? {
  output: "export",
  basePath: "/nextjs-github-pages",
  assetPrefix: "/",
  images: {
    unoptimized: true,
  },
} : {};

export default nextConfig;
