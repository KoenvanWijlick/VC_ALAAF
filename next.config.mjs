// next.config.mjs
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const repo = 'VC_ALAAF'; // GitHub repo name

const config = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export', // Required for static export
  images: {
    unoptimized: true, // Required for export mode
  },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
};

export default withBundleAnalyzer(config);
