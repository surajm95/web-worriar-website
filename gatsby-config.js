/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 * 
 */


module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
          name: 'projects',
          engine: 'flexsearch',
          query: `{
            allMarkdownRemark {
            nodes {
              frontmatter {
                slug
                title
                thumb {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
            }
          }
        }`,
          ref: 'slug',
          index: ['title'],
          store: ['slug','title','thumb'],
          normalizer: ({ data }) =>
          data.allMarkdownRemark.nodes.map((node) => ({
              title: node.frontmatter.title,
              slug: node.frontmatter.slug,
              thumb : node.frontmatter.thumb,
          })),
        },
    },
  ],
  siteMetadata: {
    title: 'Web Warrior',
    description: 'web dev portfolio',
    copyright: 'This website is copyright 2021 Web Warrior'
  },
}