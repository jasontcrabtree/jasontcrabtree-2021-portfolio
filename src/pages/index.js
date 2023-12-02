import React from 'react';
import WebsiteProjects from '../components/staticComponents/WebsiteProjects';
import CaseStudiesList from '../components/staticComponents/CaseStudiesList';

import SEO from '../components/utils/SEO';
import SocialProfiles from '../components/utils/SocialProfiles';
import IndexPageStyles from '../styles/componentStyles/IndexPageStyles';
import BlogPostsList from '../components/staticComponents/BlogPostsList';
import DribbbleGallery from '../components/staticComponents/DribbbleGallery';
import ColleagueQuotes from '../components/staticComponents/ColleagueQuotes';

const Index = (props) => {
  if (!props) return null;

  return (
    <IndexPageStyles id="main" className="main-parent">
      <SEO />
      <section className="hero-container" id="hero">
        <div className="hero-header-parent">
          <h1 className="hero-header-h1--style hero-header-h1--layout">
            Front-End Developer and Designer in Auckland, New Zealand
            {/* <DecoDots
            style="box-sizing: content-box;"
            className="decoration-dots-header--layout decoration-dots--color"
          />  */}
          </h1>
        </div>
        <div className="hero-children-container">
          <SocialProfiles />
          <div className="hero-bio--layout">
            <p className="large-paragraph-text">
              Hello, I’m Jason. I'm a Front-End Developer and Designer focused
              on making great websites and design-systems.
            </p>
            <p className="large-paragraph-text">
              {/* I run a Design and Development Studio,{' '}
              <a href="https://lodestone.studio">Lodestone Studio</a>, focused
              on NZ Financial and Professional Services Companies. */}
            </p>
            <p className="large-paragraph-text">
              I'm a big fan of using modern JavaScript tools for websites and
              webapps, and I'm currently learning to use tools like TypeScript,
              Prisma, Postgres and Hasura. When working with these tools I do my
              best to follow best practices in accessibility, performance,
              responsiveness, and security.
            </p>
          </div>
        </div>
      </section>

      <hr />

      <section className="work-list-container" id="code">
        <h2 className="work-title">Website Projects</h2>
        <WebsiteProjects className="work-list-container" />
      </section>

      <hr />

      {/* <section className="latest-posts-container">
        <h2 className="h2-section-title">Latest Blog Posts</h2>
        <BlogPostsList className="work-list-container" paginationLimit="3" />
      </section>

      <hr />

      <section className="work-list-container" id="design">
        <h2 className="work-title">Design Case Studies</h2>
        <CaseStudiesList className="work-list-container" />
      </section>

      <hr /> */}

      <section className="quote-container">
        <h2 className="h2-section-title">Kind words from past colleagues</h2>
        <ColleagueQuotes />
      </section>

      {/* <hr />

      <section className="latest-posts-container">
        <h2 className="h2-section-title">Latest Dribbble Shots</h2>
        <DribbbleGallery />
      </section> */}
    </IndexPageStyles>
  );
};

export default Index;
