import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  PaperAirplaneIcon,
  HomeIcon,
  PhoneIcon,
  BeakerIcon,
  NewspaperIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import Footer from "@/components/footer";
import Image from "next/image";
import { NextSeo, BreadcrumbJsonLd, LogoJsonLd } from "next-seo";
import Script from "next/script";
import { HeartIcon } from "@heroicons/react/solid";

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
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-indigo-600 flex items-center justify-center tracking-wide uppercase">
            <span>Lovely to meet you!</span>
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            I can&apos;t wait to get started.
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Whether you&apos;re at uni, starting a startup or looking to change
            careers, I am here to help. I have mentored many individuals just
            like yourself, and I cannot wait to help you focus, aim for and
            achieve your goals. Let&apos;s get started, shall we?
          </p>
        </div>

        <div id="booking-page"></div>
      </main>

      <Footer />

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
