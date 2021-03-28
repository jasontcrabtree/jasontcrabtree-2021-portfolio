import React from 'react';
import styled from 'styled-components';

const FigmaPrototypeStyles = styled.iframe`
  width: 100%;
  min-height: 640px;
  border: none;
`;

function FigmaPrototypeEmbed({ figmaEmbedSrc, figmaEmbedTitle }) {
  return (
    <FigmaPrototypeStyles
      src={figmaEmbedSrc}
      title={figmaEmbedTitle}
      frameBorder="0"
      allowFullScreen
    />
  );
}

export default FigmaPrototypeEmbed;
