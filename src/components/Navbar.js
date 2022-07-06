import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <header className="header">
    <Link className="logo" to="/">
      Math Magicians
    </Link>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
