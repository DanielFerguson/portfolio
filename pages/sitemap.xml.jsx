import fs from "fs";
import matter from "gray-matter";

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
        "_error.jsx",
        "404.jsx",
        "sitemap.xml.jsx",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`;
    });

  const articlesDir = path.resolve(process.cwd(), "articles");
  const files = fs.readdirSync(articlesDir);

  console.log(articlesDir);
  console.log(files);

  //   const articles = files.map((fileName) => {
  //     const slug = fileName.replace(".md", "");
  //     const readFile = fs.readFileSync(`${articlesDir}/${fileName}`, "utf-8");
  //     const { data: frontmatter } = matter(readFile);

  //     return {
  //       slug,
  //       frontmatter,
  //     };
  //   });

  //   const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  //     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  //       ${staticPages
  //         .map((url) => {
  //           return `
  //             <url>
  //               <loc>${url.replace(".jsx", "").replace("index", "")}</loc>
  //               <lastmod>${new Date().toISOString()}</lastmod>
  //               <changefreq>monthly</changefreq>
  //               <priority>1.0</priority>
  //             </url>
  //           `;
  //         })
  //         .join("")}
  //             ${articles
  //               .map(({ slug, frontmatter }) => {
  //                 return `
  //               <url>
  //               <loc>${baseUrl}/articles/${slug}</loc>
  //               <lastmod>${frontmatter.published}</lastmod>
  //               <changefreq>monthly</changefreq>
  //               <priority>1.0</priority>
  //               </url>
  //           `;
  //               })
  //               .join("")}
  //     </urlset>
  //   `;

  const sitemap = "";

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
