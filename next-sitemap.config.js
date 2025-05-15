/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://royrang.vercel.app", // ✅ Remove trailing slash
  generateRobotsTxt: true,
  sitemapSize: 5000, // Optional: for large sites
  exclude: [], // Optional: paths to exclude from sitemap

  // Optional: customize robots.txt
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/", // Allow all pages
        // disallow: "/private", // Example: restrict specific path
      },
    ],
    additionalSitemaps: [
      "https://royrang.vercel.app/sitemap.xml", // Optional if you have multiple
    ],
  },
};
