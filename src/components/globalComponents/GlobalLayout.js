import React from 'react';

import '../../styles/reset.css';
import GlobalFooter from './GlobalFooter';
import GlobalNav from './GlobalNav';
import SEO from './SEO';
import SkipLink from './SkipLink';

const GlobalLayout = (props) => {
  if (!props) return null;
  const { title, image, location, children } = props;

  return (
    <>
      {/* <SEO image={image} title={title} location={location.pathname} /> */}
      {/* <SkipLink /> */}
      {/* <GlobalNav /> */}
      <>{children}</>
      {/* <GlobalFooter /> */}
    </>
  );
};

export default GlobalLayout;
