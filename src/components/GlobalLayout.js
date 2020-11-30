import React from 'react';

import SEO from './SEO';
import '../styles/reset.css';

const GlobalLayout = (props) => {
  if (!props) return null;
  const { title, image, location, children } = props;

  return (
    <>
      <SEO image={image} title={title} location={location.pathname} />
      <>{children}</>
    </>
  );
};

export default GlobalLayout;
