module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-styled-components',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-helmet-async`,
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `work`,
        path: `${__dirname}/src/case-studies/`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-netlify`, // keep last in plugins array
  ],
};
