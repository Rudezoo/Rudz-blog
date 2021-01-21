require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Rudz`,
    author: {
      name: `Rudezoo`,
      summary: `Web Programmer`,
    },
    description: `blog`,
    social: {
      twitter: `rude_zoo`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/image/logo.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-antd',
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-lunr',
      
      options: {
        languages: [{ name: 'en'}],
        fields: [
          { name: 'title', store: true, attributes: { boost: 20 } },
          { name: 'description', store: true, attributes: { boost: 5 }},
          { name: 'content' },
          { name: 'url', store: true },
          { name: 'date', store: true },
          {name : 'tags', store: true}
        ],
        resolvers: {
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            description: node => node.frontmatter.description,
            content: node => node.rawMarkdownBody,
            url: node => node.fields.slug,
            date: node => node.frontmatter.date,
            tags: node=>node.frontmatter.tags
          },
        },
        filename: 'search_index.json',
      },
    }, 

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
