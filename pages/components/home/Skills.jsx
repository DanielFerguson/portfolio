import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBracketsCurly,
  faLayerGroup,
  faLightbulbOn,
  faCloud,
  faUsers,
  faTasks,
  faCubes,
  faQuestion,
  faPodium,
} from "@fortawesome/pro-regular-svg-icons";

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

export default function Skills() {
  return (
    <div id="skills" className="bg-white">
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
  );
}
