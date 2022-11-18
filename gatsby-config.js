/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
 require("dotenv").config({
   path: `.env.${process.env.NODE_ENV}`,
 })
 
module.exports = {
  siteMetadata: {
    title: `L'écoute`,
    description: `Centre de consultation et de relation d'aide`,
    twitterUsername: `@lecoute`,
    image: `/lecoute.png`,
    siteUrl: `https://lecoute.ca`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `d3iketmxpc1q`, 
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
