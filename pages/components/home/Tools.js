import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaravel, faVuejs, faReact, faAws, faCloudflare, faEthereum, faFigma, faJira, faHubspot } from '@fortawesome/free-brands-svg-icons'

const tools = [
    {
        title: 'Laravel',
        icon: faLaravel
    },
    {
        title: 'Vue',
        icon: faVuejs
    },
    {
        title: 'React',
        icon: faReact
    },
    {
        title: 'AWS',
        icon: faAws
    },
    {
        title: 'Cloudflare',
        icon: faCloudflare
    },
    {
        title: 'Blockchain',
        icon: faEthereum
    },
    {
        title: 'Figma',
        icon: faFigma
    },
    {
        title: 'Jira',
        icon: faJira
    },
    {
        title: 'HubSpot',
        icon: faHubspot
    },
]

export default function Tools() {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
                    Using industry-trusted tools to design and develop dependable platforms
                </p>
                <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
                    {tools.map(tool => (
                        <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                            <FontAwesomeIcon icon={tool.icon} size="3x" color="grey" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}