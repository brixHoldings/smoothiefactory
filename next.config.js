/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  experimental: {
    appDir: true,
  },

  // i18n: {
  //   locales: ['en-US'],
  //   defaultLocale: 'en-US',
  // },

  compiler: {
    styledComponents: true,
  },

  async redirects() {
    return [
      {
        source: '/locations',
        destination: 'https://locations.smoothiefactorykitchen.com/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
