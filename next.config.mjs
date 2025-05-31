/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    domains: ['imgur.com'],
    dangerouslyAllowSVG: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'firebasestorage.googleapis.com',
          port: '',
          pathname: '/v0/b/portfolio-29066.appspot.com/o/**',
        },
        {
          protocol: 'https',
          hostname: 'i.imgur.com',
        }
      ],
    },
};

export default nextConfig;
