export interface Article {
  slug: string;
  title: string;
  image: string;
  created: string;
  abstract: string;
  category: string | undefined;
  featured: boolean | false;
}

export async function getAllArticles(): Promise<Array<Article>> {
  const context = require.context("../pages/articles", false, /\.mdx$/);
  const articles = [];
  for (const key of context.keys()) {
    const article: string = key.slice(2);
    const { meta } = await import(`../pages/articles/${article}`);
    articles.push({
      ...meta,
      slug: article.replace(".mdx", ""),
    });
  }
  return articles;
}