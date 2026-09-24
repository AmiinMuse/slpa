/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/op-eds", destination: "/news", permanent: true },
      { source: "/updates", destination: "/news", permanent: true },
    ];
  },
};

export default nextConfig;
