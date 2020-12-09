export async function getAllPosts() {
  const context = require.context("../pages/posts", false, /\.mdx$/);
  const posts = [];
  for (const key of context.keys()) {
    const post = key.slice(2);
    const { meta } = await import(`../pages/posts/${post}`);
    posts.push({
      ...meta,
      slug: post.replace(".mdx", ""),
    });
  }
  return posts;
}
