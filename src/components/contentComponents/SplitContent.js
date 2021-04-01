import React from 'react';
import styled from 'styled-components';
import CustomLazyImage from '../utils/CustomLazyImage';

const SplitContentStyles = styled.section`
  @media screen and (min-width: 960px) {
    display: flex;
    flex-direction: row;
    gap: 48px;

    width: 156%;

    article {
      width: 44%;
      padding-right: var(--size-40);
    }

    article > h3 {
      /* border-bottom: 4px solid var(--grey-200); */
      width: fit-content;
    }

    article > img {
      max-height: 16rem;
      width: auto;
    }
  }
`;

function SplitContent({
  left,
  leftTitle,
  leftImage,
  leftCaption,
  leftAlt,
  right,
  rightTitle,
  rightImage,
  rightCaption,
  rightAlt,
}) {
  return (
    <SplitContentStyles>
      {left && (
        <article>
          {leftTitle && <h3>{leftTitle}</h3>}
          {leftImage && <CustomLazyImage src={leftImage} alt={leftAlt} />}
          {leftCaption && <p>{leftCaption}</p>}
        </article>
      )}
      {right && (
        <article>
          {rightTitle && <h3>{rightTitle}</h3>}
          {rightImage && <CustomLazyImage src={rightImage} alt={rightAlt} />}
          {rightCaption && <p>{rightCaption}</p>}
        </article>
      )}
    </SplitContentStyles>
  );
}

export default SplitContent;
