require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Underground JS`,
    description: `JavaScript conference hosted in Nashville, Summer 2019.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-emotion',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content`,
        name: 'content',
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: `${__dirname}/src/img/ugjs-square.jpg`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-138176222-1',
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};
