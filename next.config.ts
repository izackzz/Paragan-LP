import type { NextConfig } from 'next';
import { presentation } from './src/config/site';

const nextConfig: NextConfig = {
  async headers() {
    return ['/ascii/:path*', '/globe/:path*', '/blog/mock-post.json'].map((source) => ({
      source,
      headers: [{ key: 'X-Robots-Tag', value: 'noindex, follow' }],
    }));
  },
  images: {
    qualities: [100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zaamwnkdbidondtryjsj.supabase.co',
        pathname: '/storage/v1/object/public/blog-assets/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: new URL(presentation.placeholder.origin).hostname,
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
