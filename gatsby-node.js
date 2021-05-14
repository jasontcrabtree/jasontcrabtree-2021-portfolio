const graphQLWrapper = (promise) =>
  promise.then((pages) => {
    if (pages.errors) throw pages.errors;
    return pages;
  });

async function createRepeatableCaseStudies({ graphql, actions, reporter }) {
  const caseStudiesTemplate = require.resolve('./src/templates/CaseStudies.js');

  // Query all pages we want to create and get IDS and template data
  const caseStudiesPages = await graphQLWrapper(
    graphql(`
      {
        allMdx {
          nodes {
            slug
            id
            frontmatter {
              type
            }
          }
        }
      }
    `)
  );

  if (caseStudiesPages.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  // Create pages for each Page in Prismic using the selected template.
  caseStudiesPages.data.allMdx.nodes.forEach((node) => {
    if (node.frontmatter.type === 'case-study') {
      actions.createPage({
        path: `/work/${node.slug}`,
        component: caseStudiesTemplate,
        context: {
          id: node.id,
        },
      });
    }
  });
}

async function createRepeatableBlogPosts({ graphql, actions, reporter }) {
  const blogPostsTemplate = require.resolve('./src/templates/BlogPosts.js');

  // Query all pages we want to create and get IDS and template data
  const blogPostsPages = await graphQLWrapper(
    graphql(`
      {
        allMdx {
          nodes {
            slug
            id
            frontmatter {
              type
            }
          }
        }
      }
    `)
  );

  if (blogPostsPages.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  // Create pages for each Page in Prismic using the selected template.
  blogPostsPages.data.allMdx.nodes.forEach((node) => {
    if (node.frontmatter.type !== 'case-study') {
      actions.createPage({
        path: `/blog/${node.slug}`,
        component: blogPostsTemplate,
        context: {
          id: node.id,
        },
      });
    }
  });
}

async function createRepeatableSnippetsPages({ graphql, actions, reporter }) {
  const snippetsTemplate = require.resolve('./src/templates/Snippets.js');

  // Query all pages we want to create and get IDS and template data
  const snippetsPage = await graphQLWrapper(
    graphql(`
      {
        allMdx {
          nodes {
            slug
            id
            frontmatter {
              type
            }
          }
        }
      }
    `)
  );

  if (snippetsPage.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  // Create pages for each Page in Prismic using the selected template.
  snippetsPage.data.allMdx.nodes.forEach((node) => {
    if (node.frontmatter.type !== 'case-study') {
      actions.createPage({
        path: `/snippets/${node.slug}`,
        component: snippetsTemplate,
        context: {
          id: node.id,
        },
      });
    }
  });
}

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions;
//   if (node.internal.type === 'Mdx') {
//     const value = createFilePath({ node, getNode });

//     createNodeField({
//       name: 'thisIsANewNodeFieldInGraphQL',
//       node,
//       value: `${value}`,
//     });
//   }
// };

exports.createPages = async (params) => {
  await Promise.all([
    // async create pages with functions
    createRepeatableCaseStudies(params),
    createRepeatableBlogPosts(params),
    createRepeatableSnippetsPages(params),
  ]);
};
