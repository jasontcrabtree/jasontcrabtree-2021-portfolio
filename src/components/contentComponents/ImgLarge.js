import React from 'react';
import styled from 'styled-components';
import CustomLazyImage from '../utils/CustomLazyImage';

const ImgLargeStyles = styled.figure`
  figcaption {
    font-style: italic;
  }

  @media screen and (min-width: 960px) {
    margin: 40px 0px;
    margin-right: calc(-40vw + 61.9%);
  }
`;

function ImgLarge({ imgSrc, imgAlt, caption }) {
  return (
    <ImgLargeStyles>
      <CustomLazyImage src={imgSrc} alt={imgAlt} />
      <figcaption>{caption}</figcaption>
    </ImgLargeStyles>
  );
}

export default ImgLarge;
