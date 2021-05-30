module.exports = {
  siteMetadata: {
    title: `Matt Thauvette`,
    description: `JS dev living in NS`,
    author: `@mthauv`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#2d3047`,
        theme_color: `#2d3047`,
        display: `minimal-ui`,
        icon: `src/icons/logo.png`, // This path is relative to the root of the site.
      },
    },
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-eslint/
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        stages: ['develop'],
        extensions: ['js', 'jsx'],
        exclude: ['node_modules', '.cache', 'public'],
        // Any eslint-webpack-plugin options below
        emitWarning: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
