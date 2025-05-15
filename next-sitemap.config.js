// next-sitemap.config.js
module.exports = {
  siteUrl: "https://royrang.vercel.app/",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
