/** @type {import('next').NextConfig} */
const nextConfig = {
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
