import Head from "next/head";
import Sidebar from "../components/PageHome/Sidebar";
import {getAllPostsForHome} from "../lib/storyblok"
import {Article} from "@services/articles";
import MainArticleCard from "@components/PageHome/MainArticleCard";
import MoreStories from "@components/PageHome/MoreArticles";

type Props = {
  articles: Article[];
  preview: boolean;
};

const IndexPage: React.FC<Props> = ({ articles, preview }) => {
  const mainArticle = articles[0];
  const morePosts = articles.slice(1);

  return (
    <>
      <Head>
        <title>Christian Blank</title>
      </Head>
      <main className="max-w-5xl mx-auto pb-10 pt-10">
        <div className="flex flex-wrap overflow-hidden">
          <div className="w-full overflow-hidden md:w-4/6 lg:w-4/6 xl:w-4/6">
            <div className="mr-2 md:mr-4 ml-2">
              <div className="pb-10">
                {mainArticle && <MainArticleCard article={mainArticle}/>}
              </div>

              {morePosts.length > 0 && <MoreStories articles={morePosts} />}
            </div>
          </div>

          <div className="w-full overflow-hidden md:w-2/6 lg:w-2/6 xl:w-2/6">
            <Sidebar articles={articles.slice(0, 3)}/>
          </div>
        </div>
      </main>
    </>
  );
};

export async function getStaticProps({ preview = false }) {
  const articles = (await getAllPostsForHome(preview)) || [];

  return {
    props: { articles, preview },
    revalidate: 3600,
  };
}

export default IndexPage;
