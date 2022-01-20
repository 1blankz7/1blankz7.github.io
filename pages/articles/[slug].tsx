import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import {getAllPostsWithSlug, getPost} from "../../lib/storyblok";
import { marked } from 'marked';
import ArticleContent from "@components/PageArticle/ArticleContent";

export default function Post({ post }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      {router.isFallback ? (
        <h2>Loading…</h2>
      ) : (
        <>
          <article>
            <Head>
              <title>
                {post.content.title} | Christian Blank
              </title>
              <meta property="og:image" content={post.content.image} />
            </Head>
            <ArticleContent article={post} />
          </article>
        </>
      )}
    </>
  )
}

export async function getStaticProps({ params, preview = null }) {
  const post = await getPost(params.slug, preview)

  return {
    props: {
      preview,
      post: {
        ...post,
        html: post?.content?.content
          ? marked.parse(post.content.content)
          : null,
      },
    },
  }
}


export async function getStaticPaths() {
  const articles = await getAllPostsWithSlug();
  return {
    paths: articles?.map((article) => `/articles/${article.slug}`) || [],
    fallback: true,
  }
}
