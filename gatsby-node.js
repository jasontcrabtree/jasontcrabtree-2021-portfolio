const graphQLWrapper = (promise) =>
  promise.then((pages) => {
    if (pages.errors) throw pages.errors;
    return pages;
  });

async function createRepetableCaseStudies({ graphql, actions, reporter }) {
  const caseStudiesTemplate = require.resolve('./src/templates/CaseStudies.js');

  // Query all pages we want to create and get IDS and template data
  const caseStudiesPages = await graphQLWrapper(
    graphql(`
      {
        allMdx {
          nodes {
            slug
            id
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
    actions.createPage({
      path: `/work/${node.slug}`,
      component: caseStudiesTemplate,
      context: {
        id: node.id,
      },
    });
  });
}

exports.createPages = async (params) => {
  await Promise.all([
    createRepetableCaseStudies(params),
    // create
  ]);
};
