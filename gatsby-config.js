module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-styled-components',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-helmet-async`,
    `gatsby-plugin-preload-fonts`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
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
    `gatsby-plugin-mdx`,
    `gatsby-plugin-netlify`, // keep last in plugins array
  ],
};
