const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const newsTemplate = path.resolve(`./src/templates/news.js`);
  const newsSingleTemplate = path.resolve(`./src/templates/news-single.js`);
  const leadershipTemplate = path.resolve(`./src/templates/leadership-post.js`);

  const news = await graphql(
    `
      {
        allStrapiRooms(sort: { order: DESC, fields: Posted_date }) {
          nodes {
            url
            strapiId
            Posted_date
            Title
            Content
            Category
            Author {
              Name
              Avatar {
                url
              }
            }
            Featured
            Short_description
            created_at
            image {
              url
            }
          }
        }
      }
    `
  );

  const leaderships = await graphql(
    `
      {
        allStrapiLeaderships(sort: { order: ASC, fields: Order }) {
          nodes {
            id
            strapiId
            Order
            Name
            Content
            Slug
            Position
            created_at
          }
        }
      }
    `
  );

  // Create blog posts pages.

  const categories = {};

  news.data.allStrapiRooms.nodes.forEach(item => {
    categories[item.Category.toLowerCase()] = '';

    createPage({
      path: `newsroom/${item.url.trim()}`,
      component: newsSingleTemplate,
      context: {
        ...item,
      },
    });
  });

  createPage({
    path: `newsroom`,
    component: newsTemplate,
    context: {
      nodes: news.data.allStrapiRooms.nodes,
      categories,
    },
  });

  leaderships.data.allStrapiLeaderships.nodes.forEach(item => {
    createPage({
      path: `leadership/${item.Slug}`,
      component: leadershipTemplate,
      context: {
        ...item,
      },
    });
  });

  createPage({
    path: `leadership`,
    component: leadershipTemplate,
    context: {
      ...leaderships.data.allStrapiLeaderships.nodes[0],
    },
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type StrapiRooms implements Node {
      image: File
    }
  `;
  createTypes(typeDefs);
};

// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions;
//
//   // page.matchPath is a special key that's used for matching pages
//   // only on the client.
//   if (page.path.match(/^\/category/)) {
//     page.matchPath = "/category/*";
//
//     // Update the page.
//     createPage(page);
//   }
// };
