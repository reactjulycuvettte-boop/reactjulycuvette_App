// components/Dashboard.js
import React from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

  // Programmatic navigation example
  const handleQuickAction = (action) => {
    switch(action) {
      case 'profile':
        navigate('/dashboard/profile?action=quick_access');
        break;
      case 'settings':
        navigate('/dashboard/settings?tab=privacy');
        break;
      default:
        navigate('/dashboard');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <h2>Dashboard</h2>
        <div className="nav-links">
          {/* Link components for navigation */}
          <Link 
            to="/dashboard/profile" 
            className={location.pathname === '/dashboard/profile' ? 'active' : ''}
          >
            Profile
          </Link>
          <Link 
            to="/dashboard/settings" 
            className={location.pathname === '/dashboard/settings' ? 'active' : ''}
          >
            Settings
          </Link>
        </div>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </nav>

      <div className="dashboard-content">
        {/* Quick actions demonstrating programmatic navigation */}
        <div className="quick-actions">
          <h3>Quick Actions</h3>
          <button onClick={() => handleQuickAction('profile')}>
            Go to Profile (Quick Access)
          </button>
          <button onClick={() => handleQuickAction('settings')}>
            Privacy Settings
          </button>
        </div>

        {/* Outlet for nested routes */}
        <div className="nested-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;