import React from 'react';
import NavLinks from './NavLinks';
import './header.css'; 

function Header() {
  return (
    <header className="header-container">
      <div className="logo-wrapper">
        <img 
          src="/logo.svg" 
          alt="Erased Tapes Logo" 
          className="header-logo" 
        />
      </div>
      <nav className="header-nav">
        <NavLinks />
      </nav>
    </header>
  );
}

export default Header;