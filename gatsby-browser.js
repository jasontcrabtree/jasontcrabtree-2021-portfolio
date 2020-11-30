/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import GlobalLayout from './src/components/GlobalLayout';

export function wrapPageElement({ element, props }) {
  return <GlobalLayout {...props}>{element}</GlobalLayout>;
}
