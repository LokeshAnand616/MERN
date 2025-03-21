/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enables React strict mode
    swcMinify: true, // Uses SWC compiler for faster builds
    experimental: {
      serverActions: true, // Enables Next.js experimental features
    },
    images: {
      domains: ["example.com"], // Allow images from external sources
    },
    async headers() {
      return [
        {
          source: "/api/:path*",
          headers: [
            {
              key: "Access-Control-Allow-Origin",
              value: "*",
            },
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  