import React from 'react';
import NavLinks from './NavLinks';
import './Footer.css'; 



function Footer() {
  return (
    <footer className="footer-container">
      <nav className="footer-nav">
        <NavLinks />
      </nav>
      <p className="copyright-text">
        Copyright © 2023 Erased Disks Ltd.
      </p>
      <div className="footer-socials">
        <img src="/twitter-icon.svg" alt="Twitter" className="social-icon" />
        <img src="/instagram-icon.svg" alt="Instagram" className="social-icon" />
        <img src="/facebook-icon.png" alt="Facebook" className="social-icon" />
      </div>
    </footer>
  );
}

export default Footer;