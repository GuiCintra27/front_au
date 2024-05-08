/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/menu",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
