import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import '../styles/blog.css';

const blogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const featuredImage = getImage(post.frontmatter.featuredImage);

  return (
    <Layout>
      <div
        className="bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-end"
        style={{ backgroundImage: `url(${featuredImage.images.fallback.src})` }}
      >
        <div className="absolute linear-background h-full w-full"></div>
        <div className="container lg:w-[700px] mb-8">
          <div className="relative text-white">
            <h1 className="text-3xl z-10">{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
          </div>
        </div>
      </div>
      <div className="container lg:w-[700px] py-20 mx-auto">
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
      }
      html
    }
  }
`;

export default blogPostTemplate;
