import React from 'react';
import './Header.css';

function Header({ selectedCategory, onSelectCategory }) {
  const categories = ['Action', 'Comedy', 'Romance', 'Drama'];

  return (
    <header className="site-header">
      <div className="header-container">
        <h1 className="logo">watch.it</h1>
        
        <nav className="nav-menu">
          {categories.map((category) => (
            <button
              key={category}
              className={`nav-item ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => onSelectCategory(category === selectedCategory ? 'All' : category)}
            >
              {category}
            </button>
          ))}
        </nav>

        <button className="search-button">
          SEARCH
        </button>
      </div>
    </header>
  );
}

export default Header;