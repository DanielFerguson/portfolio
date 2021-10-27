import Image from 'next/image'

const posts = [
    {
        title: 'You are the product',
        href: 'https://medium.com/@danferg/you-are-the-product-e76897b05e1',
        category: { name: 'Article', href: '#' },
        description:
            'The fallacy of ‘free’ has blinded us by and large to the fact that we are paying for it, just in ways we don’t immediately see.',
        date: 'Jan 02, 2021',
        datetime: '2021-01-02',
        imageUrl: 'https://images.unsplash.com/photo-1565591452825-67d6b7df1d47?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3B5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
        readingTime: '6 min',
    },
    {
        title: 'A better, brighter, cleaner future.',
        href: 'https://medium.com/@danferg/a-better-brighter-cleaner-future-8e464c725f0',
        category: { name: 'Article', href: '#' },
        description:
            'Let me ask you this - where is your money at the moment? Your knee-jerk reaction may say ‘oh, it’s in the bank!’, but you money doesn’t live there. I won’t try and get into the complex nature of how banks reinvest and lend your money to recoup… you know what? I’m even bored now.',
        date: 'Dec 23, 2020',
        datetime: '2020-12-23',
        imageUrl: 'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2luZCUyMGVuZXJneXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
        readingTime: '3 min',
    },
    {
        title: 'Burnout; let\'s talk about it.',
        href: 'https://medium.com/@danferg/burnout-lets-talk-about-it-c9d810e74eee',
        category: { name: 'Article', href: '#' },
        description:
            'This year has been the wildest, most productive, most humbling year of my life to date. A single idea has lit the way for the creation of some of what I think are the most ambition, long-needed and impactful initiatives Australia has seen in a while; at very least from such a young group of people.',
        date: 'Dev 13, 2020',
        datetime: '2020-12-13',
        imageUrl: 'https://images.unsplash.com/photo-1509923261489-fd580b2d9051?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZWx5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
        readingTime: '3 min',
    },
]

export default function Articles() {
    return (
        <div id="articles" className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">And every now and then I like to write. </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        It’s a great way to share knowledge, remember how far we&apos;ve come and
                        create dialogue on topics that interest me or are near to my heart.
                    </p>
                    <div className="mt-3 mx-auto text-gray-500 flex flex-col items-center justify-center">
                        <p>If you are interested, you can follow my learning journey on my Dev Diary</p>
                        <a href="https://dev-diary.notion.site" target="_blank" rel="noopener noreferrer" className="flex mx-auto mt-6 items-center text-sm px-3 py-3 rounded shadow-lg">
                            <img src="/notion.svg" alt="Notion" className="h-8 w-8" />
                            <span className="pl-3">📕 Dev Diary</span>
                        </a>
                    </div>
                </div>
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {posts.map((post) => (
                        <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div className="flex-shrink-0">
                                <Image
                                    className="h-48 object-cover"
                                    src={post.imageUrl}
                                    alt=""
                                    layout="responsive"
                                    width="50"
                                    height="30"
                                />
                            </div>
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-indigo-600">
                                        {post.category.name}
                                    </p>
                                    <a href={post.href} target="_blank" rel="noreferrer" className="block mt-2">
                                        <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                        <p className="mt-3 text-base text-gray-500">{post.description}</p>
                                    </a>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <div className="flex space-x-1 text-sm text-gray-500">
                                        <time dateTime={post.datetime}>{post.date}</time>
                                        <span aria-hidden="true">&middot;</span>
                                        <span>{post.readingTime} read</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}