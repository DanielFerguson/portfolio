const jobs = [
  {
    title: "Partner",
    employer: "Grind Labs",
    description:
      "Working with business to accelerate in their marketing, software development and branding journeys; aiding in brand creation, cloud adoption and understanding market potential for stakeholder-focused solutions.",
    timeline: "Aug 2021",
    href: [],
    websites: [],
  },
  {
    title: "Founder",
    employer: "Aaiga",
    description:
      "Developing cutting-edge, privacy-first COVID-focused software solutions to help reduce the need for macro-lockdowns in order to return to normal, save lives and bring people together safely once more.",
    timeline: "Apr 2021",
    websites: [
      {
        name: "useguardian.app",
        href: "https://useguardian.app",
      },
    ],
  },
  {
    title: "Chief Technology Officer",
    employer: "WEC Administration",
    description:
      "Leading the digital innovations for a multidisciplinary investment and education body; focusing on education, community and digital tools.",
    timeline: "Mar 2021",
    websites: [
      {
        name: "miningstore.com.au",
        href: "https://miningstore.com.au",
      },
      {
        name: "thecashkings.com.au",
        href: "https://thecashkings.com.au",
      },
    ],
  },
  {
    title: "Co-Founder & Advisor",
    employer: "Swinburne Leadership Hub",
    description:
      "Born from a chance coffee and shared frustration between two serial innovators, the Swinburne Leadership Hub unites innovators, thinkers & doers for a common purpose — to experiment, learn, and grow.",
    timeline: "Mar 2020",
    websites: [
      {
        name: "swinlead.com",
        href: "https://swinlead.com",
      },
    ],
  },
  {
    title: "President",
    employer: "Helping Group",
    description:
      "Founded the digital-first charity HelpingGroup, focusing on creating social impact initiatives to uplift the quality of life for people; nationally, and beyond the Australian borders.",
    timeline: "Jan 2020",
    websites: [
      {
        name: "helping.group",
        href: "https://helping.group",
      },
    ],
  },
  {
    title: "Software Engineer",
    employer: "Centre for eResearch and Digital Innovation",
    description:
      "Working as a full-stack engineer, working with clients to understand, analyise and develop technical solutions; including the creation of a data portal to enable collaboration for family violence preventative measures, developing an ingestion pipeline with machine learning in order to digitise and index a library of scanned environmental audit documents, and more.",
    timeline: "Feb 2019 - Jan 2021",
    websites: [
      {
        name: "cerdi.edu.au",
        href: "https://www.cerdi.edu.au",
      },
    ],
  },
];

export default function Work() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Employment &amp; Roles
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              I&apos;ve had the pleasure of working on a number of exciting
              projects in various dynamic, fast-paced environments.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {jobs.map((job) => (
                <div key={job.title}>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    {job.title}{" "}
                    <span className="text-gray-500 font-light pl-2">
                      {job.employer}
                    </span>
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    {job.description}
                  </dd>
                  <dd className="mt-2 text-base font-light text-gray-400">
                    {job.timeline}
                    {job.websites.map((site) => (
                      <a
                        key={site.name}
                        href={site.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-3"
                      >
                        {site.name}
                      </a>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
