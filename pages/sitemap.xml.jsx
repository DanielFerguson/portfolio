import fs from "fs";
import path from "path";
import matter from "gray-matter";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const baseUrl = {
    development: "http://localhost:3000",
    production: "https://danferg.com",
  }[process.env.NODE_ENV];

  const staticPages = fs
    .readdirSync(
      {
        development: "pages",
        production: "./",
      }[process.env.NODE_ENV]
    )
    .filter((staticPage) => {
      return ![
        "_app.jsx",
        "_document.jsx",
        "api",
        ".next",
        "___next_launcher.js",
        "___vc",
        "node_modules",
        "package.json",
        "_error.jsx",
        "404.jsx",
        "sitemap.xml.jsx",
      ].includes(staticPage);
    })
    .push("/")
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`;
    });

  const articleNames = fs.readdirSync(process.cwd() + "/articles");

  const articles = articleNames.map((name) => {
    const slug = name.replace(".md", "");
    const readFile = fs.readFileSync(
      `${process.cwd()}/articles/${name}`,
      "utf-8"
    );
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${staticPages
          .map((url) => {
            return `
              <url>
                <loc>${url.replace(".jsx", "").replace("index", "")}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
              </url>
            `;
          })
          .join("")}
              ${articles
                .map(({ slug, frontmatter }) => {
                  return `
                <url>
                <loc>${baseUrl}/articles/${slug}</loc>
                <lastmod>${frontmatter.published}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
                </url>
            `;
                })
                .join("")}
      </urlset>
    `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
