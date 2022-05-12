import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import fs from "fs";
import matter from "gray-matter";
import {
  MenuIcon,
  XIcon,
  SparklesIcon,
  PaperAirplaneIcon,
  HomeIcon,
  PhoneIcon,
  BeakerIcon,
  NewspaperIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import Footer from "@/components/footer";
import Image from "next/image";
import { NextSeo, ArticleJsonLd, BreadcrumbJsonLd, LogoJsonLd } from "next-seo";
import dayjs from "dayjs";
import Newsletter from "@/components/newsletter";

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Projects", href: "/#projects", icon: PaperAirplaneIcon },
  { name: "Skills", href: "/#skills", icon: BeakerIcon },
  { name: "Articles", href: "#", icon: NewspaperIcon },
  { name: "Contact", href: "#contact", icon: PhoneIcon },
];

const title = "Every now and then I like to write | Dan Ferg";
const url = "https://danferg.com/articles";
const description =
  "It's a great way to share knowledge, remember how far we've come and create dialogue on topics that interest me or are near to my heart.";

export default function Page({ latest, articles }) {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          type: "website",
          url: url,
          title: title,
          description: description,
          images: [
            { url: "https://danferg.com/snow.jpg", alt: "Dan Ferguson" },
          ],
          site_name: "DanFerg",
        }}
        twitter={{
          handle: "@thedannyferg",
          cardType: "summary_large_image",
        }}
      />

      <ArticleJsonLd
        type="Blog"
        url="https://danferg.com/articles"
        title={title}
        images={["https://danferg.com/snow.jpg"]}
        authorName="Dan Ferguson"
        description={description}
      />

      <LogoJsonLd
        logo="https://danferg.com/wave.png"
        url="https://danferg.com"
      />

      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: "Dan Ferg",
            item: "https://danferg.com",
          },
          {
            position: 2,
            name: "Articles",
            item: "https://danferg.com/articles",
          },
        ]}
      />

      {[latest, ...articles].map((article) => (
        <ArticleJsonLd
          keyOverride={article.slug}
          key={article.slug}
          url={`https://danferg.com/articles/${article.slug}`}
          title={article.title}
          description={article.excerpt}
          images={[article.featuredImage]}
          datePublished={article.published}
          dateModified={article.published}
          authorName="Dan Ferguson"
          publisherName="Dan Ferg"
          publisherLogo="https://danferg.com/wave.png"
        />
      ))}

      {/* Nav */}
      <Popover className="relative bg-white max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
          <div>
            <Link href="/">
              <a className="flex">
                <span className="sr-only">Dan Ferg</span>
                <Image
                  src="/wave.png"
                  width="50"
                  height="50"
                  alt="Waving hand"
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
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <nav className="flex space-x-10">
              {navigation.map((link) => (
                <Link key={link.name} href={link.href}>
                  <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                    {link.name}
                  </a>
                </Link>
              ))}
            </nav>
          </div>
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
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <Image
                      className="h-8 w-auto"
                      height="50"
                      width="50"
                      src="/wave.png"
                      alt="Dan Ferg"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-6">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div className="ml-4 text-base font-medium text-gray-900">
                            {item.name}
                          </div>
                        </a>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <main>
        {/* Featured / Latest Article */}
        <div className="pb-16 overflow-hidden">
          <div className="mt-8 lg:mt-24">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-8 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                <div>
                  <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                      <SparklesIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      {latest.title}
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      {latest.excerpt}
                    </p>
                    <div className="mt-6">
                      <Link
                        href={`https://danferg.com/articles/${latest.slug}`}
                      >
                        <a className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                          Read now
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={latest.featuredImage}
                    alt={latest.title}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <Newsletter />

        {/* Articles */}
        <div className="pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mt-12 mx-auto grid gap-5 md:grid-cols-2 xl:grid-cols-3 lg:max-w-none">
              {articles
                .sort(function (a, b) {
                  return new Date(b.date) - new Date(a.date);
                })
                .map((article) => (
                  <div
                    key={article.title}
                    className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="h-48 w-full object-cover"
                        src={article.featuredImage}
                        alt={article.title}
                      />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-indigo-600">
                          <p className="hover:underline">{article.category}</p>
                        </p>
                        <a
                          href={`https://danferg.com/articles/${article.slug}`}
                          className="block mt-2"
                        >
                          <p className="text-xl font-semibold text-gray-900">
                            {article.title}
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            {article.excerpt}
                          </p>
                        </a>
                      </div>
                      <div className="mt-6 flex items-center">
                        <div className="flex space-x-1 text-sm text-gray-500">
                          {dayjs(article.published).format("MMM D, YYYY")}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  const files = fs.readdirSync("articles");

  let articles = [];

  files.forEach((file) => {
    const fileName = fs.readFileSync(`articles/${file}`, "utf-8");
    const { data, _ } = matter(fileName);

    articles.push({ ...data });
  });

  let sorted = articles.sort(function (a, b) {
    return new Date(b.published) - new Date(a.published);
  });

  const latest = sorted.shift();

  return {
    props: {
      latest,
      articles: sorted,
    },
  };
}
