import React from 'react';
import styled from 'styled-components';
import BlogPostsList from '../components/staticComponents/BlogPostsList';

const BlogPageStyles = styled.main`
  /* .pager-component--style {
    display: flex;
    justify-content: flex-start;
    justify-content: center;
    font-weight: 500;
  }

  .pager-component--style > * {
    text-decoration: none;
    padding: 4px 32px;
    border-radius: 4px;
    margin: 0px 16px;
  }

  .pager-component--style > .active {
    background: #3d36b2;
    color: white;
  }

  .pager-component--style > *:last-child {
    margin-right: 0px;
  } */

  grid-column: 2 / 9;

  header > * {
    margin-bottom: var(--size-32);
  }

  header,
  section {
    margin: var(--size-32) 0px;
  }

  li {
    margin-top: 48px;
  }
`;

function BlogPage(props) {
  console.log(props);
  return (
    <BlogPageStyles>
      <header>
        <h1>Personal Blog</h1>
        <p className="large-paragraph-text">
          A personal and professional blog by{' '}
          <a href="http://twitter.com/jasontcrabtree">@jasontcrabtree.</a> I
          write about learning Front-End Development, Product Design, Product
          Development and how they all tie together.
        </p>
      </header>

      <section className="blog-list-section--layout">
        <h2>Latest Posts:</h2>

        <BlogPostsList
          className="work-list-container"
          cardWithDescription
          paginationLimit="1000"
        />
      </section>
    </BlogPageStyles>
  );
}

export default BlogPage;
