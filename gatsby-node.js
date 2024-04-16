// const path = require('path');

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;

//   const result = await graphql(`
//   query {
//     allContentfulBasicBlogPost(sort: { fields: [createdAt], order: DESC }) {
//       nodes {
//         slug
//       }
//     }
//   }
//   `);

//   const posts = result.data.allContentfulBasicBlogPost.nodes;
//   const postsPerPage = 6; // Adjust the number of posts per page.

//   const numPages = Math.ceil(posts.length / postsPerPage);

//     // Create the initial blog page
//     createPage({
//       path: '/blog',
//       component: path.resolve('src/pages/templates/blog.js'),
//       context: {
//         numPages,// numPages, // Pass the numPages variable to the context
//         currentPage: 1, // Set the current page to 1 (since it's the initial page)
//         limit: postsPerPage,
//       },
//     });

//   // Create paginated blog archive pages
//   Array.from({ length: numPages }).forEach((_, index) => {
//     createPage({
//       path: index === 0 ? '/blog' : `/blog/page/${index + 1}`,
//       component: path.resolve('src/pages/templates/blogArchiveTemplate.js'),
//       context: {
//         limit: postsPerPage,
//         skip: index * postsPerPage,
//         numPages,
//         currentPage: index + 1,
//       },
//     });
//   });

//   posts.forEach(node => {
//     createPage({
//       path: `/blog/${node.slug}`,
//       component: path.resolve('src/pages/templates/blogPostTemplate.js'),
//       context: {
//         slug: node.slug,
//       },
//     });
//   });





    
// };

const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allContentfulBasicBlogPost(sort: { fields: [createdAt], order: DESC }) {
        nodes {
          slug
          category
        }
      }
    }
  `);

  const posts = result.data.allContentfulBasicBlogPost.nodes;

  // Create page for all blog posts regardless of category
  const postsPerPage = 6; // Adjust the number of posts per page.
  const numPages = Math.ceil(posts.length / postsPerPage);
  
  // Create the initial blog page for all posts
  createPage({
    path: '/blog',
    component: path.resolve('src/pages/templates/blog.js'),
    context: {
      numPages,
      currentPage: 1,
      limit: postsPerPage,
    },
  });

  // Create paginated blog archive pages for all posts
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

  // Create individual blog post pages for all posts
  posts.forEach(node => {
    createPage({
      path: `${node.category}/blog/${node.slug}`,
      component: path.resolve('src/pages/templates/blogPostTemplate.js'),
      context: {
        slug: node.slug,
      },
    });
  });

  // Group posts by category
  const postsByCategory = {};
  posts.forEach(post => {
    if (!postsByCategory[post.category]) {
      postsByCategory[post.category] = [];
    }
    postsByCategory[post.category].push(post);
  });

  // Create pages for each category
  Object.entries(postsByCategory).forEach(([category, posts]) => {
    const categorySlug = category.toLowerCase();

    // Create the initial blog page for each category
    createPage({
      path: `/${categorySlug}/blog`,
      component: path.resolve('src/pages/templates/blog.js'),
      context: {
        numPages,
        currentPage: 1,
        limit: postsPerPage,
        category,
      },
    });

    // Create paginated blog archive pages for each category
    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/${categorySlug}/blog` : `/${categorySlug}/blog/page/${index + 1}`,
        component: path.resolve('src/pages/templates/blogArchiveTemplate.js'),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1,
          category,
        },
      });
    });

    // Create individual blog post pages for each category
    posts.forEach(node => {
      createPage({
        path: `/${categorySlug}/blog/${node.slug}`,
        component: path.resolve('src/pages/templates/blogPostTemplate.js'),
        context: {
          slug: node.slug,
          category,
        },
      });
    });
  });
};