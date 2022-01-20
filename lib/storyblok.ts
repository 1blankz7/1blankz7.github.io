// @ts-ignore
async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch('https://gapi.storyblok.com/v1/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Token: process.env.STORYBLOK_API_KEY,
      Version: preview ? 'draft' : 'published',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    {
      ArticleItems(sort_by: "first_published_at:desc") {
        items {
          slug
          published_at
          first_published_at
          content {
            content
            description
            title
            image {
              id
              alt
              title
              filename
            }
            featured
          }
          tag_list
        }
      }
    }
  `);
  return data?.ArticleItems.items
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      ArticleItems {
        items {
          slug
        }
      }
    }
  `)
  return data?.ArticleItems.items
}

export async function getPost(slug, preview) {
  const data = await fetchAPI(
    `
      query ArticleBySlug($slug: ID!) {
        ArticleItem(id: $slug) {
          slug
          published_at
          first_published_at
          content {
            content
            description
            title
            image {
              id
              alt
              title
              filename
            }
            featured
          }
          tag_list
        }
      }
  `,
    {
      preview,
      variables: {
        slug: `articles/${slug}`,
      },
    }
  )

  return data?.ArticleItem;
}
