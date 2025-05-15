// next-sitemap.config.js
module.exports = {
  siteUrl: "https://your-site.com",
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
