import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

const navigation = [
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
  {
    name: "Medium",
    href: "https://medium.com/@danferg",
    icon: faMedium,
  },
];

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-8 md:order-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <FontAwesomeIcon icon={item.icon} size="2x" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1"></div>
      </div>
    </footer>
  );
}
