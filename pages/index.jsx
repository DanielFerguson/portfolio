import {
  NextSeo,
  SocialProfileJsonLd,
  ArticleJsonLd,
  LogoJsonLd,
  BreadcrumbJsonLd,
} from "next-seo";
import fs from "fs";
import dayjs from "dayjs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import * as Fathom from "fathom-client";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  PaperAirplaneIcon,
  BeakerIcon,
  BriefcaseIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/react/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandsHelping,
  faUsers,
  faMapMarker,
  faTrafficLightGo,
  faLightbulbOn,
  faSearch,
  faStarOfLife,
  faShield,
  faNewspaper,
  faQuestion,
  faStore,
  faBracketsCurly,
  faLayerGroup,
  faCloud,
  faTasks,
  faCubes,
  faPodium,
} from "@fortawesome/pro-regular-svg-icons";
import {
  faLaravel,
  faVuejs,
  faReact,
  faAws,
  faCloudflare,
  faEthereum,
  faFigma,
  faJira,
  faHubspot,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "@/components/footer";
import Newsletter from "@/components/newsletter";

const FollowProject = () => {
  Fathom.trackGoal("WZN8LWT6", 0);
};

const navigation = [
  { name: "Projects", href: "#projects", icon: PaperAirplaneIcon },
  { name: "Work", href: "#work", icon: BriefcaseIcon },
  { name: "Skills", href: "#skills", icon: BeakerIcon },
  { name: "Articles", href: "/articles", icon: NewspaperIcon },
  { name: "Talks", href: "#talks", icon: NewspaperIcon },
];

const projects = [
  {
    name: "Helping Group",
    icon: faHandsHelping,
    link: "https://helping.group",
  },
  {
    name: "yFocus",
    icon: faQuestion,
    link: "https://yfocus.app",
  },
  {
    name: "Swin Lead",
    icon: faUsers,
    link: "https://swinlead.com",
  },
  {
    name: "Guardian",
    icon: faShield,
    link: "https://useguardian.app",
  },
  {
    name: "Support Them",
    icon: faStore,
    link: "https://supportthem.com.au",
  },
  {
    name: "Innovative Land Index",
    icon: faMapMarker,
    link: "https://innovative-land-index.vercel.app",
  },
  {
    name: "Real News",
    icon: faNewspaper,
    link: "https://userealnews.com",
  },
  {
    name: "TrafficZone",
    icon: faTrafficLightGo,
    link: "https://github.com/DanielFerguson/TrafficFlowPrediction",
  },
  {
    name: "Yoogle",
    icon: faSearch,
    link: "https://yoogle.danferg.com",
  },
  {
    name: "Stroke Rehab",
    icon: faStarOfLife,
    link: "https://github.com/DanielFerguson/Stroke-Rehabilitation-Board",
  },
  {
    name: "Pegboard",
    icon: faLightbulbOn,
    link: "https://pegboard.danferg.com",
  },
];
const jobs = [
  {
    title: "Managing Director",
    employer: "Grind Labs",
    description:
      "Working with business to accelerate in their marketing, software development and branding journeys; aiding in brand creation, cloud adoption and understanding market potential for stakeholder-focused solutions.",
    timeline: "Aug 2021",
    websites: [
      {
        name: "grindlabs.com.au",
        href: "https://grindlabs.com.au",
      },
    ],
  },
  {
    title: "Founder",
    employer: "Aaiga",
    description:
      "Developing cutting-edge software and helping startups realise their value and accelerate their journey.",
    timeline: "Apr 2021",
    websites: [
      {
        name: "useguardian.app",
        href: "https://useguardian.app",
      },
    ],
  },
  {
    title: "Chief Technology Officer",
    employer: "WEC Administration",
    description:
      "Leading the digital innovations for a multidisciplinary investment and education body; focusing on education, community and digital tools.",
    timeline: "Mar 2021",
    websites: [
      {
        name: "imperialwealth.com",
        href: "https://imperialwealth.com",
      },
      // {
      //   name: "miningstore.com.au",
      //   href: "https://miningstore.com.au",
      // },
      // {
      //   name: "thecashkings.com.au",
      //   href: "https://thecashkings.com.au",
      // },
    ],
  },
  {
    title: "Co-Founder & Advisor",
    employer: "Swinburne Leadership Hub",
    description:
      "Born from a chance coffee and shared frustration between two serial innovators, the Swinburne Leadership Hub unites innovators, thinkers & doers for a common purpose — to experiment, learn, and grow.",
    timeline: "Mar 2020",
    websites: [
      {
        name: "swinlead.com",
        href: "https://swinlead.com",
      },
    ],
  },
  {
    title: "President",
    employer: "Helping Group",
    description:
      "Founded the digital-first charity HelpingGroup, focusing on creating social impact initiatives to uplift the quality of life for people; nationally, and beyond the Australian borders.",
    timeline: "Jan 2020",
    websites: [
      {
        name: "helping.group",
        href: "https://helping.group",
      },
    ],
  },
  {
    title: "Software Engineer",
    employer: "Centre for eResearch and Digital Innovation",
    description:
      "Working as a full-stack engineer, working with clients to understand, analyise and develop technical solutions; including the creation of a data portal to enable collaboration for family violence preventative measures, developing an ingestion pipeline with machine learning in order to digitise and index a library of scanned environmental audit documents, and more.",
    timeline: "Feb 2019 - Jan 2021",
    websites: [
      {
        name: "cerdi.edu.au",
        href: "https://www.cerdi.edu.au",
      },
    ],
  },
];
const skills = [
  {
    name: "Software Development",
    icon: faBracketsCurly,
  },
  {
    name: "Solutions Architecture",
    icon: faLayerGroup,
  },
  {
    name: "Entrepreneurship",
    icon: faQuestion,
  },
  {
    name: "Cloud Architecture",
    icon: faCloud,
  },
  {
    name: "Leadership",
    icon: faUsers,
  },
  {
    name: "Project Management",
    icon: faTasks,
  },
  {
    name: "Business Analysis",
    icon: faCubes,
  },
  {
    name: "Ideation",
    icon: faLightbulbOn,
  },
  {
    name: "Presentation & Delivery",
    icon: faPodium,
  },
];
const tools = [
  {
    title: "Laravel",
    icon: faLaravel,
  },
  {
    title: "Vue",
    icon: faVuejs,
  },
  {
    title: "React",
    icon: faReact,
  },
  {
    title: "AWS",
    icon: faAws,
  },
  {
    title: "Cloudflare",
    icon: faCloudflare,
  },
  {
    title: "Blockchain",
    icon: faEthereum,
  },
  {
    title: "Figma",
    icon: faFigma,
  },
  {
    title: "Jira",
    icon: faJira,
  },
  {
    title: "HubSpot",
    icon: faHubspot,
  },
];
const talks = [
  {
    title: "Taking a startup idea from Concept to Production",
    image: "/concept-to-production.png",
    category: "Entrepreneurship",
    link: "https://www.youtube.com/watch?v=_SZP7QmIIfE",
    date: "2022-05-03",
  },
  {
    title: "SwinLead Leadership Workshop",
    image: "/swinlead.png",
    category: "Leadership",
    link: "https://www.youtube.com/watch?v=7_aJAvfGNsY",
    date: "2022-04-13",
  },
  {
    title:
      "DFAT New Colombo Plan Momentum Webinar: Entrepreneurial Vision and Community",
    image: "/hh.jpg",
    category: "Social Impact",
    link: "https://www.youtube.com/watch?v=g89pZZyEsfI",
    date: "2020-07-10",
  },
];

const title = "Your friendly neighbourhood social entrepreneur | Dan Ferg";
const url = "https://danferg.com";
const description =
  "A solutions architect and software developer with an understanding of holistic design; seeking to create digitally enabled change for good.";

const Home = ({ articles }) => {
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
          profile: {
            firstName: "Dan",
            lastName: "Ferguson",
            username: "danielferguson",
            gender: "male",
          },
        }}
        twitter={{
          handle: "@thedannyferg",
          cardType: "summary_large_image",
        }}
      />

      <SocialProfileJsonLd
        type="Person"
        name="Dan Ferguson"
        url={url}
        sameAs={[
          "https://www.instagram.com/thedannyferg/",
          "https://www.linkedin.com/in/danferg",
          "https://twitter.com/thedannyferg",
        ]}
      />

      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: "home",
            item: "https://danferg.com",
          },
        ]}
      />

      <LogoJsonLd
        logo="https://danferg.com/wave.png"
        url="https://danferg.com"
      />

      {articles.map((article) => (
        <ArticleJsonLd
          keyOverride={article.slug}
          key={article.slug}
          url={`https://danferg.com/articles/${article.slug}`}
          title={article.frontmatter.title}
          description={article.frontmatter.excerpt}
          images={[article.frontmatter.featuredImage]}
          datePublished={article.frontmatter.published}
          dateModified={article.frontmatter.published}
          authorName="Dan Ferguson"
          publisherName="Dan Ferg"
          publisherLogo="https://danferg.com/wave.png"
        />
      ))}

      <div className="flex flex-col gap-32">
        {/* Hero */}
        <div className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <svg
                className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>

              <Popover>
                <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                  <nav
                    className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                    aria-label="Global"
                  >
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                      <div className="flex items-center justify-between w-full md:w-auto">
                        <a href="#">
                          <span className="sr-only">Dan Ferg</span>
                          <Image
                            src="/wave.png"
                            className="h-8 w-8"
                            layout="intrinsic"
                            height="50px"
                            width="50px"
                            alt="Wave"
                          />
                        </a>
                        <div className="-mr-2 flex items-center md:hidden">
                          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open main menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="font-medium text-gray-500 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      ))}
                      <a
                        href="#contact"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Contact
                      </a>
                    </div>
                  </nav>
                </div>

                <Transition
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Popover.Panel
                    focus
                    className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                  >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                      <div className="pt-5 pb-6 px-5">
                        <div className="flex items-center justify-between">
                          <div>
                            <Image
                              className="h-8 w-auto"
                              width="50"
                              height="50"
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
                          <nav className="grid gap-4">
                            {navigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                              >
                                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                                  <item.icon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                  />
                                </div>
                                <div className="ml-4 text-base font-medium text-gray-900">
                                  {item.name}
                                </div>
                              </a>
                            ))}
                            <a
                              href="#contact"
                              className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                            >
                              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                                <PhoneIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="ml-4 text-base font-medium text-gray-900">
                                Contact
                              </div>
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>

              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">
                      Your friendly neighbourhood
                    </span>{" "}
                    <span className="block text-indigo-600 xl:inline">
                      entrepreneur
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    A solutions architect and software developer with an
                    understanding of holistic design; seeking to create
                    digitally enabled change for good.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a
                        href="#contact"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                      >
                        Let&apos;s talk
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href="#projects"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                      >
                        View projects
                      </a>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Image
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="/snow.jpg"
              layout="fill"
              alt=""
            />
          </div>
        </div>

        {/* CTA */}
        <Newsletter />

        {/* Projects */}
        <div id="projects">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Projects
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-gray-500">
                  From my work on the digital-first charity focusing on creating
                  tools for preperations, duration and restoration in natural
                  disasters, to creating innovative methods for valuing land
                  which considers the the agricultural value to surrounding
                  areas; there&apos;s never a challenge I won&apos;t take on.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                {projects.map((project) => (
                  <a
                    onClick={FollowProject}
                    href={project.link}
                    key={project.name}
                    target="_blank"
                    rel="noreferrer"
                    className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 items-center"
                  >
                    <FontAwesomeIcon
                      icon={project.icon}
                      size="2x"
                      className="text-gray-500"
                    />{" "}
                    <span className="pl-3 font-medium text-kg text-gray-600">
                      {project.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Work */}
        <div id="work">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900">
                  Employment &amp; Roles
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  I&apos;ve had the pleasure of working on a number of exciting
                  projects in various dynamic, fast-paced environments.
                </p>
              </div>
              <div className="mt-12 lg:mt-0 lg:col-span-2">
                <dl className="space-y-12">
                  {jobs.map((job) => (
                    <div key={job.title}>
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        {job.title}{" "}
                        <span className="text-gray-500 font-light pl-2">
                          {job.employer}
                        </span>
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        {job.description}
                      </dd>
                      <dd className="mt-2 text-base font-light text-gray-400">
                        {job.timeline}
                        {job.websites.map((site) => (
                          <a
                            key={site.name}
                            href={site.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-3"
                          >
                            {site.name}
                          </a>
                        ))}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div id="skills">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                I’m quite a diverse dude.
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                I like to be across the board, so I have the ability to see the
                whole picture.
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                {skills.map((skill) => (
                  <div key={skill.name} className="relative">
                    <dt className="flex items-center">
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <FontAwesomeIcon
                          icon={skill.icon}
                          size="lg"
                          color="white"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="ml-16 text-lg leading-6 text-gray-900">
                        {skill.name}
                      </p>
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div>
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
              Using industry-trusted tools to design and develop dependable
              platforms
            </p>
            <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
              {tools.map((tool) => (
                <div
                  key={tool.title}
                  className="col-span-1 flex justify-center py-8 px-8 bg-gray-50"
                >
                  <FontAwesomeIcon icon={tool.icon} size="3x" color="grey" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Articles */}
        <div id="articles" className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                Every now and then I like to write.{" "}
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                It&apos;s a great way to share knowledge, remember how far
                we&apos;ve come and create dialogue on topics that interest me
                or are near to my heart.
              </p>
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {articles.map((article) => (
                <div
                  key={article.frontmatter.title}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="flex-shrink-0">
                    <Image
                      className="h-48 object-cover"
                      src={article.frontmatter.featuredImage}
                      alt=""
                      layout="responsive"
                      width="50"
                      height="30"
                    />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-indigo-600">
                        {article.frontmatter.category}
                      </p>
                      <Link href={`/articles/${article.slug}`}>
                        <a className="block mt-2">
                          <p className="text-xl font-semibold text-gray-900">
                            {article.frontmatter.title}
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            {article.frontmatter.excerpt}
                          </p>
                        </a>
                      </Link>
                    </div>
                    <div className="mt-6 flex items-center text-sm text-gray-500">
                      <time dateTime={article.frontmatter.published}>
                        {dayjs(article.frontmatter.published).format(
                          "ddd D, MMM YYYY"
                        )}
                      </time>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/articles">
                <a className="mt-3 flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white">
                  Read More
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* Talks */}
        <div id="talks" className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                And above all, I love helping others.{" "}
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                I love to share my experience, my journey and my knowledge. I
                have been truly fortunate to be able to build startups, social
                impact projects and work with government and the private sector
                on every level. I want to further my impact by helping others
                achieve their goals and visions.
              </p>
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {/* title, image, category, link, date */}
              {talks.map((talk) => (
                <div
                  key={talk.title}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="flex-shrink-0">
                    <Image
                      className="h-48 object-cover"
                      src={talk.image}
                      alt=""
                      layout="responsive"
                      width="50"
                      height="30"
                    />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-indigo-600">
                        {talk.category}
                      </p>
                      <a
                        href={talk.link}
                        className="block mt-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="text-xl font-semibold text-gray-900">
                          {talk.title}
                        </p>
                        {/* <p className="mt-3 text-base text-gray-500">
                          {article.frontmatter.excerpt}
                        </p> */}
                      </a>
                    </div>
                    <div className="mt-6 flex items-center text-sm text-gray-500">
                      <time dateTime={talk.date}>
                        {dayjs(talk.date).format("ddd D, MMM YYYY")}
                      </time>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="pt-8 text-center max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Looking for speakers?
              <br />
              <a
                href="#contact"
                className="text-indigo-600 underline font-medium hover:text-indigo-900"
              >
                Get in touch!
              </a>
            </p>
            {/* <div className="flex justify-center mt-8">
              <Link href="/articles">
                <a className="mt-3 flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white">
                  Read More
                </a>
              </Link>
            </div> */}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync("articles");

  const articles = files
    .map((fileName) => {
      const slug = fileName.replace(".md", "");
      const readFile = fs.readFileSync(`articles/${fileName}`, "utf-8");
      const { data: frontmatter } = matter(readFile);

      return {
        slug,
        frontmatter,
      };
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.published) - new Date(a.frontmatter.published)
    )
    .slice(0, 3);

  return {
    props: {
      articles,
    },
  };
}

export default Home;
