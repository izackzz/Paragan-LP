import type { NextConfig } from 'next';
import { presentation } from './src/config/site';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: new URL(presentation.placeholder.origin).hostname,
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
