/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'UndergroundJS',
    description:
      'JavaScript conference hosted in Rocketown in Nashville on August 2nd 2019.',
    twitter: 'https://twitter.com/undergroundjs',
    instagram: '',
  },
  __experimentalThemes: ['gatsby-theme-conference'],
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-138176222-1',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};
