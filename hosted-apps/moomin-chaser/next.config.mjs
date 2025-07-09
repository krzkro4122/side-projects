/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
  basePath: "/nextjs-github-pages",
  assetPrefix: "/moomin-chaser/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
