import Featured from "../components/PageHome/Featured";
import ArticleCard from "../components/PageHome/ArticleCard";
import MainArticleCard from "../components/PageHome/MainArticleCard";
import Sidebar from "../components/PageHome/Sidebar";
import { Article, getAllArticles } from "services/articles";

type Props = {
  mainArticle: Article|null;
  featuredArticles: Array<Article>;
  articles: Array<Array<Article>>,
};

function chunk<T>(array: Array<T>, size: number): Array<Array<T>> {
  return array.reduce((acc, e, i) => (i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc), []);
}

const IndexPage: React.FC<Props> = ({ mainArticle, featuredArticles, articles }) => (
  <>
    {featuredArticles.length > 0 && <Featured articles={featuredArticles} />}
    <main className="max-w-5xl mx-auto pb-10 pt-10">
      <div className="flex flex-wrap overflow-hidden">
        <div className="w-full overflow-hidden md:w-4/6 lg:w-4/6 xl:w-4/6">
          <div className="mr-2 md:mr-4 ml-2">
            <div className="pb-10">
              {mainArticle && <MainArticleCard article={mainArticle} />}
            </div>
            {articles.map((articleRow, idx) => (
              <div className="article-row" key={idx}>
                <div className="article-card-right">
                  <ArticleCard article={articleRow[0]} />
                </div>
                {articleRow[1] && (
                  <div className="article-card-right">
                    <ArticleCard article={articleRow[1]} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full overflow-hidden md:w-2/6 lg:w-2/6 xl:w-2/6">
          <Sidebar articles={[]} />
        </div>
      </div>
    </main>
  </>
);

export async function getStaticProps(context) {
  const articles = await getAllArticles();
  const featuredArticles = articles.filter(article => article.featured);
  const notFeatured = articles.filter(article => !article.featured);
  const mainArticle = notFeatured.shift();

  return {
    props: {
      mainArticle: mainArticle || null,
      featuredArticles,
      articles: chunk(notFeatured, 2),
    },
  };
}

export default IndexPage;
