// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-section">
        <img src="src/assets/foodimage.png" alt="Logo" className="logo" />
        <span className="name">Sujeet Vishwas</span>
      </div>

      <div className="center-section">
        <ul className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="right-section">
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
