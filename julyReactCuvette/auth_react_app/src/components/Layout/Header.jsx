import React, { memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../Common/Button';

const Header = memo(() => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  console.log('Header rendered');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Fragment with key prop (when mapping in arrays)
  const navItems = [
    { path: '/', label: 'Home' },
    ...(isAuthenticated() 
      ? [
          { path: '/dashboard', label: 'Dashboard' },
          { path: '/profile', label: 'Profile' }
        ] 
      : []
    )
  ].map(item => (
    <React.Fragment key={item.path}>
      <Link 
        to={item.path} 
      >
        {item.label}
      </Link>
    </React.Fragment>
  ));

  return (
    <header>
      <nav>
        <div>
          <h1>MyApp</h1>
          <div>
            {navItems}
          </div>
        </div>
        
        <div>
          {isAuthenticated() ? (
            <>
              <span>Welcome, {user?.name}</span>
              <Button onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
              <Link to="/signup">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
});


export default Header;