/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'fakestoreapi.com',
            port: '', // Leave empty if not needed
            pathname: '/img/**', // Adjust the path pattern as needed
          },
        ],
      },
};

export default nextConfig;
