import Image from "next/image";
import * as Fathom from "fathom-client";
import { MailIcon, GlobeIcon } from "@heroicons/react/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const footerNavigation = [
  {
    name: "Twitter",
    href: "https://twitter.com/thedannyferg",
    icon: faTwitter,
  },
  {
    name: "GitHub",
    href: "https://github.com/danielferguson",
    icon: faGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/danferg",
    icon: faLinkedin,
  },
];

const ClickMailTo = () => {
  Fathom.trackGoal("YJTPQQS1", 0);
};
const FollowLinkedinLink = () => {
  Fathom.trackGoal("3605TOVV", 0);
};

const Footer = () => {
  return (
    <>
      <div id="contact" className="relative bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Image
              className="h-96 w-full object-cover lg:absolute lg:h-full"
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80"
              layout="fill"
              alt="Contact splash"
            />
          </div>
        </div>
        <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white lg:text-gray-900">
                Let&apos;s work together!
              </h2>
              <p className="mt-4 text-lg text-gray-50 lg:text-gray-500 sm:mt-3">
                Have you got a killer idea you need help realising? Need some
                digital consultancy? I&apos;d love to chat! Reach me through…
              </p>

              <dl className="mt-8 text-base text-gray-100 lg:text-gray-500">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <p>Melbourne, Australia</p>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <MailIcon
                      className="flex-shrink-0 h-6 w-6 text-white lg:text-gray-400"
                      aria-hidden="true"
                    />
                    <a
                      onClick={ClickMailTo}
                      href="mailto:gday@danferg.com"
                      className="ml-3 text-white lg:text-indigo-500 font-medium"
                    >
                      gday@danferg.com
                    </a>
                  </dd>
                  <dt className="sr-only">LinkedIn</dt>
                  <dd className="flex mt-2">
                    <GlobeIcon
                      className="flex-shrink-0 h-6 w-6 text-white lg:text-gray-400"
                      aria-hidden="true"
                    />
                    <a
                      onClick={FollowLinkedinLink}
                      href="https://linkedin.com/in/danferg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-3 text-white lg:text-indigo-500 font-medium"
                    >
                      LinkedIn
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-8 md:order-2">
            {footerNavigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <FontAwesomeIcon
                  icon={item.icon}
                  size="2x"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
          <div className="mt-8 md:mt-0 md:order-1"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
