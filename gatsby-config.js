/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `IncluCity`,
    description: `IncluCity - Por cidades mais inclusivas.`,
    author: `@inclucity`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images\/.*\.svg/
        }
      }
    },
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `IncluCity`,
        short_name: `IncluCity`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#EA580C`,
        display: `standalone`,
        icon: `static/favicon.png`, 
      },
    },
  ],
}