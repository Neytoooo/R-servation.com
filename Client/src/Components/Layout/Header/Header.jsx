import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div><h1>Voyanage</h1></div>
      <nav className="navigation">
        <Link to="/destinations" className="nav-item">Destination</Link>
        <Link to="/accommodations" className="nav-item">Hebergements</Link>
        <Link to="/expenses" className="nav-item">Depense</Link>
      </nav>
      <div className="auth-buttons">
        <Link to="/login" className="login-button">Login</Link>
        <Link to="/register" className="register-button">Register</Link>
      </div>
    </header>
  );
}

export default Header;
