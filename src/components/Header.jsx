import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Recipe Manager</h1>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/recipe">Recipes</Link>
            </li>
            <li>
              <Link to="/add">Add Recipe</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
