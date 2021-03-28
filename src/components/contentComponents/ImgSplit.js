import React from 'react';
import styled from 'styled-components';

const ImgSplitStyles = styled.section`
  figcaption {
    font-style: italic;
  }

  @media screen and (min-width: 960px) {
    display: inline-flex;
    flex-direction: row;

    justify-content: flex-start;

    padding: 20px;

    .split-figure:first-child {
      margin-left: -9.6%;
    }

    figure {
      width: 40vw;
    }

    figure:first-of-type {
      margin-right: 20px;
    }

    div {
      margin-top: var(--size-16);
    }
  }
`;

function ImgSplit({
  imgSrcLeft,
  imgAltLeft,
  captionLeft,
  imgSrcRight,
  imgAltRight,
  captionRight,
}) {
  return (
    <ImgSplitStyles>
      <figure>
        <img src={imgSrcLeft} alt={imgAltLeft} />
        <figcaption>{captionLeft}</figcaption>
      </figure>
      <figure>
        <img src={imgSrcRight} alt={imgAltRight} />
        <figcaption>{captionRight}</figcaption>
      </figure>
    </ImgSplitStyles>
  );
}

export default ImgSplit;
