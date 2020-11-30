module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-styled-components',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-helmet-async`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-netlify`, // keep last in plugins array
  ],
};
