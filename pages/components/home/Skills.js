import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBracketsCurly, faLayerGroup, faLightbulb, faCloud, faUsers, faTasks } from '@fortawesome/pro-regular-svg-icons'

const skills = [
    {
        name: 'Software Development',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: faBracketsCurly,
    },
    {
        name: 'Solutions Architecture',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: faLayerGroup,
    },
    {
        name: 'Entrepreneurship',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: faLightbulb,
    },
    {
        name: 'Cloud Architecture',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: faCloud,
    },
    {
        name: 'Leadership',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: faUsers,
    },
    {
        name: 'Project Management',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: faTasks,
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
                        I like to be across the board, so I have the ability to see the whole picture.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {skills.map((skill) => (
                            <div key={skill.name} className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <FontAwesomeIcon icon={skill.icon} size="lg" color="white" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{skill.name}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">{skill.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}