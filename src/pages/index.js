import React from 'react';
import styled from 'styled-components';
import WebsiteProjects from '../components/staticComponents/WebsiteProjects';
import CaseStudiesList from '../components/staticComponents/CaseStudiesList';

import SEO from '../components/utils/SEO';
import SocialProfiles from '../components/utils/SocialProfiles';
import IndexPageStyles from '../styles/componentStyles/IndexPageStyles';
import BlogPostsList from '../components/staticComponents/BlogPostsList';

const Index = (props) => {
  if (!props) return null;

  return (
    <IndexPageStyles id="main" className="main-parent">
      <SEO />
      <section className="hero-container">
        <div className="hero-header-parent">
          <h1 className="hero-header-h1--style hero-header-h1--layout">
            Front-End Developer and Designer Freelancing in Auckland, New
            Zealand
            {/* <DecoDots
            style="box-sizing: content-box;"
            className="decoration-dots-header--layout decoration-dots--color"
          />  */}
          </h1>
        </div>
        <div className="hero-children-container">
          <SocialProfiles />
          <div className="hero-bio--layout">
            <p className=" large-paragraph-text">
              Hello, I’m Jason. I'm a Front-End Developer and Designer focused
              on websites and design-systems. That can include designing them,
              building them, testing them and getting them in front of people
              for New Zealand businesses.
            </p>
            <p className=" large-paragraph-text">
              I run a Design and Development Studio,{' '}
              <a href="https://lodestone.studio">Lodestone Studio</a>, focused
              on Financial and Professional Services Companies and NZ Tech
              Companies.
            </p>
            <p className=" large-paragraph-text">
              For technical details, I focus on using React with Gatsby, Prismic
              CMS for content and Styled-Components or CSS with BEM for styling
              as needed. Overarching this — I priotise accessibility and
              performance as much as possible.
            </p>
          </div>
        </div>
      </section>

      <hr />

      <section className="work-list-container" id="work">
        <h2 className="work-title">Website Projects</h2>
        {/* <ul className="work-list-container">
          <WorkList v-for="edge in $page.allWork.edges" :key="edge.node.id" :work="edge.node" />
        </ul> */}

        {/* <WebsiteProjects className="work-list-container" /> */}
        <WebsiteProjects className="work-list-container" />
      </section>

      <hr />

      <section className="work-list-container" id="work">
        <h2 className="work-title">Design Case Studies</h2>
        {/* <ul className="work-list-container">
        </ul> */}
        {/* <WorkList v-for="edge in $page.allWork.edges" :key="edge.node.id" :work="edge.node" /> */}
        <CaseStudiesList className="work-list-container" />
      </section>

      <hr />

      <section className="quote-container">
        <h2 className="h2-section-title">Kind words from past colleagues</h2>
        <div>
          <blockquote className="quote-item">
            <p>
              <span className="block-quote-callout">“</span>Jason has a creative
              but practical out of the box way of thinking and to top it off, a
              relaxed demeanor that makes you naturally feel at ease around him.
              <span className="block-quote-close">”</span>
            </p>
            <footer>
              <cite className="quote-name--style">Dini Paranagama</cite>
              <div className="quote-details-text--layout">
                <span>
                  Digital Product Manager at IAG Insurance, NZ,
                  <a href="https://www.linkedin.com/in/dini-paranagama">
                    LinkedIn
                  </a>
                </span>
              </div>
            </footer>
          </blockquote>

          <blockquote className="quote-item">
            <p>
              <span className="block-quote-callout">“</span>When I think about
              Jason I think of his wealth of knowledge and intellect.
            </p>
            <p>
              He automatically creates a safe space to share, learn and
              collaborate; inviting others opinions before his own, Jason
              actively asks questions to understand the ‘why’ and seeks to see
              things from a different perspective.
            </p>
            <p>
              Jason has a creative yet pragmatic approach & you can rely on him
              to stand up for what’s right.
              <span className="block-quote-close">”</span>
            </p>
            <footer>
              <cite className="quote-name--style">Natalie van Baarlen</cite>
              <div className="quote-details-text--layout">
                <span>
                  Customer Experience Design Lead at IAG Insurance, NZ,
                  <a href="https://www.linkedin.com/in/natalie-van-baarlen-60ab73107">
                    LinkedIn
                  </a>
                </span>
              </div>
            </footer>
          </blockquote>
        </div>
      </section>

      <hr />

      <section className="latest-posts-container">
        <h2 className="h2-section-title">Latest Dribbble Shots</h2>
        {/* <DribbbleGallery /> */}
      </section>

      <hr />

      <section className="latest-posts-container">
        <h2 className="h2-section-title">Latest Blog Posts</h2>
        <ul className="posts index-blog-list-title--style">
          {/* <PostList
            v-for="edge in $page.allPost.edges.slice(0, 3)"
            :key="edge.node.id"
            :post="edge.node"
          /> */}
        </ul>
        <BlogPostsList className="work-list-container" />
      </section>
    </IndexPageStyles>
  );
};

export default Index;
