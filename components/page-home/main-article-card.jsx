import Link from "next/link";
import dayjs from "dayjs";

const MainArticleCard = ({ article }) => (
  <div>
    <img className="article-image" src={article.image} alt="" />
    <h2 className="text-gray-900 font-sans text-3xl my-5 font-thin">
      <Link href={`/posts/${article.slug}`}>{article.title}</Link>
    </h2>
    <span className="text-xs text-gray-800 font-thin block mb-5">
      {dayjs(article.created).format('DD/MM/YYYY')}
    </span>
    <p className="article-body">
      {article.abstract}
    </p>
    <Link href={`/posts/${article.slug}`} className="readmore">
      Read More...
    </Link>
  </div>
);

export default MainArticleCard;
