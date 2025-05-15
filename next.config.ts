import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  //images.unsplash.com/
  images: {
    domains: ["images.unsplash.com"],
  },
  i18n: {
    locales: ["en", "th"],
    defaultLocale: "th",
  },
};

export default nextConfig;
