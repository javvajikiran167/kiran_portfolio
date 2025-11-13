const isGithubPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  assetPrefix: isGithubPages ? "/kiran_portfolio/" : undefined,
  basePath: isGithubPages ? "/kiran_portfolio" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
