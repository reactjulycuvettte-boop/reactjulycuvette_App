import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, setRedirect } = useAuth();
  const location = useLocation();

  if (!isAuthenticated()) {
    setRedirect(location.pathname);
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;