import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const CaseStudyTemplateStyles = styled.div`
  grid-column: 2 / 9;

  .work-post-parent--layout {
    grid-column: 2 / 9;
  }

  .work-container {
    display: grid;
    grid-column: 2 / 9;
  }

  .work-title-container > * {
    margin: 16px 0px;
  }

  .work-container > ol,
  .work-container > ul {
    padding-inline-start: 24px;
  }

  .work-container > ol > *,
  .work-container > ul > * {
    padding-bottom: var(--size-8);
  }

  img {
    border: 1px solid var(--grey-200);
  }

  article > * + * {
    margin-top: 1.4em;
  }

  .split-title {
    margin-top: 2rem;
    margin-bottom: -1rem;
  }

  @media screen and (max-width: 960px) {
    .work-title--style {
      font-size: var(--size-32);
    }
  }
`;

export const caseStudiesQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`;

function CaseStudies({ data: { mdx } }) {
  return (
    <CaseStudyTemplateStyles>
      <main className="work-post-parent--layout">
        <br />
        <Link to="/" className="link">
          &larr; Go Back
        </Link>

        <div className="work-title-container">
          <h1 className="work-title--style">{mdx.frontmatter.title}</h1>
        </div>

        <article className="work-container">
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </article>
      </main>
    </CaseStudyTemplateStyles>
  );
}

export default CaseStudies;
