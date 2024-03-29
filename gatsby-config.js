module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-styled-components',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-helmet-async`,
    `gatsby-plugin-preload-fonts`,
    {
      resolve: 'gatsby-plugin-react-svg',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `work`,
        path: `${__dirname}/src/case-studies/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog-posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `snippets`,
        path: `${__dirname}/src/snippets/`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
    },
    // `gatsby-plugin-preact`,
    // `gatsby-plugin-netlify`, // keep last in plugins array
  ],
};
