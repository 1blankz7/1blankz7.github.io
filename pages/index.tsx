import Featured from "../components/PageHome/Featured";
import ArticleCard from "../components/PageHome/ArticleCard";
import MainArticleCard from "../components/PageHome/MainArticleCard";
import Sidebar from "../components/PageHome/Sidebar";
import { getAllArticles } from "services/articles";

const IndexPage = ({ articles }) => (
  <>
    <Featured articles={articles} />
    <main className="max-w-5xl mx-auto pb-10 pt-10">
      <div className="flex flex-wrap overflow-hidden">
        <div className="w-full overflow-hidden md:w-4/6 lg:w-4/6 xl:w-4/6">
          <div className="mr-2 md:mr-4 ml-2">
            <div className="pb-10">
              <MainArticleCard article={articles[0]} />
            </div>
            <div className="article-row">
              <div className="article-card-right">
                <ArticleCard article={articles[0]} />
              </div>
              <div className="article-card-left">
                <ArticleCard article={articles[0]} />
              </div>
            </div>
            <div className="article-row">
              <div className="article-card-right">
                <ArticleCard article={articles[0]} />
              </div>
              <div className="article-card-left">
                <ArticleCard article={articles[0]} />
              </div>
            </div>
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

  return {
    props: {
      articles,
    },
  };
}

export default IndexPage;
