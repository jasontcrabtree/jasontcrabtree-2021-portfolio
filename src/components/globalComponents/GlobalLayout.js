import React from 'react';

import '../../styles/globalStyles/reset.css';
import '../../styles/globalStyles/globalDesignTokens.css';
import '../../styles/globalStyles/globalStyles.css';
import '../../styles/globalStyles/globalType.css';

import GlobalFooter from './GlobalFooter';
import GlobalNav from './GlobalNav';
import SEO from './SEO';
import SkipLink from './SkipLink';

const GlobalLayout = (props) => {
  if (!props) return null;
  const { title, image, location, children } = props;

  return (
    <>
      <SEO image={image} title={title} location={location.pathname} />
      <SkipLink />
      <GlobalNav />
      <>{children}</>
      <GlobalFooter />
    </>
  );
};

export default GlobalLayout;
