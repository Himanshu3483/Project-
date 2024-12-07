import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo-container">
          <img
            src="https://via.placeholder.com/40"
            alt="Sahayata Logo"
            className="logo"
          />
          <span className="logo-text">Sahayata</span>
        </Link>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <nav className={`main-nav ${isMenuOpen ? "is-open" : ""}`}>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
          <Link to="/login" className="nav-link">
            Login
          </Link>
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
