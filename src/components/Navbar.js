/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <header className="header">
    <Link className="logo" to="/">
      Math Magicians
    </Link>
    <nav>
      <ul>
        <Link to="/">
          <li>
            <a href="">Home</a>
          </li>
        </Link>
        <Link to="/calculator">
          <li>
            <a href="">Calculator</a>
          </li>
        </Link>
        <Link to="/quote">
          <li>
            <a href="">Quote</a>
          </li>
        </Link>
      </ul>
    </nav>
  </header>
);

export default Navigation;
