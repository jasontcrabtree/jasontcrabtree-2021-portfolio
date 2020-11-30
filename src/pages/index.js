import React from 'react';
import SEO from '../components/SEO';

const index = (props) => {
  console.log(props);
  // SEO
  // const title = homePageContent.meta_title;
  // const description = homePageContent.meta_description;
  // const image = homePageContent.custom_page_meta_image.url;
  // const imageALT = homePageContent.custom_page_meta_image.alt;

  return (
    <>
      <SEO />
      <h1>Hello Lodestone Studio!</h1>
    </>
  );
};

export default index;
