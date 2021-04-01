import React from 'react';
import styled from 'styled-components';
import CustomLazyImage from '../utils/CustomLazyImage';

const ImgLeftStyles = styled.figure`
  figcaption {
    font-style: italic;
  }

  @media screen and (min-width: 960px) {
    .img-container-left {
      margin-left: -15%;
      width: 48vw;
    }
  }
`;

function ImgLeft({ imgSrc, imgAlt, caption }) {
  return (
    <ImgLeftStyles>
      <CustomLazyImage src={imgSrc} alt={imgAlt} />
      <figcaption>{caption}</figcaption>
    </ImgLeftStyles>
  );
}

export default ImgLeft;
