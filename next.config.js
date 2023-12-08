/** @type {import('next').NextConfig} */
const nextConfig = {
  // 图片配置 https://nextjs.org/docs/app/api-reference/components/image#configuration-options
  images: {
    remotePatterns: [
      // 详细配置
      {
        protocol: "https",
        hostname: "daisyui.com",
        port: "",
        pathname: "/images/**",
      },
      // 简单配置
      {
        hostname: "**.qingstor.com",
      },
      {
        hostname: "**.sixmillions.cn",
      },
      {
        hostname: "picsum.photos",
      },
    ],
  },
};

module.exports = nextConfig;
