const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');

module.exports = (phase) => {
  // Setting Phase
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD;
  console.log(`isDev:${isDev}  isProd:${isProd}`);

  const reactStrictMode = true;

  const images = {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.bbci.co.uk',
      },
      {
        protocol: 'https',
        hostname: '**.abc-cdn.net.au',
      },
      {
        protocol: 'https',
        hostname: '**media.bleacherreport.com',
      },
      {
        protocol: 'https',
        hostname: '**bloximages.newyork1.vip.townnews.com',
      },
      {
        protocol: 'https',
        hostname: '**img-s-msn-com.akamaized.net',
      },
      {
        protocol: 'https',
        hostname: '**i.natgeofe.com',
      },
      {
        protocol: 'https',
        hostname: '**post.medicalnewstoday.com',
      },
      {
        protocol: 'https',
        hostname: '**content.fortune.com',
      },
      {
        protocol: 'https',
        hostname: '**sm.ign.com',
      },
      {
        protocol: 'https',
        hostname: '**assets-prd.ignimgs.com',
      }
    ]
  }

  const env = {
    SERVER_NAME: (() => {
      if (isDev) return 'http://localhost:3000/';
      if (isProd) return 'https://news-betsymao.vercel.app/';
    })(),
    NEWS_API_KEY: process.env.NEWS_API_KEY,
    NEXT_PUBLIC_GA_ID: process.env.GA_ID
  }

  // Next.config returns an object
  return {
    reactStrictMode,
    images,
    env,
  }
}