// gatsby-config.js
const dotenv = require('dotenv');

// Load .env file in development mode
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}


module.exports = {
  siteMetadata: {
      title: `Kurtis Kuni Creative`,
      description: `Kick off your next, great project with this template starter.`,
      author: `@kurtiskuni`,
      siteUrl: `https://kurtiskunicreative.com`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/src/pages/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/pages/images`,
        // ignore: [`**/\.*`], // ignore files starting with a dot
    },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: 'cdn.contentful.com', // Specify Contentful API host, optional
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
  ],
}
