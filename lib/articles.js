import fs from "fs";
import matter from "gray-matter";

// Get article names
const getArticleNames = () => {
  const files = fs.readdirSync("articles");
  const fileNames = files.map((fileName) => fileName.replace(".md", ""));

  return fileNames;
};

// Get all articles
const getArticles = () => {
  const files = fs.readdirSync("articles");

  return files;
};

// Get article (by slug)
const getArticleBySlug = (slug) => {
  const fileName = fs.readFileSync(`articles/${slug}.md`, "utf-8");
  const { data, content } = matter(fileName);

  return { frontmatter: data, content };
};

export { getArticleNames, getArticleBySlug, getArticles };
