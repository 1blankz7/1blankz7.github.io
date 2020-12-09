import Featured from "../components/page-home/featured";
import ArticleCard from "../components/page-home/article-card";
import MainArticleCard from "../components/page-home/main-article-card";
import Sidebar from "../components/page-home/sidebar";

const IndexPage = () => (
  <>
    <Featured />
    <main className="max-w-5xl mx-auto pb-10 pt-10">
      <div className="flex flex-wrap overflow-hidden">
        <div className="w-full overflow-hidden md:w-4/6 lg:w-4/6 xl:w-4/6">
          <div className="mr-2 md:mr-4 ml-2">
            <div className="pb-10">
              <MainArticleCard />
            </div>
            <div className="article-row">
              <div className="article-card-right">
                <ArticleCard />
              </div>
              <div className="article-card-left">
                <ArticleCard />
              </div>
            </div>
            <div className="article-row">
              <div className="article-card-right">
                <ArticleCard />
              </div>
              <div className="article-card-left">
                <ArticleCard />
              </div>
            </div>
          </div>
          <div className="mr-2 md:mr-4 ml-2">
            <div className="pb-10">
              <MainArticleCard />
            </div>
            <div className="article-row">
              <div className="article-card-right">
                <ArticleCard />
              </div>
              <div className="article-card-left">
                <ArticleCard />
              </div>
            </div>
            <div className="article-row">
              <div className="article-card-right">
                <ArticleCard />
              </div>
              <div className="article-card-left">
                <ArticleCard />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full overflow-hidden md:w-2/6 lg:w-2/6 xl:w-2/6">
          <Sidebar />
        </div>
      </div>
      <div className="text-center">
        <button className="rounded-sm bg-gray-900 text-white tracking-widest text-sm uppercase font-medium py-3 mt-5 px-5">
          Load more articles
        </button>
      </div>
    </main>
  </>
);

export default IndexPage;
