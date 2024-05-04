/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    dangerouslyAllowSVG: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'firebasestorage.googleapis.com',
          port: '',
          pathname: '/v0/b/portfolio-29066.appspot.com/o/**',
        },
      ],
    },
};

export default nextConfig;
