/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  experimental: {
    // Silence the dev origin warning you saw when opening from the network IP
    allowedDevOrigins: ['http://localhost:3000', 'http://192.168.56.1:3000'],
  },
};

module.exports = nextConfig;


