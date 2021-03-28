import React from 'react';
import styled from 'styled-components';

const ImgRightStyles = styled.figure`
  figcaption {
    font-style: italic;
  }

  @media screen and (min-width: 960px) {
    .img-container-right {
      /* Moves image 50% to the right */
      /*   transform: translateX(50%); */
      margin-left: 40%;
      width: 48vw;
    }
  }
`;

function ImgRight({ imgSrc, imgAlt, caption }) {
  return (
    <ImgRightStyles>
      <img src={imgSrc} alt={imgAlt} />
      <figcaption>{caption}</figcaption>
    </ImgRightStyles>
  );
}

export default ImgRight;
