module.exports = {
  siteMetadata: {
    title: `Novela by Narative`,
    name: `Christian Blank`,
    siteUrl: `https://cblank.de`,
    description: `I'm a researcher, founder, investor and former professional sportsman living in Germany. This is my personal blog.`,
    hero: {
      heading: `Welcome to my site.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/_cblank`,
      },
      {
        name: `github`,
        url: `https://github.com/1blankz7`,
      },
      {
        name: `academia`,
        url: `https://haw-hamburg.academia.edu/ChristianBlank`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/christian-blank-55b669195/`,
      },
      {
        name: `xing`,
        url: `https://www.xing.com/profile/Christian_Blank28/cv`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
