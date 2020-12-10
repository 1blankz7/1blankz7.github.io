import FeaturedItem from "./Item";
import { Article } from "services/articles";

type Props = {
  articles: Array<Article>;
}

const Featured: React.FC<Props> = ({ articles }) => (
  <div className="bg-gray-100">
    <div className="max-w-5xl mx-auto pt-10 pb-10">
      <ul className="flex flex-wrap -mx-2 overflow-hidden">
        {articles.map((article) => (
          <FeaturedItem key={article.slug} article={article} />
        ))}
      </ul>
    </div>
  </div>
);

export default Featured;
