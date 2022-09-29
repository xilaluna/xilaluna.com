/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["paydmgjryegxnlsxvqke.supabase.co"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports = withContentlayer(nextConfig);
