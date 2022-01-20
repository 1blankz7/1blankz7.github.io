import Link from "next/link";
import { Article } from "services/articles";

type Props = {
  article: Article;
}

const ArticleCard: React.FC<Props> = ({ article }) => (
  <div>
    <Link href={`/articles/${article.slug}`}>
      <img className="article-image" src={article.content.image.filename} alt={article.content.image.alt}/>
    </Link>
    <h2 className="article-title">
      <Link href={`/articles/${article.slug}`}>{article.content.title}</Link>
    </h2>
    <p className="article-body">{article.content.description}</p>
    <Link href={`/articles/${article.slug}`}>
      Read More...
    </Link>
  </div>
);

export default ArticleCard;
