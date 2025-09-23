// components/NotFound.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    // Programmatic navigation to home
    navigate('/dashboard', { replace: true });
  };

  const goBack = () => {
    // Go back to previous page
    navigate(-1);
  };

  return (
    <div className="not-found">
      <h2>404 - Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      
      <div className="not-found-actions">
        <button onClick={goBack}>Go Back</button>
        <button onClick={goHome}>Go to Dashboard</button>
      </div>
    </div>
  );
};

export default NotFound;