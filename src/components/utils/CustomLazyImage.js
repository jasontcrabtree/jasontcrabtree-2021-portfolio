import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import React from 'react';

function CustomLazyImage({ alt, src, effect, height, width, placeholder }) {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      effect={effect || 'blur'}
      height={height}
      width={width}
      placeholder={placeholder}
    />
  );
}

export default CustomLazyImage;
