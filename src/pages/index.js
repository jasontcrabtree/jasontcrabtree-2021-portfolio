import React from 'react';
import styled from 'styled-components';
import SEO from '../components/globalComponents/SEO';

const HeroHeader = styled.h1`
  font-weight: 400;
  letter-spacing: -0.4px;
`;

const index = (props) => {
  if (!props) return null;

  return (
    <main id="main">
      <SEO />
      <HeroHeader>Hello Lodestone Studio!</HeroHeader>
      <p>
        Lodestone Studio is a design and development firm focusing on financial
        and professional services companies, operating out of Auckland, New
        Zealand.
      </p>
    </main>
  );
};

export default index;
