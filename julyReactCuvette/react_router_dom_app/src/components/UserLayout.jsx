import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const UserLayout = () => {
  const location = useLocation();
  
  return (
    <div className="page-container">
      <h1>User Account</h1>
      <div className="user-layout">
        <nav className="sidebar">
          <Link 
            to="profile" 
            className={location.pathname === '/user/profile' ? 'active' : ''}
          >
            Profile
          </Link>
          <Link 
            to="settings" 
            className={location.pathname === '/user/settings' ? 'active' : ''}
          >
            Settings
          </Link>
        </nav>
        <div className="user-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;