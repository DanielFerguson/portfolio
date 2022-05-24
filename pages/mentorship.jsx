import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Footer from "@/components/footer";
import { Popover, Transition } from "@headlessui/react";
import { NextSeo, BreadcrumbJsonLd, LogoJsonLd } from "next-seo";
import {
  MenuIcon,
  XIcon,
  PaperAirplaneIcon,
  HomeIcon,
  PhoneIcon,
  BeakerIcon,
  NewspaperIcon,
} from "@heroicons/react/outline";

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Projects", href: "/#projects", icon: PaperAirplaneIcon },
  { name: "Skills", href: "/#skills", icon: BeakerIcon },
  { name: "Articles", href: "/articles", icon: NewspaperIcon },
  { name: "Talks", href: "/#talks", icon: NewspaperIcon },
  { name: "Contact", href: "#contact", icon: PhoneIcon },
];

const title = "Let's accelerate your journey, today. | Dan Ferg";
const url = "https://danferg.com/mentorship";
const description =
  "Mentorship has played a crucial role in the success I enjoy today, and I want to help you experience that same success. Get in touch, and let's help you realise your visions and goals.";

const testimonies = [
  {
    name: "Rohin Chopra",
    quote:
      "Really enjoyed the session today and learned a ton. I really appreciate today just being vibing and understanding me rather than here is your goals and off you go.",
    image: "/rohin.jpg",
    position: "Consultant, Contino",
  },
  {
    name: "Luke Bone",
    quote: "Thanks so much for yesterday Dan helped me out so much. ",
    image: "/luke.png",
    position: "Entrepreneur",
  },
  {
    name: "Kanan de los Santos",
    quote:
      "Thanks for being an awesome friend and great mentor. I know I say this alot, but I really appreciate you.",
    image: "/kanan.jpg",
    position: "Career Change",
  },
];

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

      <LogoJsonLd
        logo="https://danferg.com/wave.png"
        url="https://danferg.com"
      />

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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-32">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <h2 className="text-base font-semibold text-indigo-600 flex items-center justify-center tracking-wide uppercase">
            <span>It&apos;s lovely to meet you!</span>
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Let&apos;s get started.
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Whether you&apos;re at uni, starting your entrepreneurship journey
            or pivoting careers into tech, I am here to help. I&apos;ve mentored
            many individuals just like yourself, and I cannot wait to help you
            focus, aim for and achieve your goals. Let&apos;s get started, shall
            we?
          </p>
        </div>

        <div id="booking-page" className="mb-24"></div>

        {/* Testimonies */}
        {testimonies.map((testimony) => (
          <section
            key={testimony.name}
            className="bg-white overflow-hidden mb-24"
          >
            <div className="relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
              <svg
                className="absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={784}
                  height={404}
                  fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)"
                />
              </svg>

              <svg
                className="hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2"
                width={404}
                height={784}
                fill="none"
                viewBox="0 0 404 784"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="56409614-3d62-4985-9a10-7ca758a8f4f0"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={784}
                  fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)"
                />
              </svg>

              <div className="relative lg:flex lg:items-center">
                <div className="hidden lg:block lg:flex-shrink-0">
                  <img
                    className="h-64 w-64 rounded-full xl:h-80 xl:w-80"
                    src={testimony.image}
                    alt=""
                  />
                </div>

                <div className="relative lg:ml-10">
                  <svg
                    className="absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-indigo-200 opacity-50"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 144 144"
                    aria-hidden="true"
                  >
                    <path
                      strokeWidth={2}
                      d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
                    />
                  </svg>
                  <blockquote className="relative">
                    <div className="text-2xl leading-9 font-medium text-gray-900">
                      <p>{testimony.quote}</p>
                    </div>
                    <footer className="mt-8">
                      <div className="flex">
                        <div className="flex-shrink-0 lg:hidden">
                          <img
                            className="h-12 w-12 rounded-full"
                            src={testimony.image}
                            alt=""
                          />
                        </div>
                        <div className="ml-4 lg:ml-0">
                          <div className="text-base font-medium text-gray-900">
                            {testimony.name}
                          </div>
                          <div className="text-base font-medium text-indigo-600">
                            {testimony.position}
                          </div>
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>

      <Script
        id="savvy-cal-setup"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.SavvyCal=window.SavvyCal||function(){(SavvyCal.q=SavvyCal.q||[]).push(arguments)};`,
        }}
      />
      <Script src="https://embed.savvycal.com/v1/embed.js" />
      <Script
        id="savvy-cal-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            SavvyCal('init');
            SavvyCal('inline', { link: 'danferg/968c8089', selector: '#booking-page', theme: 'os' });
            `,
        }}
      />
    </>
  );
}
