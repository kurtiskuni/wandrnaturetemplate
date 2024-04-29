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
      <section
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
      </section>
      <section className='m-container xl:flex'>
        <div className="blog py-8 xl:py-14 mx-auto xl:w-[60%]">
          <div dangerouslySetInnerHTML={{ __html: markdownContent }} />
        </div>
        <div className='xl:w-[30%] my-14'>
          <div className='px-6 py-4 bg-[#151E1E] text-white rounded-2xl'>
            <h5 className='font-primary font-semibold text-xl pb-1'>Table of contents</h5>
            <ol className='font-light text-sm'>
              <li className='py-1 border-b border-[#293C3D]'>Introduction</li>
              <li className='py-1 border-b border-[#293C3D]'>Day 1 - Lake Bled - Vintgar Gorge, Lake Bled Circuit Walk & Viewpoint</li>
              <li className='py-1 border-b border-[#293C3D]'>Day 2 - Lake Bohinj - Mostnica Gorge Walk</li>
              <li className='py-1 border-b border-[#293C3D]'>Day 3 - Seven Lakes Valley Day Walk</li>
              <li className='py-1 border-b border-[#293C3D]'>Day 4 - Triglav Summit</li>
              <li className='py-1 border-b border-[#293C3D]'>Day 5 - Triglav Decent</li>
              <li className='py-1 border-b border-[#293C3D]'>Day 6 - Soca River Walk</li>
              <li className='py-1 border-b border-[#293C3D]'>Day 7 - Mojstrana to Ljubujana</li>
              <li className='py-1 border-b border-[#293C3D]'>Day 8 - Mojstrana to Ljubujana</li>
              <li className='py-1 border-b border-[#293C3D]'>Day 9 - Mojstrana to Ljubujana</li>
              <li className='py-1 border-b border-[#293C3D]'>Day 10 - Mojstrana to Ljubujana</li>
              <li className='py-1 border-b border-[#293C3D]'>Day 11 - Mojstrana to Ljubujana</li>
              <li className='py-1 border-b border-[#293C3D]'>Day 12 - Mojstrana to Ljubujana</li>
              <li className='py-1 border-b border-[#293C3D]'>Day 13 - Mojstrana to Ljubujana</li>
              <li className='py-1 border-b border-[#293C3D]'>Day 14 - Mojstrana to Ljubujana</li>
            </ol>
          </div>
        </div>
      </section>
      <section className='bg-[#151E1E] text-white relative'>
        <img className="absolute w-[1.5rem] right-2 bottom-2 xl:right-6 xl:top-6 xl:w-[2rem]" src="/side-logo.svg" alt="" />
          <div className="m-container py-40 pt-16 xl:py-36">
            <div className='md:w-[60%] xl:w-[50%]'>
              <h2 className='font-primary text-2xl xl:text-4xl mb-6'>Want exclusive information about our upcoming itineraries and unique trip ideas?</h2>
              <p className='mb-6 text-lg'>Join our value packed newsletter</p>
              <input type="text" name="" id="" placeholder='Enter your name' className='block w-full mb-2 text-sm rounded-md bg-transparent border border-[#679698] py-1 px-2 placeholder-primary::placeholder' />
              <input type="text" name="" id="" placeholder='Enter your email' className='block w-full text-sm mb-4 rounded-md bg-transparent border border-[#679698] py-1 px-2' />
              <button type="submit" className='mb-2 w-[118px] h-[30px] bg-[#679698] rounded-lg text-sm'>Give it to me</button>
            </div>

            </div>
        </section>
        <div className="blog m-container xl:w-[750px] py-14 mx-auto">
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
