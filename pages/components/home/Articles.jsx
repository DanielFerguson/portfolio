import Image from "next/image";
import * as Fathom from "fathom-client";

const posts = [
  {
    title: "What’s next?",
    href: "https://medium.com/@danferg/whats-next-dedb86312201",
    category: "Article",
    description:
      "The definitive decade — pretty much a waste of an invaluable chance so far.",
    date: "Nov 09, 2021",
    datetime: "2021-11-09",
    imageUrl:
      "https://images.unsplash.com/photo-1609537937459-9a2e947cb16c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80",
    readingTime: "4 min",
  },
  {
    title: "You are the product",
    href: "https://medium.com/@danferg/you-are-the-product-e76897b05e1",
    category: "Article",
    description:
      "The fallacy of ‘free’ has blinded us by and large to the fact that we are paying for it, just in ways we don’t immediately see.",
    date: "Jan 02, 2021",
    datetime: "2021-01-02",
    imageUrl:
      "https://images.unsplash.com/photo-1565591452825-67d6b7df1d47?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3B5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    readingTime: "6 min",
  },
  {
    title: "A better, brighter, cleaner future.",
    href: "https://medium.com/@danferg/a-better-brighter-cleaner-future-8e464c725f0",
    category: "Article",
    description:
      "Let me ask you this - where is your money at the moment? Your knee-jerk reaction may say ‘oh, it’s in the bank!’, but you money doesn’t live there. I won’t try and get into the complex nature of how banks reinvest and lend your money to recoup… you know what? I’m even bored now.",
    date: "Dec 23, 2020",
    datetime: "2020-12-23",
    imageUrl:
      "https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2luZCUyMGVuZXJneXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    readingTime: "3 min",
  },
];

const viewDevDiary = () => {
  Fathom.trackGoal("CLGZI8C0", 0);
};

const viewArticle = () => {
  Fathom.trackGoal("8YSBTM5M", 0);
};

export default function Articles() {
  return (
    <div id="articles" className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            And every now and then I like to write.{" "}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            It’s a great way to share knowledge, remember how far we&apos;ve
            come and create dialogue on topics that interest me or are near to
            my heart.
          </p>
          <div className="mt-3 mx-auto text-gray-500 flex flex-col items-center justify-center">
            <p>
              If you are interested, you can follow my learning journey on my
              Dev Diary
            </p>
            <a
              onClick={viewDevDiary}
              href="https://dev-diary.notion.site"
              target="_blank"
              rel="noopener noreferrer"
              className="flex mx-auto mt-6 items-center text-sm px-3 py-3 rounded shadow-lg"
            >
              <img src="/notion.svg" alt="Notion" className="h-8 w-8" />
              <span className="pl-3">📕 Dev Diary</span>
            </a>
          </div>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
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
                    {post.category}
                  </p>
                  <a
                    onClick={viewArticle}
                    href={post.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block mt-2"
                  >
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
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
        <div className="mt-4">
          <div className="mx-auto text-gray-500 flex flex-col items-center justify-center">
            <a
              onClick={viewDevDiary}
              href="https://dev-diary.notion.site"
              target="_blank"
              rel="noopener noreferrer"
              className="flex mx-auto mt-6 items-center text-sm px-3 py-3 rounded shadow-lg"
            >
              <img
                src="/medium.png"
                alt="Medium logo"
                className="h-8 w-8 rounded"
              />
              <span className="pl-3">📕 Read more</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
