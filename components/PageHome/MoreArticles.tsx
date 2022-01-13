import ArticleCard from "./ArticleCard";

export default function MoreStories({ articles }) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {articles.map((article) => (
          <ArticleCard
            key={article.slug}
            article={article}
          />
        ))}
      </div>
    </section>
  )
};
