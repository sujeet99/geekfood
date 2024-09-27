
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="/logo.png" alt="Logo" className="logo" />
        <span className="footer-name">Meditation Life</span>
      </div>
      
      <div className="footer-paragraph">
        <p>Your journey towards a peaceful life starts here. Join us in discovering calm through meditation and mindfulness.</p>
      </div>

      <div className="social-icons">
        <a href="#" className="social-icon">
          <img src="/facebook-icon.png" alt="Facebook" />
        </a>
        <a href="#" className="social-icon">
          <img src="/twitter-icon.png" alt="Twitter" />
        </a>
        <a href="#" className="social-icon">
          <img src="/instagram-icon.png" alt="Instagram" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
