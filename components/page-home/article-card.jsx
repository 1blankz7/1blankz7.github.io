import Link from "next/link";

const ArticleCard = ({ article }) => (
  <div>
    <img className="article-image" src={article.image} alt="" />
    <h2 className="article-title">
      <Link href={`/posts/${article.slug}`}>{article.title}</Link>
    </h2>
    <p className="article-body">{article.abstract}</p>
    <Link href={`/posts/${article.slug}`} className="readmore">
      Read More...
    </Link>
  </div>
);

export default ArticleCard;
