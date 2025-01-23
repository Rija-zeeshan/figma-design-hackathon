/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // Corrected key to 'domains'
  },
};

module.exports = nextConfig;
