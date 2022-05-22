module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  async redirects() {
    return [
      {
        source: "/consultation",
        destination: "/mentorship",
        permanent: true,
      },
    ];
  },
  webpack5: false,
};
