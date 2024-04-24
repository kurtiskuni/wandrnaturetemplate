import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import { format } from 'date-fns';
import { navigate } from 'gatsby';


const BlogArchiveTemplate = ({ data, pageContext }) => {
  const posts = data.allContentfulBasicBlogPost.nodes;
  const { currentPage, numPages } = pageContext;

  // console.log( pageContext)
  console.log(posts)

  // State to keep track of the current page index
  const [currentIndex, setCurrentIndex] = useState(currentPage - 1);

// Handle the 'next' button click
const handleNextClick = () => {
  if (currentIndex < numPages - 1) {
    setCurrentIndex(currentIndex + 1);
    navigate(currentIndex === 0 ? '/blog' : `/blog/page/${currentIndex + 2}`);
  }
};

// Handle the 'previous' button click
const handlePreviousClick = () => {
  if (currentIndex > 0) {
    setCurrentIndex(currentIndex - 1);
    navigate(currentIndex === 1 ? '/blog' : `/blog/page/${currentIndex}`);
  }
};



return (
  <Layout>
    <div className="container py-4">
      <h1 className="pt-24 text-2xl font-bold mb-6">Blog Archive</h1>
      <ul className="py-10 md:grid md:grid-cols-2 xl:grid-row-3 xl:grid-cols-3 md:gap-10">
        {posts.map(post => (
          <li key={post.id} className="mb-8">
            <Link to={`/blog/${post.slug}`}>
              {post.featuredImage && (
                <GatsbyImage
                  image={getImage(post.featuredImage)}
                  alt={post.title}
                />
              )}
              <h2 className="text-xl font-semibold mt-2">{post.title}</h2>
              <p>{format(new Date(post.updatedAt), 'd MMMM yyyy')}</p>
              <p>{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>

      <div className="pagination">
        {currentIndex > 0 && ( // Render "Previous" button only if not on the first page
          <button onClick={handlePreviousClick} className='pr-2'>
             Prev
          </button>
        )}
        {Array.from({ length: numPages }).map((_, index) => (
          <Link
            className='pr-2'
            key={index}
            to={index === 0 ? '/blog' : `/blog/page/${index + 1}`}
            activeClassName={index + 1 === currentPage ? 'active' : ''}
          >
            {index + 1}
          </Link>
        ))}
        {currentIndex < numPages - 1 && ( // Render "Next" button only if not on the last page
          <button onClick={handleNextClick}>
            Next
          </button>
        )}
      </div>
    </div>
  </Layout>
);

};

export const query = graphql`
query BlogArchiveQuery($skip: Int, $limit: Int) {
  allContentfulBasicBlogPost(
    sort: {updatedAt: DESC}
    limit: $limit
    skip: $skip
  ) {
    nodes {
      category
      title
      slug
      id
      updatedAt
      featuredImage {
        gatsbyImageData
      }
    }
  }
}
`;

export default BlogArchiveTemplate;
