import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import CustomLazyImage from '../components/utils/CustomLazyImage.js';
import SEO from '../components/utils/SEO.js';

const BlogPostTemplateStyles = styled.div`
  .blog-post-type {
    -webkit-font-smoothing: antialiased;
    text-rendering: geometricPrecision;
    font-weight: 400;
  }

  aside {
    margin: 1.5rem 0px;
  }

  h1 {
    font-family: 'p22-mackinac-pro', Georgia, serif;
    font-weight: 800;
  }

  grid-row-start: 3;
  grid-column: 1 / -1;
  margin: 0px;
  max-width: 34rem;
  width: auto;

  .blog-post--layout {
    grid-row-start: 3;
    grid-column: 1 / -1;
    margin: 0px;
    max-width: 34rem;
    width: auto;
  }

  .post-title-container {
    margin: 16px 0;
    padding-top: 8px;
  }

  .blog-post-title--style {
    font-weight: 900;
  }

  .post-container > ol > li,
  .post-container ul > li {
    padding-bottom: var(--size-8);
  }

  @media screen and (max-width: 960px) {
    p {
      max-width: 48ch;
      width: auto;
    }

    article {
      margin-bottom: 96px;
    }

    .blog-post-title--style {
      font-size: var(--size-32);
    }

    grid-row-start: 2;
    grid-column: 1;
  }

  @media screen and (min-width: 920px) {
    .blog-post-title--style {
      font-size: var(--size-48);
    }
  }
`;

export const blogPostQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      timeToRead
      frontmatter {
        title
        description
        date(formatString: "D MMMM YYYY")
      }
    }
  }
`;

const shortcodes = { CustomLazyImage };

function BlogPosts({ data: { mdx } }) {
  return (
    <BlogPostTemplateStyles>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description}
      />
      <main className="blog-post--layout blog-post-type">
        <br />
        <Link to="/blog" className="link">
          &larr; Blog
        </Link>{' '}
        <span>/ {mdx.frontmatter.title}</span>
        <div className="post-title-container">
          <h1 className="blog-post-title--style">{mdx.frontmatter.title}</h1>
        </div>
        <aside>
          <span className="date-style">
            {mdx.frontmatter.date} | {mdx.timeToRead} min read time
          </span>
        </aside>
        <article className="post-container">
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </article>
      </main>
    </BlogPostTemplateStyles>
  );
}

export default BlogPosts;
