import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import { format } from 'date-fns';

const Blog = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.nodes;
  const { numPages, currentPage } = pageContext;
  console.log( numPages )


  return (
    <Layout>
      <div className="container py-4">
        <h1 className="pt-24 text-2xl font-bold mb-6">Blog Archive</h1>
        <ul className="py-10 md:grid md:grid-cols-2 xl:grid-row-3 xl:grid-cols-3 md:gap-10">
          {posts.map(post => (
            <li key={post.id} className="mb-8">
              <Link to={`/blog/${post.frontmatter.slug}`}>
                {post.frontmatter.featuredImage && (
                  <GatsbyImage
                    image={getImage(post.frontmatter.featuredImage)}
                    alt={post.frontmatter.title}
                  />
                )}
                <h2 className="text-xl font-semibold mt-2">{post.frontmatter.title}</h2>
                <p>{format(new Date(post.frontmatter.date), 'd MMMM yyyy')}</p>
                <p>{post.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="pagination">

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
          {currentPage < numPages && (
            <Link
              to={`/blog/page/${currentPage + 1}`}
            >
              Next
            </Link>
          )}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogArchiveQuery($limit: Int) {
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit:   
  $limit) {
      nodes {
        frontmatter {
          date
          slug
          title
          featuredImage {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder:    
  BLURRED, formats: [AUTO, WEBP])
            }
          }
        }
        id
        excerpt(pruneLength: 30)
      }
    }
  }
`;

export default Blog;
