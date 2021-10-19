import Image from 'next/image'

const projects = [{
    name: 'Helping Group',
    icon: 'https://tailwindui.com/img/logos/mirage-logo-gray-400.svg',
    link: '#'
},
{
    name: 'Swin Lead',
    icon: 'https://tailwindui.com/img/logos/mirage-logo-gray-400.svg',
    link: '#'
},
{
    name: 'Innovative Land Index',
    icon: 'https://tailwindui.com/img/logos/mirage-logo-gray-400.svg',
    link: '#'
},
{
    name: 'Guardian',
    icon: 'https://tailwindui.com/img/logos/mirage-logo-gray-400.svg',
    link: '#'
},
{
    name: 'Real News',
    icon: 'https://tailwindui.com/img/logos/mirage-logo-gray-400.svg',
    link: '#'
},
{
    name: 'TrafficZone',
    icon: 'https://tailwindui.com/img/logos/mirage-logo-gray-400.svg',
    link: '#'
},
{
    name: 'Yoogle',
    icon: 'https://tailwindui.com/img/logos/mirage-logo-gray-400.svg',
    link: '#'
},
{
    name: 'Stroke Rehab',
    icon: 'https://tailwindui.com/img/logos/mirage-logo-gray-400.svg',
    link: '#'
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
                            scelerisque amet ullamcorper eu enim et fermentum, augue.
                        </p>
                        <div className="mt-8 sm:flex">
                            <div className="rounded-md shadow">
                                <a
                                    href="https://github.com/danielferguson"
                                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    View more
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                        {projects.map((project) =>
                            <div key={project.name} className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                                <img
                                    className="max-h-12" src={project.icon} alt={project.name}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
