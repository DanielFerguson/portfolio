import fs from "fs";
import matter from "gray-matter";

// Get article names
const getNewsletterNames = () => {
  const files = fs.readdirSync("newsletters");
  const fileNames = files.map((fileName) => fileName.replace(".md", ""));

  return fileNames;
};

// Get all newsletters
const getNewsletters = () => {
  const files = fs.readdirSync("newsletters");

  return files;
};

// Get article (by slug)
const getNewsletterBySlug = (slug) => {
  const fileName = fs.readFileSync(`newsletters/${slug}.md`, "utf-8");
  const { data, content } = matter(fileName);

  return { frontmatter: data, content };
};

export { getNewsletterNames, getNewsletters, getNewsletterBySlug };
