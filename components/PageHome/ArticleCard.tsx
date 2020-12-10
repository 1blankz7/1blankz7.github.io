import Link from "next/link";
import { Article } from "services/articles";

type Props = {
  article: Article;
}

const ArticleCard: React.FC<Props> = ({ article }) => (
  <div>
    <img className="article-image" src={article.image} alt="" />
    <h2 className="article-title">
      <Link href={`/articles/${article.slug}`}>{article.title}</Link>
    </h2>
    <p className="article-body">{article.abstract}</p>
    <Link href={`/articles/${article.slug}`}>
      Read More...
    </Link>
  </div>
);

export default ArticleCard;
