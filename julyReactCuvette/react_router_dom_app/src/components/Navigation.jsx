import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ isAuthenticated, onLogout }) => {
  const location = useLocation();
  
  return (
    <nav className="main-nav">
      <div className="nav-brand">
        <Link to="/">RouterApp</Link>
      </div>
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        {isAuthenticated ? (
          <>
            <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>Dashboard</Link>
            <Link to="/user/profile" className={location.pathname.startsWith('/user') ? 'active' : ''}>User</Link>
            <button onClick={onLogout} className="logout-btn">Logout</button>
          </>
        ) : (
          <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navigation;