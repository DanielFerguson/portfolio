const jobs = [
    {
        title: 'Partner',
        employer: 'Grind Labs',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.',
        timeline: 'Aug 2021 - Present'
    },
    {
        title: 'Chief Technology Officer',
        employer: 'WEC Administration',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.',
        timeline: 'Mar 2021 - Present'
    },
    {
        title: 'President',
        employer: 'Helping Group',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.',
        timeline: 'Jan 2020 - Present'
    },
    {
        title: 'Software Engineer',
        employer: 'Centre for eResearch and Digital Innovation',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.',
        timeline: 'Feb 2019 - Jan 2021'
    },
];

export default function Work() {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-900">Employment</h2>
                        <p className="mt-4 text-lg text-gray-500">
                            I&apos;ve had the pleasure of working on a number of exciting projects in various dynamic, fast-paced environments.
                        </p>
                    </div>
                    <div className="mt-12 lg:mt-0 lg:col-span-2">
                        <dl className="space-y-12">
                            {jobs.map((job) => (
                                <div key={job.title}>
                                    <dt className="text-lg leading-6 font-medium text-gray-900">{job.title} <span className="text-gray-500 font-light pl-2">{job.employer}</span></dt>
                                    <dd className="mt-2 text-base text-gray-500">{job.description}</dd>
                                    <dd className="mt-2 text-base font-light text-gray-400">{job.timeline}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}