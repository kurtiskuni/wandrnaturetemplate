import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { getImage } from 'gatsby-plugin-image';
import '../styles/blog.css';

export const Head = ({data}) => {
  const post = data.contentfulBasicBlogPost;

  return <>
      <meta charSet="utf-8" />
      <title>{post.title}</title>
      <meta 
        name="description"
        content={post.title}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  </>
}

const blogPostTemplate = ({ data }) => {
  console.log(data)
  const post = data.contentfulBasicBlogPost;
  const featuredImage = getImage(post.featuredImage);
  const markdownContent = post.content.childMarkdownRemark.html;

  return (
    <Layout>
      <div
        className="bg-cover bg-bottom bg-no-repeat h-screen flex flex-col justify-end xl:bg-center"
        style={{ backgroundImage: `url(${featuredImage.images.fallback.src})` }}
      >
        <div className="absolute linear-background h-full w-full"></div>
        <div className="m-container mb-8 xl:mb-12 xl:w-[66%]">
          <div className="relative text-white">
            <h1 className="font-primary font-medium text-2xl xl:text-4xl z-10">{post.title}</h1>
            {/* <p>{post.updatedAt}</p> */}
          </div>
        </div>
      </div>
      <div className="blog m-container lg:w-[750px] py-14 mx-auto">
        <div dangerouslySetInnerHTML={{ __html: markdownContent }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String) {
    contentfulBasicBlogPost(slug: { eq: $slug }) {
      content {
        childMarkdownRemark {
          html
        }
      }
      featuredImage {
        gatsbyImageData
      }
      slug
      title
      updatedAt(formatString: "MMMM DD, YYYY")
    }
  }
`;

export default blogPostTemplate;
