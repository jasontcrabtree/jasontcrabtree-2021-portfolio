// const { createRemoteFileNode } = require('gatsby-source-filesystem');

const graphQLWrapper = (promise) =>
  promise.then((pages) => {
    if (pages.errors) throw pages.errors;
    return pages;
  });

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions;

//   createTypes(`
//     type Mdx implements Node {
//       frontmatter: Frontmatter
//       coverImage: File @link(from: "coverImage___NODE")
//     }

//     type Frontmatter {
//       title: String!
//       coverImageUrl: String
//       coverImageAlt: String
//     }
//   `);
// };

/* exports.onCreateNode = async ({
  node,
  actions: { createNode },
  store,
  cache,
  createNodeId,
}) => {
  // For all MarkdownRemark nodes that have a featured image url, call createRemoteFileNode
  if (
    node.internal.type === 'Mdx' &&
    node.frontmatter.type === 'case-study' &&
    node.frontmatter.image !== null
  ) {
    const fileNode = await createRemoteFileNode({
      url: node.frontmatter.image, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      cache, // Gatsby's cache
      store, // Gatsby's Redux store
    });

    // if the file was created, attach the new node to the parent node
    if (fileNode) {
      node.coverImage___NODE = fileNode.id;
    }
  }
}; */

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
      console.log(node);
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
  ]);
};
