const posts = [
    {
        title: 'You are the product',
        href: '/articles/you-are-the-product',
        category: { name: 'Article', href: '#' },
        description:
            'The fallacy of ‘free’ has blinded us by and large to the fact that we are paying for it, just in ways we don’t immediately see.',
        date: 'Jan 02, 2021',
        datetime: '2021-01-02',
        imageUrl:
            'https://images.unsplash.com/photo-1565591452825-67d6b7df1d47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1026&q=80',
        readingTime: '6 min',
    },
    {
        title: 'A better, brighter, cleaner future.',
        href: '/articles/a-better-brighter-cleaner-future',
        category: { name: 'Article', href: '#' },
        description:
            'Let me ask you this - where is your money at the moment? Your knee-jerk reaction may say ‘oh, it’s in the bank!’, but you money doesn’t live there. I won’t try and get into the complex nature of how banks reinvest and lend your money to recoup… you know what? I’m even bored now.',
        date: 'Dec 23, 2020',
        datetime: '2020-12-23',
        imageUrl:
            'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80',
        readingTime: '4 min',
    },
    {
        title: 'Burnout; let\'s talk about it.',
        href: '/articles/burnout-lets-talk-about-it',
        category: { name: 'Article', href: '#' },
        description:
            'This year has been the wildest, most productive, most humbling year of my life to date. A single idea has lit the way for the creation of some of what I think are the most ambition, long-needed and impactful initiatives Australia has seen in a while; at very least from such a young group of people.',
        date: 'Dev 13, 2020',
        datetime: '2020-12-13',
        imageUrl:
            'https://images.unsplash.com/photo-1487297977649-04b1dc408d93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
        readingTime: '11 min',
    },
]

export default function Articles() {
    return (
        <div id="articles" className="relative px-4 sm:px-6 lg:px-8">
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">And every now and then I like to write. </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        It’s a great way to share knowledge, remember how far we've come and
                        create dialogue on topics that interest me or are near to my heart.
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {posts.map((post) => (
                        <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                            </div>
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-indigo-600">
                                        <a href={post.category.href} className="hover:underline">
                                            {post.category.name}
                                        </a>
                                    </p>
                                    <a href={post.href} className="block mt-2">
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