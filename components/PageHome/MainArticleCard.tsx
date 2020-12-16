import Link from "next/link";
import dayjs from "dayjs";
import { Article } from "services/articles";

type Props = {
  article: Article;
}

const MainArticleCard: React.FC<Props> = ({ article }) => (
  <div>
    <Link href={`/articles/${article.slug}`}>
      <img className="article-image" src={article.image} alt={article.title} />
    </Link>
    <h2 className="text-gray-900 font-sans text-3xl my-5 font-thin">
      <Link href={`/articles/${article.slug}`}>{article.title}</Link>
    </h2>
    <span className="text-xs text-gray-800 font-thin block mb-5">
      {dayjs(article.created).format('DD/MM/YYYY')}
    </span>
    <p className="article-body">
      {article.abstract}
    </p>
    <Link href={`/articles/${article.slug}`}>
      Read More...
    </Link>
  </div>
);

export default MainArticleCard;
