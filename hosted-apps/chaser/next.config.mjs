/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
  basePath: "/nextjs-github-pages",
  assetPrefix: "/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
