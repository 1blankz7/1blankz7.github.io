import FeaturedItem from "./item";

const Featured = ({ articles }) => (
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
