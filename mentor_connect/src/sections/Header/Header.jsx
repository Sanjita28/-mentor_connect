import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Make sure to create and style this
import logo from '../../assets/OIG3.png'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        {/* Logo Section */}
        <div className="icon">
        <Link to= "/Home"><img src={logo} alt="Mentor Connect Logo" /></Link>
      </div>
        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        {/* Links and Buttons */}
        <nav className="nav-links">
          <a href="/">Engineering Mentors</a>
          <a href="/">Design Mentors</a>
          <a href="/">Startup Mentors</a>
          <a href="/">Product Managers</a>
          <a href="/">Marketing Coaches</a>
          <a href="/">Leadership Mentors</a>
          <a href="/">Career Coaches</a>
          <a href="/">Top Mentors</a>
        </nav>
        <div className="actions">
          <button className="business-dropdown">For Businesses</button>
          <button className="browse-button">Browse all mentors</button>
          <div className="nav-links">
            {/* Login Link */}
            <Link to="/login" className="login-button">Login</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
