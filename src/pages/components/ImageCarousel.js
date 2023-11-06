import React, { useState, useRef } from 'react';
import { useStaticQuery, graphql, Link } from "gatsby";

export default function ImageCarousel() {
  const data = useStaticQuery (graphql`
    query ImageCarousel {
      allMarkdownRemark(limit: 4, filter: {frontmatter: {featuredPost: {eq: true}}}) {
        nodes {
          frontmatter {
            date
            slug
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
              }
            }
          }
          id
          excerpt(pruneLength: 30)
        }
      }
    }`
  )

  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);

  const nextSlide = () => {
    setActiveIndex((activeIndex + 1) % data.allMarkdownRemark.nodes.length);
  };

  const prevSlide = () => {
    setActiveIndex((activeIndex - 1 + data.allMarkdownRemark.nodes.length) % data.allMarkdownRemark.nodes.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current) {
      const touchEndX = e.changedTouches[0].clientX;
      const deltaX = touchEndX - touchStartX.current;
      const swipeThreshold = 50; // Adjust this value to control the swipe sensitivity

      if (deltaX > swipeThreshold) {
        prevSlide();
      } else if (deltaX < -swipeThreshold) {
        nextSlide();
      }

      touchStartX.current = null;
    }
  };

  const featuredImage = data.allMarkdownRemark.nodes[activeIndex].frontmatter.featuredImage.childImageSharp.gatsbyImageData.images.fallback.src;
  const title = data.allMarkdownRemark.nodes[activeIndex].frontmatter.title;
  const slug = data.allMarkdownRemark.nodes[activeIndex].frontmatter.slug;

  return (
    <section>
      <div
        className="relative h-[90vh] xl:h-screen"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="absolute w-full h-full bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: `url(${featuredImage})` }}>
          <div className="absolute linear-background h-full w-full"></div>
          <div className="m-container">
            <Link to={slug}>
              <h3 className='font-primary w-[90%] font-medium text-2xl xl:text-4xl xl:w-[60%] absolute bottom-14 xl:bottom-8 z-10 text-white'>{title}</h3>
            </Link>
          </div>
          <div className="absolute right-6 bottom-4 xl:bottom-8 xl:right-8">
            {data.allMarkdownRemark.nodes.map((node, index) => (
              <span
                key={node.id}
                onClick={() => setActiveIndex(index)}
                className={`w-4 h-4 mx-2 rounded-full inline-block cursor-pointer border ${
                  activeIndex === index ? 'bg-white' : ''
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
