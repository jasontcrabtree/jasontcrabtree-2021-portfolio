import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styledComponentsCjs from 'styled-components';

const SnippetsPageStyles = styledComponentsCjs.main`
  display: grid;
  grid-column: 1 / 9;
`;

function BlogPostCard({
  title,
  description,
  date,
  timeToRead,
  slug,
  cardWithDescription,
}) {
  return (
    <div className="work-list-card">
      <Link to={slug} className="read">
        <div className="card-details">
          <p className="date--style">Published: {date}</p>
          <h2 className="card-title">{title}</h2>
          {cardWithDescription && <p className="description">{description}</p>}
          <span>
            {timeToRead} min read •{' '}
            <span className="card-link">Read Blog Post</span>
          </span>
        </div>
      </Link>
    </div>
  );
}

function SnippetsPage() {
  const data = useStaticQuery(graphql`
    query allSnippets {
      allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { type: { ne: "case-study" } } }
      ) {
        nodes {
          slug
          timeToRead
          frontmatter {
            title
            image
            description
            date(formatString: "D MM YYYY")
          }
        }
      }
    }
  `);

  return (
    <SnippetsPageStyles>
      <h1>Snippets</h1>
      <div>Many snippets</div>
    </SnippetsPageStyles>
  );
}

export default SnippetsPage;
