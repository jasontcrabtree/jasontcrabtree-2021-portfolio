import React from 'react';
import styled from 'styled-components';
import SEO from '../components/globalComponents/SEO';

const HeroHeader = styled.h1`
  color: slateblue;
`;

const index = (props) => {
  console.log('Hello');

  return (
    <main id="main">
      <SEO />
      <HeroHeader>Hello Lodestone Studio!</HeroHeader>
    </main>
  );
};

export default index;
