import Head from "next/head";
import Image from "next/image";
import fs from "fs";
import md from "markdown-it";
import matter from "gray-matter";
import Footer from "../components/footer";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

const navigation = [
  { name: "Projects", href: "/#projects" },
  { name: "Work", href: "/#work" },
  { name: "Skills", href: "/#skills" },
  { name: "Articles", href: "/#articles" },
];

const Article = ({ frontmatter, content }) => {
  return (
    <>
      <Head>
        <title>{frontmatter.title} | Dan Ferg</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content={frontmatter.excerpt} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://danferg.com" />
        <meta property="og:title" content={`${frontmatter.title} | Dan Ferg`} />
        <meta property="og:description" content={frontmatter.excerpt} />
        <meta property="og:image" content={frontmatter.featuredImage} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://danferg.com/" />
        <meta
          property="twitter:title"
          content={`${frontmatter.title} | Dan Ferg`}
        />
        <meta property="twitter:description" content={frontmatter.excerpt} />
        <meta property="twitter:image" content={frontmatter.featuredImage} />
      </Head>

      <div className="flex flex-col gap-16">
        {/* Hero */}
        <div>
          <header>
            <Popover className="relative bg-white">
              <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <Link href="/">
                    <a>
                      <span className="sr-only">DanFerg</span>
                      <Image
                        src="/wave.png"
                        className="h-8 w-8"
                        layout="intrinsic"
                        height="50px"
                        width="50px"
                        alt="Wave"
                      />
                    </a>
                  </Link>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <nav className="hidden md:flex space-x-10">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0"></div>
              </div>

              <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                    <div className="pt-5 pb-6 px-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <Image
                            src="/wave.png"
                            className="h-8 w-8"
                            layout="intrinsic"
                            height="50px"
                            width="50px"
                            alt="Wave"
                          />
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Close menu</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                    </div>
                    <div className="py-6 px-5">
                      <div className="grid grid-cols-2 gap-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="text-base font-medium text-gray-900 hover:text-gray-700"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <div className="mt-6">
                        <a
                          href="#contact"
                          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                          Get in contact!
                        </a>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </header>

          <main className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    className="h-full w-full object-cover"
                    src={frontmatter.featuredImage}
                    layout="fill"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
                    {frontmatter.title}
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                    {frontmatter.excerpt}
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Content */}
        <div
          className="prose mx-auto px-8 md:px-0"
          dangerouslySetInnerHTML={{ __html: md().render(content) }}
        />

        <Footer />
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync("articles");

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`articles/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);

  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default Article;
