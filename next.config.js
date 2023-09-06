// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  sw: "service-worker.js",
});

module.exports = withPWA({
  // next.js config
});
