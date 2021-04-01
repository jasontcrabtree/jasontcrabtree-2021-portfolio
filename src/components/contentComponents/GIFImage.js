import React from 'react';
import CustomLazyImage from '../utils/CustomLazyImage';

function GIFImage({ gifSrc, gifAlt }) {
  return <CustomLazyImage src={gifSrc} alt={gifAlt} />;
}

export default GIFImage;
