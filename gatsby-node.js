const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  const posts = result.data.allMarkdownRemark.nodes;
  const postsPerPage = 2; // Adjust the number of posts per page.

  const numPages = Math.ceil(posts.length / postsPerPage);

    // Create the initial blog page
    createPage({
      path: '/blog',
      component: path.resolve('src/pages/templates/blog.js'),
      context: {
        numPages,// numPages, // Pass the numPages variable to the context
        currentPage: 1, // Set the current page to 1 (since it's the initial page)
        limit: postsPerPage,
      },
    });

  // Create paginated blog archive pages
  Array.from({ length: numPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? '/blog' : `/blog/page/${index + 1}`,
      component: path.resolve('src/pages/templates/blogArchiveTemplate.js'),
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        numPages,
        currentPage: index + 1,
      },
    });
  });

  posts.forEach(node => {
    createPage({
      path: '/blog/' + node.frontmatter.slug,
      component: path.resolve('src/pages/templates/blogPostTemplate.js'),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });




    
};
