// next.config.mjs
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const repo = 'YOUR-REPO-NAME'; // Replace with your GitHub repo name

export default withBundleAnalyzer({
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
});
