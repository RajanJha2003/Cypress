/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['gcuulthnkxthjmzklulz.supabase.co'],
  },
};

module.exports = nextConfig;
