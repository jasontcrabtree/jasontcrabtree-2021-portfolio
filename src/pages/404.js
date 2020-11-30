import React from 'react';

const PageNotFound = (props) => {
  if (!props) return null;

  return (
    <main id="main">
      <h1>404 Page</h1>
      <p>Missing page</p>
    </main>
  );
};

export default PageNotFound;
