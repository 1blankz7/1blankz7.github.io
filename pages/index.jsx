import Featured from "../components/page-home/featured";
import ArticleCard from "../components/page-home/article-card";
import MainArticleCard from "../components/page-home/main-article-card";
import Sidebar from "../components/page-home/sidebar";
import { getAllPosts } from "@services";

const IndexPage = ({ posts }) => (
  <>
    <Featured articles={posts} />
    <main className="max-w-5xl mx-auto pb-10 pt-10">
      <div className="flex flex-wrap overflow-hidden">
        <div className="w-full overflow-hidden md:w-4/6 lg:w-4/6 xl:w-4/6">
          <div className="mr-2 md:mr-4 ml-2">
            <div className="pb-10">
              <MainArticleCard article={posts[0]} />
            </div>
            <div className="article-row">
              <div className="article-card-right">
                <ArticleCard article={posts[0]} />
              </div>
              <div className="article-card-left">
                <ArticleCard article={posts[0]} />
              </div>
            </div>
            <div className="article-row">
              <div className="article-card-right">
                <ArticleCard article={posts[0]} />
              </div>
              <div className="article-card-left">
                <ArticleCard article={posts[0]} />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full overflow-hidden md:w-2/6 lg:w-2/6 xl:w-2/6">
          <Sidebar />
        </div>
      </div>
    </main>
  </>
);

export async function getStaticProps(context) {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
}

export default IndexPage;
