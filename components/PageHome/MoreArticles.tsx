import ArticleCard from "./ArticleCard";

export default function MoreStories({ articles }) {
  return (
    <section>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
