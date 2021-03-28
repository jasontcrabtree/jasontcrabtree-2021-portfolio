import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const WorkListItemStyles = styled.li`
  .card-details {
    padding: 20px;
    margin: auto 0;
  }

  .cover-image {
    /* Internal shadow */
    box-shadow: var(--shadow-extra-small);
    border-radius: 8px 8px 0 0;
  }

  .cover-image {
    width: auto;
  }

  .card-details > * {
    margin-bottom: var(--size-16);
  }

  *:last-child {
    padding-bottom: 32px;
  }

  a:any-link {
    text-decoration: none;
    color: var(--text-black);
  }

  .card-title {
    color: var(--primary-blue);
  }

  .card-link {
    text-decoration: underline;
    color: var(--primary-link);
    font-weight: bold;
  }

  .date--style {
    color: var(--subheading-black-blue);
    text-transform: uppercase;
    font-weight: 500;
  }

  @media screen and (max-width: 960px) {
    margin: 32px 0px;

    max-width: fit-content;
    max-width: -moz-max-content; /* Firefox/Gecko */
    max-width: -webkit-max-content; /* Chrome */
    padding: 0px;

    .card-title {
      font-size: var(--size-24);
    }
  }
`;

function WorkListItem({ title, image, description, date, timeToRead, slug }) {
  return (
    <WorkListItemStyles className="work-list-card">
      <Link to={slug} className="read">
        <img src={image} alt={title} className="cover-image" />
        <div className="card-details">
          <h2 className="card-title">{title}</h2>
          <span className="date--style">Project Date: {date}</span>
          {/* <p className="date">{date}</p> */}
          <p className="description">{description}</p>
          <span>{timeToRead} min read</span> •{' '}
          <span className="card-link">View case study</span>
        </div>
      </Link>
    </WorkListItemStyles>
  );
}

function WorkListParent(props) {
  const data = useStaticQuery(graphql`
    query allMdxLinks {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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

  console.log(data, props);

  const workItems = data.allMdx.nodes;

  console.log(workItems);
  return (
    <ul className="work-list-container">
      {workItems.map((item, i) => (
        <WorkListItem
          key={i}
          title={item.frontmatter.title}
          image={item.frontmatter.image}
          description={item.frontmatter.description}
          date={item.frontmatter.date}
          timeToRead={Math.round(item.timeToRead * 0.8)}
          slug={`work/${item.slug}`}
        />
      ))}
    </ul>
  );
}

export default WorkListParent;
