/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'meetingmenu.app', // The root domain without www
          },
        ],
        destination: 'https://www.meetingmenu.app/:path*', // Redirect to www with the same path and query
        permanent: true, // 301 permanent redirect
      },
    ];
  },
}

module.exports = nextConfig;
