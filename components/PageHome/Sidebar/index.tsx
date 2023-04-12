import RecentPost from "./RecentPost";
import Image from "next/image";
import { Article } from "services/articles";

type Props = {
  articles: Array<Article>;
}

const Sidebar: React.FC<Props> = ({ articles }) => (
  <div className="ml-2 md:ml-4 mr-2">
    <div className="mt-20 sm:mt-0 text-center">
      <div className="w-64 h-64 rounded-full mx-auto relative">
        <Image alt="Christian Blank" src="/assets/cb.jpg" fill />
      </div>
      <h2 className="font-light text-xl my-5">I am</h2>
      <p className="text-gray-900 font-thin tracking-wider leading-loose font-sans">
        Hi my name is Christian. I work and live in Nothern Germany. I'm a researcher, founder, investor and former
        professional sportsman.
      </p>
    </div>
    {articles.length > 0 ? (
      <div className="mt-10">
        <h2 className="font-light text-xl mb-5 text-gray-900 text-center font-sans">
          Recent Posts
        </h2>
        <ul>
          {articles.map((article) => (
            <RecentPost key={article.slug} article={article} />
          ))}
        </ul>
      </div>
    ) : null}
  </div>
);

export default Sidebar;
