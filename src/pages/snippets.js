import React from 'react';
import styled from 'styled-components';
import SnippetsList from '../components/staticComponents/SnippetsList';

const SnippetsPageStyles = styled.main`
  display: grid;
  grid-column: 1 / 9;
  gap: 24px;
`;

function SnippetsPage() {
  return (
    <SnippetsPageStyles>
      <h1>Snippets</h1>
      <SnippetsList />
    </SnippetsPageStyles>
  );
}

export default SnippetsPage;
