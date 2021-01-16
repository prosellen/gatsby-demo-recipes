import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: 'LEY - Recipes (Gatsby Demo)',
    siteUrl: 'https://gatsby.recipes',
    description: `It's this ... or McDonalds.`,
    twitter: '@p_rosellen',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};
