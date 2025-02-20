/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://meet.jit.si",
            },
          ],
        },
      ];
    },
  };

export default nextConfig;
