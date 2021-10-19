import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandsHelping, faUsers, faMapMarker, faTrafficLightGo, faSearch, faStarOfLife, faShield, faNewspaper, fak } from '@fortawesome/pro-regular-svg-icons'

const projects = [{
    name: 'Helping Group',
    icon: faHandsHelping,
    link: 'https://helping.group'
},
{
    name: 'Swin Lead',
    icon: faUsers,
    link: 'https://swinlead.com'
},
{
    name: 'Innovative Land Index',
    icon: faMapMarker,
    link: 'https://land-index.danferg.com'
},
{
    name: 'Guardian',
    icon: faShield,
    link: 'https://useguardian.app'
},
{
    name: 'Real News',
    icon: faNewspaper,
    link: 'https://userealnews.com'
},
{
    name: 'TrafficZone',
    icon: faTrafficLightGo,
    link: 'https://github.com/DanielFerguson/TrafficFlowPrediction'
},
{
    name: 'Yoogle',
    icon: faSearch,
    link: 'https://yoogle.danferg.com'
},
{
    name: 'Stroke Rehab',
    icon: faStarOfLife,
    link: 'https://github.com/DanielFerguson/Stroke-Rehabilitation-Board'
},
];

export default function Projects() {
    return (
        <div id="projects" className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Projects
                        </h2>
                        <p className="mt-3 max-w-3xl text-lg text-gray-500">
                            From my work on the digital-first charity focusing on creating tools for preperations, duration and restoration in natural disasters, to creating innovative methods for valuing land which considers the the agricultural value to surrounding areas; there&apos;s never a challenge I won&apos;t take on.
                        </p>
                        <div className="mt-8 sm:flex">
                            <div className="rounded-md shadow">
                                <a
                                    href="https://github.com/danielferguson"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    View more
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                        {projects.map((project) =>
                            <a href={project.link} key={project.name} target="_blank" rel="noreferrer" className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 items-center">
                                <FontAwesomeIcon icon={project.icon} size="2x" className="text-gray-500" /> <span className="pl-3 font-medium text-kg text-gray-600">{project.name}</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
