import { Link } from 'gatsby';
import React from 'react';

const GlobalNav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/404">404</Link>
      </li>
    </ul>
  </nav>
);

export default GlobalNav;
